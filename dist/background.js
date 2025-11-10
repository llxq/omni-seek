const m = "bookmark-search_db";
const c = "bookmarks";
class h {
  db;
  open() {
    return this.db ? Promise.resolve(this.db) : new Promise((e, t) => {
      const o = indexedDB.open(m, 1);
      o.onerror = (n) => {
        t(n.target.error);
      }, o.onsuccess = (n) => {
        this.db = n.target.result, e(this.db);
      }, o.onupgradeneeded = (n) => {
        const r = n.target.result;
        r.objectStoreNames.contains(c) || r.createObjectStore(c, { keyPath: "id" }).createIndex("id", "id", { unique: !0 });
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
    return new Promise((o, n) => {
      const r = t.add({
        ...e,
        createdTime: Date.now()
      });
      r.onsuccess = (s) => o(s.target.result), r.onerror = (s) => n(s.target.error);
    });
  }
  async get(e) {
    const t = await this._getStore("readonly");
    return new Promise((o, n) => {
      const r = t.get(e);
      r.onsuccess = (s) => o(s.target.result), r.onerror = (s) => n(s.target.error);
    });
  }
  async getAll() {
    const e = await this._getStore("readonly");
    return new Promise((t, o) => {
      const n = e.getAll();
      n.onsuccess = (r) => t(r.target.result), n.onerror = (r) => o(r.target.error);
    });
  }
  async delete(e) {
    const t = await this._getStore("readwrite");
    return new Promise((o, n) => {
      const r = t.delete(e);
      r.onsuccess = () => o(!0), r.onerror = (s) => n(s.target.error);
    });
  }
}
const d = new h(), _ = (a, e = "提示") => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title: e,
    message: a
  });
}, g = "GET_USER_TEMPORARY_DATA", i = "add_temporary_data", u = "add_default_data", l = "add_custom_data", E = "popup_type", T = () => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: i,
        title: "添加到书签搜索项",
        contexts: ["all"]
      }), chrome.contextMenus.create({
        id: u,
        title: "使用当前网站名称添加",
        parentId: i,
        contexts: ["all"]
      }), chrome.contextMenus.create({
        id: l,
        title: "自定义名称添加",
        parentId: i,
        contexts: ["all"]
      });
    });
  }), chrome.contextMenus.onClicked.addListener((a, e) => {
    if (e) {
      const t = {
        url: e.url,
        title: e.title,
        id: `${e.id}_${Date.now()}`,
        parentId: "",
        parentTitle: "",
        faviconURL: e.favIconUrl || ""
      };
      a.menuItemId === u ? d.add(t).then(() => {
        _("添加成功");
      }) : a.menuItemId === l && chrome.storage.local.set({
        [E]: {
          ...t,
          _t: Date.now()
        }
      }).then(() => {
        chrome.action.openPopup({
          windowId: e.windowId
        });
      });
    }
  });
}, p = () => {
  chrome.runtime.onMessage.addListener((a, e, t) => {
    if (a.type === g)
      return d.getAll().then((o) => {
        t({ data: o });
      }), !0;
  });
}, w = "SET_USER_TEMPORARY_DATA", A = () => {
  chrome.runtime.onMessage.addListener(({ type: a, data: e }) => {
    a === w && d.add(e).then(() => {
      _("保存成功");
    });
  });
};
T();
p();
A();
