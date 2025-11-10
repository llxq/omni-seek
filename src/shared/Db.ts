import type { IBookmark } from "./types.ts";

const DB_NAME = "bookmark-search_db";
const DB_VERSION = 1;
const STORE_NAME = "bookmarks";

export class Db {
  public db?: IDBDatabase;

  public open(): Promise<IDBDatabase> {
    if (this.db) {
      return Promise.resolve(this.db);
    }

    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (event: Event) => {
        reject((event.target as IDBRequest).error);
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBRequest).result;
        resolve(this.db!);
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db: IDBDatabase = (event.target as IDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
          store.createIndex("id", "id", { unique: true });
        }
      };
    });
  }

  public close(): void {
    if (this.db) {
      this.db.close();
      this.db = undefined;
    }
  }

  private async _getStore(mode: IDBTransactionMode): Promise<IDBObjectStore> {
    const db = await this.open();
    const transaction = db.transaction(STORE_NAME, mode);
    return transaction.objectStore(STORE_NAME);
  }

  public async add(data: IBookmark): Promise<string> {
    const store = await this._getStore("readwrite");
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...data,
        createdTime: Date.now(),
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

  public async update(data: IBookmark): Promise<string> {
    const store = await this._getStore("readwrite");
    return new Promise((resolve, reject) => {
      const request = store.put(data);
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

export const db = new Db();
