const g = "bookmark-search_db";
const c = "bookmarks";
class E {
  db;
  open() {
    return this.db ? Promise.resolve(this.db) : new Promise((e, t) => {
      const n = indexedDB.open(g, 1);
      n.onerror = (s) => {
        t(s.target.error);
      }, n.onsuccess = (s) => {
        this.db = s.target.result, e(this.db);
      }, n.onupgradeneeded = (s) => {
        const o = s.target.result;
        o.objectStoreNames.contains(c) || o.createObjectStore(c, { keyPath: "id" }).createIndex("id", "id", { unique: !0 });
      };
    });
  }
  close() {
    this.db && (this.db.close(), this.db = void 0);
  }
  async _getStore(e) {
    return (await this.open()).transaction(c, e).objectStore(c);
  }
  async add(e) {
    const t = await this._getStore("readwrite");
    return new Promise((n, s) => {
      const o = t.add({
        ...e,
        createdTime: Date.now()
      });
      o.onsuccess = (a) => n(a.target.result), o.onerror = (a) => s(a.target.error);
    });
  }
  async get(e) {
    const t = await this._getStore("readonly");
    return new Promise((n, s) => {
      const o = t.get(e);
      o.onsuccess = (a) => n(a.target.result), o.onerror = (a) => s(a.target.error);
    });
  }
  async getAll() {
    const e = await this._getStore("readonly");
    return new Promise((t, n) => {
      const s = e.getAll();
      s.onsuccess = (o) => t(o.target.result), s.onerror = (o) => n(o.target.error);
    });
  }
  async delete(e) {
    const t = await this._getStore("readwrite");
    return new Promise((n, s) => {
      const o = t.delete(e);
      o.onsuccess = () => n(!0), o.onerror = (a) => s(a.target.error);
    });
  }
}
const d = new E(), u = (r, e = "提示") => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title: e,
    message: r
  });
}, T = "GET_USER_TEMPORARY_DATA", i = "add_temporary_data", l = "add_default_data", m = "add_custom_data", p = "popup_type", _ = (r) => ({
  url: r.url,
  title: r.title,
  id: `${r.id}_${Date.now()}`,
  parentId: "",
  parentTitle: "",
  faviconURL: r.favIconUrl || ""
}), h = (r, e) => {
  chrome.storage.local.set({
    [p]: {
      ...r,
      _t: Date.now()
    }
  }).then(() => {
    chrome.action.openPopup({
      windowId: e.windowId
    });
  });
}, w = () => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: i,
        title: "添加到书签搜索项",
        contexts: ["all"]
      }), chrome.contextMenus.create({
        id: l,
        title: "使用当前网站名称添加",
        parentId: i,
        contexts: ["all"]
      }), chrome.contextMenus.create({
        id: m,
        title: "自定义名称添加",
        parentId: i,
        contexts: ["all"]
      });
    });
  }), chrome.contextMenus.onClicked.addListener((r, e) => {
    if (e) {
      const t = _(e);
      r.menuItemId === l ? d.add(t).then(() => {
        u("添加成功");
      }) : r.menuItemId === m && h(t, e);
    }
  });
}, S = () => {
  chrome.commands.onCommand.addListener((r) => {
    r === "add_temporary_bookmark" && chrome.tabs.query({ active: !0, currentWindow: !0 }).then((e) => {
      const [t] = e;
      if (!t) {
        u("无法获取当前tab，请刷新重试");
        return;
      }
      chrome.runtime.lastError ? console.log(chrome.runtime.lastError.message) : h(_(t), t);
    });
  });
}, b = () => {
  chrome.runtime.onMessage.addListener((r, e, t) => {
    if (r.type === T)
      return d.getAll().then((n) => {
        t({ data: n });
      }), !0;
  });
}, D = "SET_USER_TEMPORARY_DATA", y = () => {
  chrome.runtime.onMessage.addListener(({ type: r, data: e }) => {
    r === D && d.add(e).then(() => {
      u("保存成功");
    });
  });
};
S();
w();
b();
y();
