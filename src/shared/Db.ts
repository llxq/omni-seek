import type { IOmniSearchData } from "./types.ts";

export class BaseDb {
  public db?: IDBDatabase;
  public dbName: string;
  public storeName: string;
  public dbVersion: number;

  constructor(dbName: string, storeName: string, dbVersion?: number) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.dbVersion = dbVersion || 1;
  }

  /**
   * 打开数据库连接
   */
  public open(): Promise<IDBDatabase> {
    if (this.db) {
      return Promise.resolve(this.db);
    }

    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = indexedDB.open(
        this.dbName,
        this.dbVersion,
      );

      request.onerror = (event: Event) => {
        reject((event.target as IDBRequest).error);
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBRequest).result;
        resolve(this.db!);
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db: IDBDatabase = (event.target as IDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: "id" });
          store.createIndex("id", "id", { unique: true });
        }
      };
    });
  }

  /**
   * 关闭数据库连接
   */
  public close(): void {
    if (this.db) {
      this.db.close();
      this.db = undefined;
    }
  }

  private async _getStore(mode: IDBTransactionMode): Promise<IDBObjectStore> {
    const db = await this.open();
    const transaction = db.transaction(this.storeName, mode);
    return transaction.objectStore(this.storeName);
  }

  public async add(data: IOmniSearchData): Promise<string> {
    const store = await this._getStore("readwrite");
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...data,
        updateTime: Date.now(),
      });
      request.onsuccess = (event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }

  public async get(key: string): Promise<string> {
    const store = await this._getStore("readonly");
    return new Promise((resolve, reject) => {
      const request = store.get(key);
      request.onsuccess = (event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }

  public async getAll<T>(): Promise<T[]> {
    const store = await this._getStore("readonly");
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = (event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }

  public async update(data: IOmniSearchData): Promise<string> {
    const store = await this._getStore("readwrite");
    return new Promise((resolve, reject) => {
      const request = store.put({
        ...data,
        updateTime: Date.now(),
      });
      request.onsuccess = (event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }

  public async delete(key: string): Promise<boolean> {
    const store = await this._getStore("readwrite");
    return new Promise((resolve, reject) => {
      const request = store.delete(key);
      request.onsuccess = () => resolve(true);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }
}

/**
 * 默认数据库
 */
const DB_NAME = "omni-seek_db";
/**
 * 默认数据表
 */
const STORE_NAME = "omni-seek_store";

/**
 * 初始化数据库
 */
export const db = new BaseDb(DB_NAME, STORE_NAME);
