import type {
  IBookmark,
  ISearchBookmarkSetting,
  TSearchRule,
} from "./types.ts";

/**
 * 搜索匹配的时候默认的权重
 */
export const DEFAULT_WEIGHT = 100;

/**
 * 获取默认设置
 */
export const getDefaultSetting = (): ISearchBookmarkSetting => {
  return {
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0",
    enableExtensionSearch: "0",
    searchOpenedTab: "0",
  };
};

export const ruleSettingToWeight: Partial<Record<TSearchRule, number>> = {
  title: 100,
  url: 60,
  parentTitle: 30,
};

/**
 * 给设定的搜索规则增加去除空格的内容
 */
export const getFuseSearchResult = (item: IBookmark) => {
  const defaultSetting = getDefaultSetting();
  return {
    ...item,
    ...defaultSetting.searchRule.reduce((pre, cur) => {
      const value = Reflect.get(item, cur) as string;
      if (!value) return pre;
      Reflect.set(pre, `${cur}NoSpace`, value.replace(/\s+/g, ""));
      return pre;
    }, {}),
  };
};

/**
 * 切换到一个tab，并且让窗口聚焦
 */
export const switchTab = async (activeTabId?: number, windowId?: number) => {
  await Promise.all([
    // 切换激活的tab
    chrome.tabs.update(activeTabId, { active: true }),
    (async () => {
      if (windowId) {
        // 切换激活的窗口
        await chrome.windows.update(windowId, { focused: true });
      }
    })(),
  ]);
};

/**
 * 获取favicon
 * @param pageUrl
 */
export const getFaviconURL = (pageUrl?: string): string => {
  if (!pageUrl) {
    return "";
  }
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", pageUrl);
  url.searchParams.set("size", "24");
  return url.toString();
};

/**
 * 根据节点拿到所有的书签
 * @param node
 * @param parentTitle
 */
export const processBookmarks = (
  node: chrome.bookmarks.BookmarkTreeNode[],
  parentTitle = "",
) => {
  const bookmarks: IBookmark[] = [];
  for (const bookmarkTreeNode of node) {
    const currentTitle = parentTitle
      ? `${parentTitle}/${bookmarkTreeNode.title}`
      : bookmarkTreeNode.title;
    if (bookmarkTreeNode.url && bookmarkTreeNode.title) {
      bookmarks.push({
        url: bookmarkTreeNode.url,
        title: bookmarkTreeNode.title,
        id: bookmarkTreeNode.id,
        parentId: bookmarkTreeNode.parentId,
        parentTitle: currentTitle,
        faviconURL: getFaviconURL(bookmarkTreeNode.url),
      });
    } else if (Array.isArray(bookmarkTreeNode.children)) {
      bookmarks.push(
        ...processBookmarks(bookmarkTreeNode.children, currentTitle),
      );
    }
  }
  return bookmarks;
};

/**
 * 获取所有tab并且按照窗口进行分组
 */
export const getAllOpenTabs = async (
  searchOpenedTab: boolean,
): Promise<IBookmark[]> => {
  if (!searchOpenedTab) {
    return [];
  }
  const windows = await chrome.windows.getAll({ populate: false });
  const sortedWindows = windows.sort((a, b) => a.id! - b.id!);
  const bookmarks: IBookmark[] = [];
  const length = sortedWindows.length;
  for (let i = 0; i < length; i++) {
    const tabs = await chrome.tabs.query({ windowId: sortedWindows[i].id });
    tabs.forEach((tab) => {
      bookmarks.push({
        url: tab.url!,
        title: tab.title!,
        id: String(tab.id),
        parentId: "",
        parentTitle: "",
        faviconURL: getFaviconURL(tab.url),
        windowId: sortedWindows[i].id,
        windowIndex: i + 1,
        tabIndex: tab.index + 1,
        isOpenTab: true,
      });
    });
  }
  return bookmarks;
};
