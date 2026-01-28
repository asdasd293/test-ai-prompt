import localforage from "localforage";

// Configure localForage
const db = localforage.createInstance({
  name: "enterprise-react-app",
  storeName: "app_data",
  description: "Application data storage",
});

// Typed wrapper functions
export const dbStorage = {
  async getItem<T>(key: string): Promise<T | null> {
    return await db.getItem<T>(key);
  },

  async setItem<T>(key: string, value: T): Promise<T> {
    return await db.setItem<T>(key, value);
  },

  async removeItem(key: string): Promise<void> {
    return await db.removeItem(key);
  },

  async clear(): Promise<void> {
    return await db.clear();
  },

  async keys(): Promise<string[]> {
    return await db.keys();
  },

  async length(): Promise<number> {
    return await db.length();
  },
};

export default db;
