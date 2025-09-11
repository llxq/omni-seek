const l = "bookMarkSearch";
const m = () => new Promise((e) => {
  chrome.storage.local.get(l, (r) => {
    e(r[l] || []);
  });
}), f = (e) => {
  const r = new URL(chrome.runtime.getURL("/_favicon/"));
  return r.searchParams.set("pageUrl", e), r.searchParams.set("size", "24"), r.toString();
}, k = async () => new Promise(async (e) => {
  const r = [], o = (t, i = "") => {
    t.children && t.children.forEach(
      (s) => o(
        s,
        i ? `${i}/${t.title}` : t.title
      )
    ), t.url && t.title && r.push({
      url: t.url,
      title: t.title,
      id: t.id,
      parentId: t.parentId,
      parentTitle: i,
      faviconURL: f(t.url)
    });
  }, a = await chrome.bookmarks.getTree();
  Array.isArray(a) ? a.forEach((t) => o(t)) : o(a), e(r);
});
chrome.commands.onCommand.addListener((e) => {
  e === "open-bookmarks-search-dialog" && chrome.tabs.query({ active: !0, currentWindow: !0 }, async (r) => {
    const [o] = r;
    if (o) {
      const a = o.url;
      if (a && !a.startsWith("chrome://") && !a.startsWith("chrome-extension://"))
        try {
          const t = await k(), i = await m();
          o.id && await chrome.tabs.sendMessage(o.id, {
            action: "openPopup",
            bookMarks: t,
            historyBookmarks: i.map((s) => t.find((n) => n.url === s)).filter(Boolean)
          });
        } catch (t) {
          console.log("bookmark-search error:", t);
        }
      else
        console.log("Cannot inject script into this page:", a);
    }
  });
});
const h = (e) => e ? new URL(e).hostname : "";
let c = !1;
chrome.runtime.onMessage.addListener(async (e) => {
  if (e.action === "goToBookmark") {
    if (c)
      return;
    c = !0;
    const r = await m(), o = r.findIndex((i) => i === e.url);
    o !== -1 && r.splice(o, 1), r.unshift(e.url), r.length > 10 && r.pop(), await chrome.storage.local.set({
      [l]: r
    });
    const a = await chrome.storage.local.get("searchBookmarkSetting");
    let t;
    if (+a.searchBookmarkSetting.openNewTab == 0) {
      const i = await chrome.tabs.query({}), s = h(e.url);
      if (i?.length && s) {
        const n = i.find((u) => h(u.url) === s);
        n && (t = n.id);
      }
    }
    t ? await chrome.tabs.update(t, { active: !0 }) : await chrome.tabs.create({ url: e.url }), c = !1;
  }
});
