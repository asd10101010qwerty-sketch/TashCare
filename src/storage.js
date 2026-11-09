const fs = require('fs');
const path = require('path');

// Determine data directory: on Vercel, root filesystem is read-only, so use /tmp. Locally use ./data
const isVercel = Boolean(process.env.VERCEL);
const LOCAL_DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_DIR = isVercel ? path.join('/tmp', 'tashcare_data') : LOCAL_DATA_DIR;

const USERS_FILE = path.join(DATA_DIR, 'users.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Upstash Redis / Vercel KV REST API configuration
const UPSTASH_URL = (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || '').replace(/\/$/, '');
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || '';
const hasRedis = Boolean(UPSTASH_URL && UPSTASH_TOKEN);

// In-memory cache for ultra-fast lookups and cold-start fallback
const memoryCache = {
  users: null,
  subscribers: null,
  state: null,
  orders: null
};

// Ensure data directory exists and seed from local if on Vercel
function ensureDirAndSeed() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (isVercel && fs.existsSync(LOCAL_DATA_DIR)) {
      // Seed files from local project data to /tmp if not already present
      ['users.json', 'subscribers.json', 'state.json', 'orders.json'].forEach((filename) => {
        const srcFile = path.join(LOCAL_DATA_DIR, filename);
        const destFile = path.join(DATA_DIR, filename);
        if (fs.existsSync(srcFile) && !fs.existsSync(destFile)) {
          fs.copyFileSync(srcFile, destFile);
        }
      });
    }
  } catch (err) {
    console.warn('[Storage] Notice initializing directory:', err.message);
  }
}

ensureDirAndSeed();

// Safely read JSON from disk
function readJSON(filePath, defaultValue) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), 'utf8');
      return defaultValue;
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`[Storage] Error reading ${filePath}:`, err.message);
    return defaultValue;
  }
}

// Safely write JSON to disk
function writeJSON(filePath, data) {
  try {
    ensureDirAndSeed();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`[Storage] Error writing ${filePath}:`, err.message);
  }
}

// --- Upstash Redis REST Helpers (Zero external dependencies, uses native fetch) ---
async function redisGet(key) {
  if (!hasRedis) return null;
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${key}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (json && json.result != null) {
      return typeof json.result === 'string' ? JSON.parse(json.result) : json.result;
    }
  } catch (err) {
    console.error(`[Redis] Error getting key ${key}:`, err.message);
  }
  return null;
}

async function redisSet(key, value) {
  if (!hasRedis) return false;
  try {
    const res = await fetch(`${UPSTASH_URL}/set/${key}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });
    return res.ok;
  } catch (err) {
    console.error(`[Redis] Error setting key ${key}:`, err.message);
  }
  return false;
}

// --- USERS MANAGEMENT ---
async function getUsers() {
  if (hasRedis) {
    const redisUsers = await redisGet('tashcare:users');
    if (Array.isArray(redisUsers)) {
      memoryCache.users = redisUsers;
      return redisUsers;
    }
  }

  if (memoryCache.users) return memoryCache.users;
  const diskUsers = readJSON(USERS_FILE, []);
  memoryCache.users = diskUsers;
  return diskUsers;
}

function getUsersSync() {
  if (memoryCache.users) return memoryCache.users;
  const diskUsers = readJSON(USERS_FILE, []);
  memoryCache.users = diskUsers;
  return diskUsers;
}

async function saveUser(username, metadata = {}) {
  const users = await getUsers();
  const cleanedUsername = username.replace(/^@/, '').trim();
  const newUser = {
    id: Date.now().toString(),
    username: cleanedUsername,
    registeredAt: new Date().toISOString(),
    ...metadata
  };
  users.push(newUser);
  memoryCache.users = users;
  writeJSON(USERS_FILE, users);

  if (hasRedis) {
    redisSet('tashcare:users', users).catch(() => {});
  }
  return newUser;
}

// --- SUBSCRIBERS MANAGEMENT (Telegram User Bot) ---
async function getSubscribers() {
  if (hasRedis) {
    const redisSubs = await redisGet('tashcare:subscribers');
    if (Array.isArray(redisSubs)) {
      memoryCache.subscribers = redisSubs;
      return redisSubs;
    }
  }

  if (memoryCache.subscribers) return memoryCache.subscribers;
  const diskSubs = readJSON(SUBSCRIBERS_FILE, []);
  memoryCache.subscribers = diskSubs;
  return diskSubs;
}

function getSubscribersSync() {
  if (memoryCache.subscribers) return memoryCache.subscribers;
  const diskSubs = readJSON(SUBSCRIBERS_FILE, []);
  memoryCache.subscribers = diskSubs;
  return diskSubs;
}

async function addSubscriber(chatId, userInfo = {}) {
  const subscribers = await getSubscribers();
  const numericId = Number(chatId);
  const existingIndex = subscribers.findIndex(s => Number(s.chatId) === numericId);

  const subscriberData = {
    chatId: numericId,
    username: userInfo.username || null,
    firstName: userInfo.first_name || '',
    lastName: userInfo.last_name || '',
    subscribedAt: existingIndex >= 0 ? subscribers[existingIndex].subscribedAt : new Date().toISOString(),
    lastActiveAt: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    subscribers[existingIndex] = subscriberData;
  } else {
    subscribers.push(subscriberData);
  }

  memoryCache.subscribers = subscribers;
  writeJSON(SUBSCRIBERS_FILE, subscribers);

  if (hasRedis) {
    redisSet('tashcare:subscribers', subscribers).catch(() => {});
  }
  return subscriberData;
}

// --- STATE MANAGEMENT (Active Admin, Sessions, Pending Actions) ---
const DEFAULT_ADMIN_IDS = ['6546050709', '5026059343', '6712132603', '7539181730'];

const DEFAULT_STATE = {
  activeAdminChatId: 6712132603,
  authenticatedAdmins: ['6546050709', '5026059343', '6712132603', '7539181730'],
  pendingActions: {},
  updatedAt: new Date().toISOString()
};

async function getState(defaultAdminChatId) {
  const fallback = {
    ...DEFAULT_STATE,
    activeAdminChatId: defaultAdminChatId ? Number(defaultAdminChatId) : 6712132603
  };

  if (hasRedis) {
    const redisState = await redisGet('tashcare:state');
    if (redisState && typeof redisState === 'object') {
      memoryCache.state = redisState;
      return redisState;
    }
  }

  if (memoryCache.state) return memoryCache.state;
  const diskState = readJSON(STATE_FILE, fallback);
  memoryCache.state = diskState;
  return diskState;
}

function getStateSync(defaultAdminChatId) {
  if (memoryCache.state) return memoryCache.state;
  const fallback = {
    ...DEFAULT_STATE,
    activeAdminChatId: defaultAdminChatId ? Number(defaultAdminChatId) : 6712132603
  };
  const diskState = readJSON(STATE_FILE, fallback);
  memoryCache.state = diskState;
  return diskState;
}

async function setActiveAdminChatId(chatId) {
  const state = await getState();
  const numId = Number(chatId);
  state.activeAdminChatId = numId;
  if (!Array.isArray(state.authenticatedAdmins)) {
    state.authenticatedAdmins = ['6546050709', '5026059343', '6712132603', '7539181730'];
  }
  const strId = String(chatId);
  if (!state.authenticatedAdmins.includes(strId)) {
    state.authenticatedAdmins.push(strId);
  }
  state.updatedAt = new Date().toISOString();
  memoryCache.state = state;
  writeJSON(STATE_FILE, state);

  if (hasRedis) {
    redisSet('tashcare:state', state).catch(() => {});
  }
  return state.activeAdminChatId;
}

async function isChatAdmin(chatId, defaultAdminChatId) {
  const strId = String(chatId);
  if (DEFAULT_ADMIN_IDS.includes(strId)) return true;

  if (Array.isArray(defaultAdminChatId)) {
    if (defaultAdminChatId.map(String).includes(strId)) return true;
  } else if (defaultAdminChatId && String(defaultAdminChatId) === strId) {
    return true;
  }

  const state = await getState();
  if (String(state.activeAdminChatId) === strId) return true;
  if (Array.isArray(state.authenticatedAdmins) && state.authenticatedAdmins.map(String).includes(strId)) return true;
  return false;
}

async function setPendingAction(chatId, action) {
  const state = await getState();
  if (!state.pendingActions) state.pendingActions = {};
  state.pendingActions[String(chatId)] = action;
  memoryCache.state = state;
  writeJSON(STATE_FILE, state);
  if (hasRedis) {
    redisSet('tashcare:state', state).catch(() => {});
  }
}

async function getPendingAction(chatId) {
  const state = await getState();
  if (!state.pendingActions) return null;
  return state.pendingActions[String(chatId)] || null;
}

async function clearPendingAction(chatId) {
  const state = await getState();
  if (state.pendingActions && state.pendingActions[String(chatId)]) {
    delete state.pendingActions[String(chatId)];
    memoryCache.state = state;
    writeJSON(STATE_FILE, state);
    if (hasRedis) {
      redisSet('tashcare:state', state).catch(() => {});
    }
  }
}

// --- Orders Management ---
async function getOrders() {
  if (memoryCache.orders) return memoryCache.orders;
  if (hasRedis) {
    const redisOrders = await redisGet('tashcare:orders');
    if (Array.isArray(redisOrders)) {
      memoryCache.orders = redisOrders;
      return redisOrders;
    }
  }
  const orders = readJSON(ORDERS_FILE, []);
  memoryCache.orders = orders;
  return orders;
}

async function saveOrder(orderData) {
  const orders = await getOrders();
  const newOrder = {
    id: `ORD-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
    itemId: orderData.itemId || 'custom',
    title: orderData.title,
    price: Number(orderData.price) || 0,
    code: orderData.code,
    username: orderData.username || null,
    status: 'pending', // 'pending' | 'completed'
    createdAt: new Date().toISOString(),
    completedAt: null,
    completedBy: null,
    ip: orderData.ip || null,
    userAgent: orderData.userAgent || null
  };

  orders.push(newOrder);
  memoryCache.orders = orders;
  writeJSON(ORDERS_FILE, orders);

  if (hasRedis) {
    redisSet('tashcare:orders', orders).catch(() => {});
  }
  return newOrder;
}

async function getOrderByCode(code) {
  if (!code) return null;
  const orders = await getOrders();
  return orders.find(o => o.code === code) || null;
}

async function markOrderCompleted(code, adminInfo) {
  const orders = await getOrders();
  const order = orders.find(o => o.code === code);
  if (!order) return null;

  order.status = 'completed';
  order.completedAt = new Date().toISOString();
  order.completedBy = adminInfo || 'admin';

  memoryCache.orders = orders;
  writeJSON(ORDERS_FILE, orders);

  if (hasRedis) {
    redisSet('tashcare:orders', orders).catch(() => {});
  }
  return order;
}

module.exports = {
  isVercel,
  hasRedis,
  getUsers,
  getUsersSync,
  saveUser,
  getSubscribers,
  getSubscribersSync,
  addSubscriber,
  getState,
  getStateSync,
  setActiveAdminChatId,
  isChatAdmin,
  setPendingAction,
  getPendingAction,
  clearPendingAction,
  getOrders,
  getOrderByCode,
  saveOrder,
  markOrderCompleted
};
