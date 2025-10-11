import type { IBookmark, ISearchBookmarkSetting } from "./shared/types.ts";

/**
 * 搜索的标签历史记录 缓存的key
 */
const BOOK_MARK_SEARCH_LOCAL_STORAGE_ID = "bookMarkSearch";

/**
 * 最大缓存记录条数
 */
const MAX_HISTORY_COUNT = 10;

/**
 * 获取历史选中的数据
 */
const getSelectHistory = (): Promise<string[]> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(BOOK_MARK_SEARCH_LOCAL_STORAGE_ID, (result) => {
      resolve(result[BOOK_MARK_SEARCH_LOCAL_STORAGE_ID] || []);
    });
  });
};

/**
 * 获取favicon
 * @param pageUrl
 */
const getFaviconURL = (pageUrl: string): string => {
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", pageUrl);
  url.searchParams.set("size", "24");
  return url.toString();
};

/**
 * 获取所有的书签
 */
const getBookmarks = async () => {
  return new Promise<IBookmark[]>(async (resolve) => {
    const bookmarks: IBookmark[] = [];

    /**
     * 根据节点拿到所有的书签
     * @param node
     * @param parentTitle
     */
    const getBookmarksByNode = (
      node: chrome.bookmarks.BookmarkTreeNode,
      parentTitle = "",
    ) => {
      // 如果没有url，则可能是文件夹。记录父节点的title
      if (node.children) {
        node.children.forEach((n) =>
          getBookmarksByNode(
            n,
            parentTitle ? `${parentTitle}/${node.title}` : node.title,
          ),
        );
      }
      // 不留存目录，只查询书签
      if (node.url && node.title) {
        bookmarks.push({
          url: node.url,
          title: node.title,
          id: node.id,
          parentId: node.parentId,
          parentTitle,
          faviconURL: getFaviconURL(node.url),
        });
      }
    };

    const nodes = await chrome.bookmarks.getTree();
    if (Array.isArray(nodes)) {
      nodes.forEach((node) => getBookmarksByNode(node));
    } else {
      getBookmarksByNode(nodes);
    }

    resolve(bookmarks);
  });
};

/**
 * 监听快捷键按下
 */
chrome.commands.onCommand.addListener((command) => {
  if (command === "open-bookmarks-search-dialog") {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const [tab] = tabs;
      if (tab) {
        const url = tab.url;
        if (
          url &&
          !url.startsWith("chrome://") &&
          !url.startsWith("chrome-extension://")
        ) {
          try {
            const bookMarks = await getBookmarks();
            const historyBookmarks = await getSelectHistory();
            if (tab.id) {
              await chrome.tabs.sendMessage(tab.id, {
                action: "openPopup",
                bookMarks,
                historyBookmarks: historyBookmarks
                  .map((m) => bookMarks.find((b) => b.url === m))
                  .filter(Boolean),
              });
            }
          } catch (e) {
            console.log("bookmark-search error:", e);
          }
        } else {
          console.log("Cannot inject script into this page:", url);
        }
      }
    });
  }
});

/**
 * 获取某个url的域名
 */
const getDomain = (url?: string) => {
  if (!url) return "";
  return new URL(url).hostname;
};

// 用于防止多次点击打开相同窗口
let isOpening = false;
/**
 * 监听来自 popup.html 的消息，进行跳转
 */
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === "goToBookmark") {
    if (isOpening) {
      return;
    }
    isOpening = true;
    try {
      // 拿到配置
      let data = await chrome.storage.local.get<{
        searchBookmarkSetting: ISearchBookmarkSetting;
      }>("searchBookmarkSetting");
      // default setting
      if (!Object.keys(data).length) {
        data = {
          searchBookmarkSetting: {
            openNewTab: "1",
            searchRule: ["url", "title", "parentTitle"],
            useDefaultSearch: "0",
          },
        };
      }
      if (!message.url) {
        if (
          data.searchBookmarkSetting.useDefaultSearch === "1" &&
          message.keyword
        ) {
          await chrome.search.query({
            disposition: "NEW_TAB",
            text: message.keyword,
          });
        }
        return;
      }
      // 记录当前跳转过的书签
      const history = await getSelectHistory();
      // 每次点过的会放在最前面
      const index = history.findIndex((h) => h === message.url);
      if (index !== -1) {
        history.splice(index, 1);
      }
      history.unshift(message.url);
      if (history.length > MAX_HISTORY_COUNT) {
        history.pop();
      }
      await chrome.storage.local.set({
        [BOOK_MARK_SEARCH_LOCAL_STORAGE_ID]: history,
      });
      const isCtrl = Boolean(message.isCtrl);
      let activeId: TUndefinable<number>, activeWindowId: TUndefinable<number>;
      if (!isCtrl && +data.searchBookmarkSetting.openNewTab === 0) {
        const tab = await chrome.tabs.query({});
        const domain = getDomain(message.url);
        if (tab?.length && domain) {
          const findTab = tab.find((t) => getDomain(t.url) === domain);
          if (findTab) {
            activeId = findTab.id;
            activeWindowId = findTab.windowId;
          }
        }
      }
      if (activeId) {
        await Promise.all([
          chrome.tabs.update(activeId, { active: true }),
          () => {
            if (activeWindowId) {
              chrome.windows.update(activeWindowId, { focused: true });
            }
          },
        ]);
      } else {
        await chrome.tabs.create({ url: message.url });
      }
    } finally {
      isOpening = false;
    }
  }
});
