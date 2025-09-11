const o = "__bookmarks_search__";
let a = [], i = [];
const r = () => {
  const e = document.getElementById(o);
  e && Object.assign(e.style, {
    display: "none"
  }), window.focus();
}, s = () => {
  const e = document.getElementById(o)?.querySelector("iframe");
  e && (e.contentWindow?.postMessage({ action: "focusInput" }, "*"), m());
}, d = () => {
  const e = document.createElement("iframe");
  return e.src = chrome.runtime.getURL("popup.html"), Object.assign(e.style, {
    width: "100%",
    height: "100%"
  }), e;
}, m = async () => {
  try {
    await chrome.runtime.sendMessage({
      action: "updateBookMarks",
      bookmarks: a,
      historyBookmarks: i
    });
  } catch (e) {
    console.log("bookmark-search error:", e);
  }
}, k = () => {
  let e = document.getElementById(o);
  if (e)
    Object.assign(e.style, {
      display: "initial"
    }), s();
  else {
    e = document.createElement("div"), e.id = o, Object.assign(e.style, {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      // max-zIndex
      zIndex: 2147483647
    });
    const c = d();
    e.appendChild(c), document.body.appendChild(e), window.addEventListener("message", async (n) => {
      const t = n.data?.action ?? "";
      t === "initSuccess" ? s() : t === "closePopup" ? r() : t === "goToBookmark" && await chrome.runtime.sendMessage({
        action: "goToBookmark",
        ...n.data
      });
    });
  }
};
chrome.runtime.onMessage.addListener((e) => {
  e.action === "openPopup" && (a = e.bookMarks || [], i = e.historyBookmarks || [], k());
});
