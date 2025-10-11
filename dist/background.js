const h = "bookMarkSearch";
const m = () => new Promise((t) => {
  chrome.storage.local.get(h, (r) => {
    t(r[h] || []);
  });
}), d = (t) => {
  const r = new URL(chrome.runtime.getURL("/_favicon/"));
  return r.searchParams.set("pageUrl", t), r.searchParams.set("size", "24"), r.toString();
}, w = async () => new Promise(async (t) => {
  const r = [], o = (e, i = "") => {
    e.children && e.children.forEach(
      (s) => o(
        s,
        i ? `${i}/${e.title}` : e.title
      )
    ), e.url && e.title && r.push({
      url: e.url,
      title: e.title,
      id: e.id,
      parentId: e.parentId,
      parentTitle: i,
      faviconURL: d(e.url)
    });
  }, a = await chrome.bookmarks.getTree();
  Array.isArray(a) ? a.forEach((e) => o(e)) : o(a), t(r);
});
chrome.commands.onCommand.addListener((t) => {
  t === "open-bookmarks-search-dialog" && chrome.tabs.query({ active: !0, currentWindow: !0 }, async (r) => {
    const [o] = r;
    if (o) {
      const a = o.url;
      if (a && !a.startsWith("chrome://") && !a.startsWith("chrome-extension://"))
        try {
          const e = await w(), i = await m();
          o.id && await chrome.tabs.sendMessage(o.id, {
            action: "openPopup",
            bookMarks: e,
            historyBookmarks: i.map((s) => e.find((n) => n.url === s)).filter(Boolean)
          });
        } catch (e) {
          console.log("bookmark-search error:", e);
        }
      else
        console.log("Cannot inject script into this page:", a);
    }
  });
});
const f = (t) => t ? new URL(t).hostname : "";
let l = !1;
chrome.runtime.onMessage.addListener(async (t) => {
  if (t.action === "goToBookmark") {
    if (l)
      return;
    l = !0;
    try {
      let r = await chrome.storage.local.get("searchBookmarkSetting");
      if (Object.keys(r).length || (r = {
        searchBookmarkSetting: {
          openNewTab: "1",
          searchRule: ["url", "title", "parentTitle"],
          useDefaultSearch: "0"
        }
      }), !t.url) {
        r.searchBookmarkSetting.useDefaultSearch === "1" && t.keyword && await chrome.search.query({
          disposition: "NEW_TAB",
          text: t.keyword
        });
        return;
      }
      const o = await m(), a = o.findIndex((n) => n === t.url);
      a !== -1 && o.splice(a, 1), o.unshift(t.url), o.length > 10 && o.pop(), await chrome.storage.local.set({
        [h]: o
      });
      const e = !!t.isCtrl;
      let i, s;
      if (!e && +r.searchBookmarkSetting.openNewTab == 0) {
        const n = await chrome.tabs.query({}), u = f(t.url);
        if (n?.length && u) {
          const c = n.find((k) => f(k.url) === u);
          c && (i = c.id, s = c.windowId);
        }
      }
      i ? await Promise.all([
        chrome.tabs.update(i, { active: !0 }),
        () => {
          s && chrome.windows.update(s, { focused: !0 });
        }
      ]) : await chrome.tabs.create({ url: t.url });
    } finally {
      l = !1;
    }
  }
});
