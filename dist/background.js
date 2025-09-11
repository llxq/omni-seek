const l = "bookMarkSearch";
const u = () => new Promise((r) => {
  chrome.storage.local.get(l, (e) => {
    r(e[l] || []);
  });
}), f = (r) => {
  const e = new URL(chrome.runtime.getURL("/_favicon/"));
  return e.searchParams.set("pageUrl", r), e.searchParams.set("size", "24"), e.toString();
}, k = async () => new Promise(async (r) => {
  const e = [], o = (t, i = "") => {
    t.children && t.children.forEach(
      (s) => o(
        s,
        i ? `${i}/${t.title}` : t.title
      )
    ), t.url && t.title && e.push({
      url: t.url,
      title: t.title,
      id: t.id,
      parentId: t.parentId,
      parentTitle: i,
      faviconURL: f(t.url)
    });
  }, a = await chrome.bookmarks.getTree();
  Array.isArray(a) ? a.forEach((t) => o(t)) : o(a), r(e);
});
chrome.commands.onCommand.addListener((r) => {
  r === "open-bookmarks-search-dialog" && chrome.tabs.query({ active: !0, currentWindow: !0 }, async (e) => {
    const [o] = e;
    if (o) {
      const a = o.url;
      if (a && !a.startsWith("chrome://") && !a.startsWith("chrome-extension://"))
        try {
          const t = await k(), i = await u();
          o.id && await chrome.tabs.sendMessage(o.id, {
            action: "openPopup",
            bookMarks: t,
            historyBookmarks: i.map((s) => t.find((c) => c.url === s)).filter(Boolean)
          });
        } catch (t) {
          console.log("bookmark-search error:", t);
        }
      else
        console.log("Cannot inject script into this page:", a);
    }
  });
});
const h = (r) => r ? new URL(r).hostname : "";
let n = !1;
chrome.runtime.onMessage.addListener(async (r) => {
  if (r.action === "goToBookmark") {
    if (n)
      return;
    n = !0;
    const e = await chrome.storage.local.get("searchBookmarkSetting");
    if (!r.url) {
      e.searchBookmarkSetting.useDefaultSearch === "1" && r.keyword && await chrome.search.query({
        disposition: "NEW_TAB",
        text: r.keyword
      });
      return;
    }
    const o = await u(), a = o.findIndex((i) => i === r.url);
    a !== -1 && o.splice(a, 1), o.unshift(r.url), o.length > 10 && o.pop(), await chrome.storage.local.set({
      [l]: o
    });
    let t;
    if (+e.searchBookmarkSetting.openNewTab == 0) {
      const i = await chrome.tabs.query({}), s = h(r.url);
      if (i?.length && s) {
        const c = i.find((m) => h(m.url) === s);
        c && (t = c.id);
      }
    }
    t ? await chrome.tabs.update(t, { active: !0 }) : await chrome.tabs.create({ url: r.url }), n = !1;
  }
});
