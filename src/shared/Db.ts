import { EDbStore } from "./enum.ts";
import type { IClickCountData, IOmniCollectSearchData } from "./types.ts";

/**
 * 默认数据库
 */
const DB_NAME = "omni-seek_db";

/**
 * 数据库版本
 * @description 当前版本为2
 * 版本1: 默认只有收藏的数据
 * 版本2: 增加了点击次数数据
 */
const DB_VERSION = 2;

const DB_STORES = [
  { name: EDbStore.COLLECTION, options: { keyPath: "id" } },
  { name: EDbStore.CLICK_COUNT, options: { keyPath: "id" } },
];

export class BaseDb<T extends { id: string; updateTime?: number }> {
  public db?: IDBDatabase;
  public dbName: string;
  public storeName: string;
  public dbVersion: number;

  constructor(storeName: string) {
    this.storeName = storeName;
    this.dbName = DB_NAME;
    this.dbVersion = DB_VERSION;
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
        DB_STORES.forEach((storeDef) => {
          if (!db.objectStoreNames.contains(storeDef.name)) {
            const store = db.createObjectStore(storeDef.name, storeDef.options);
            store.createIndex("id", "id", { unique: true });
          }
        });
      };
    });
  }

  private async _getStore(mode: IDBTransactionMode): Promise<IDBObjectStore> {
    const db = await this.open();
    const transaction = db.transaction(this.storeName, mode);
    return transaction.objectStore(this.storeName);
  }

  public async add(data: T): Promise<string> {
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

  public async get(key: string): Promise<T> {
    const store = await this._getStore("readonly");
    return new Promise((resolve, reject) => {
      const request = store.get(key);
      request.onsuccess = (event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }

  public async getAll(): Promise<T[]> {
    const store = await this._getStore("readonly");
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = (event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  }

  public async update(data: T): Promise<string> {
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
 * 初始化收藏数据库
 */
export const collectDb = new BaseDb<IOmniCollectSearchData>(
  EDbStore.COLLECTION,
);

/**
 * 初始化点击次数数据库
 * @description 目前两个用不用的实例
 */
export const clickCountDb = new BaseDb<IClickCountData>(EDbStore.CLICK_COUNT);
