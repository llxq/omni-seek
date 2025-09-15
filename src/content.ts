import type { IBookmark } from "./shared/types.ts";

/**
 * 搜索的标签历史记录容器 DOM ID
 */
const SEARCH_CONTAINER_DOM_ID = "__bookmarks_search__";

let bookmarks: IBookmark[] = [];
let historyBookmarks: IBookmark[] = [];

/**
 * 隐藏搜索框容器
 */
const hiddenBookmarksContainer = () => {
  const container = document.getElementById(SEARCH_CONTAINER_DOM_ID);
  if (container) {
    Object.assign(container.style, {
      display: "none",
    });
  }
  /* 恢复焦点 */
  window.focus();
};

/**
 * 聚焦搜索的输入框
 */
const focusInput = () => {
  const iframe = document
    .getElementById(SEARCH_CONTAINER_DOM_ID)
    ?.querySelector("iframe");
  if (iframe) {
    // 通过postMessage发送消息
    iframe.contentWindow?.postMessage({ action: "focusInput" }, "*");
    void sendBookmarksDataToPopup();
  }
};

/**
 * 创建一个iframe用于放置搜索内容
 */
const createBookmarksContent = (): HTMLIFrameElement => {
  const iframe = document.createElement("iframe");
  iframe.src = chrome.runtime.getURL("popup.html");
  Object.assign(iframe.style, {
    width: "100%",
    height: "100%",
  });
  return iframe;
};

/**
 * 发送标签数据给到popup
 */
const sendBookmarksDataToPopup = async () => {
  try {
    await chrome.runtime.sendMessage({
      action: "updateBookMarks",
      bookmarks,
      historyBookmarks,
    });
  } catch (e) {
    console.log("bookmark-search error:", e);
  }
};

/**
 * 创建搜索框
 */
const createBookmarksContainer = () => {
  // 取消所有的选中数据
  document.getSelection()?.removeAllRanges();
  let container = document.getElementById(SEARCH_CONTAINER_DOM_ID);
  if (container) {
    Object.assign(container.style, {
      display: "initial",
    });
    focusInput();
  } else {
    container = document.createElement("div");
    container.id = SEARCH_CONTAINER_DOM_ID;
    Object.assign(container.style, {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      // max-zIndex
      zIndex: 2147483647,
    });
    const iframe = createBookmarksContent();
    container.appendChild(iframe);
    document.body.appendChild(container);
    window.addEventListener("message", async (e) => {
      const action = e.data?.action ?? "";
      if (action === "initSuccess") {
        focusInput();
      } else if (action === "closePopup") {
        hiddenBookmarksContainer();
      } else if (action === "goToBookmark") {
        await chrome.runtime.sendMessage({
          action: "goToBookmark",
          ...e.data,
        });
      }
    });
  }
};

// 监听来自 popup.html 的消息
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "openPopup") {
    bookmarks = message.bookMarks || [];
    historyBookmarks = message.historyBookmarks || [];
    createBookmarksContainer();
  }
});
