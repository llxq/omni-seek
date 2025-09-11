const o = "__bookmarks_search__";
let i = [], r = [];
const m = () => {
  const e = document.getElementById(o);
  e && Object.assign(e.style, {
    display: "none"
  }), window.focus();
}, s = () => {
  const e = document.getElementById(o)?.querySelector("iframe");
  e && (e.contentWindow?.postMessage({ action: "focusInput" }, "*"), k());
}, l = () => {
  const e = document.createElement("iframe");
  return e.src = chrome.runtime.getURL("popup.html"), Object.assign(e.style, {
    width: "100%",
    height: "100%"
  }), e;
}, k = async () => {
  try {
    await chrome.runtime.sendMessage({
      action: "updateBookMarks",
      bookmarks: i,
      historyBookmarks: r
    });
  } catch (e) {
    console.log("bookmark-search error:", e);
  }
}, u = () => {
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
    const c = l();
    e.appendChild(c), document.body.appendChild(e), window.addEventListener("message", async (t) => {
      const n = t.data?.action ?? "";
      if (n === "initSuccess")
        s();
      else if (n === "closePopup")
        m();
      else if (n === "goToBookmark") {
        const a = t.data?.url;
        if (a)
          try {
            await chrome.runtime.sendMessage({
              action: "goToBookmark",
              ...t.data,
              url: a
            });
          } catch (d) {
            console.log("bookmark-search error:", d);
          }
      }
    });
  }
};
chrome.runtime.onMessage.addListener((e) => {
  e.action === "openPopup" && (i = e.bookMarks || [], r = e.historyBookmarks || [], u());
});
