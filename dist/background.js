const l = "bookMarkSearch";
const m = () => new Promise((t) => {
  chrome.storage.local.get(l, (e) => {
    t(e[l] || []);
  });
}), k = (t) => {
  const e = new URL(chrome.runtime.getURL("/_favicon/"));
  return e.searchParams.set("pageUrl", t), e.searchParams.set("size", "24"), e.toString();
}, d = async () => new Promise(async (t) => {
  const e = [], o = (r, i = "") => {
    r.children && r.children.forEach(
      (s) => o(
        s,
        i ? `${i}/${r.title}` : r.title
      )
    ), r.url && r.title && e.push({
      url: r.url,
      title: r.title,
      id: r.id,
      parentId: r.parentId,
      parentTitle: i,
      faviconURL: k(r.url)
    });
  }, a = await chrome.bookmarks.getTree();
  Array.isArray(a) ? a.forEach((r) => o(r)) : o(a), t(e);
});
chrome.commands.onCommand.addListener((t) => {
  t === "open-bookmarks-search-dialog" && chrome.tabs.query({ active: !0, currentWindow: !0 }, async (e) => {
    const [o] = e;
    if (o) {
      const a = o.url;
      if (a && !a.startsWith("chrome://") && !a.startsWith("chrome-extension://"))
        try {
          const r = await d(), i = await m();
          o.id && await chrome.tabs.sendMessage(o.id, {
            action: "openPopup",
            bookMarks: r,
            historyBookmarks: i.map((s) => r.find((n) => n.url === s)).filter(Boolean)
          });
        } catch (r) {
          console.log("bookmark-search error:", r);
        }
      else
        console.log("Cannot inject script into this page:", a);
    }
  });
});
const u = (t) => t ? new URL(t).hostname : "";
let c = !1;
chrome.runtime.onMessage.addListener(async (t) => {
  if (t.action === "goToBookmark") {
    if (c)
      return;
    c = !0;
    try {
      const e = await chrome.storage.local.get("searchBookmarkSetting");
      if (!t.url) {
        e.searchBookmarkSetting.useDefaultSearch === "1" && t.keyword && await chrome.search.query({
          disposition: "NEW_TAB",
          text: t.keyword
        });
        return;
      }
      const o = await m(), a = o.findIndex((s) => s === t.url);
      a !== -1 && o.splice(a, 1), o.unshift(t.url), o.length > 10 && o.pop(), await chrome.storage.local.set({
        [l]: o
      });
      const r = !!t.isCtrl;
      let i;
      if (!r && +e.searchBookmarkSetting.openNewTab == 0) {
        const s = await chrome.tabs.query({}), n = u(t.url);
        if (s?.length && n) {
          const h = s.find((f) => u(f.url) === n);
          h && (i = h.id);
        }
      }
      i ? await chrome.tabs.update(i, { active: !0 }) : await chrome.tabs.create({ url: t.url });
    } finally {
      c = !1;
    }
  }
});
