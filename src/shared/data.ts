import { clickCountDb } from "./Db.ts";
import { getCollectionData } from "./event.ts";
import type { IOmniSearchData } from "./types.ts";

/**
 * 获取favicon
 * @param pageUrl
 */
const getFaviconURL = (pageUrl?: string): string => {
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
const processBookmarks = (
  node: chrome.bookmarks.BookmarkTreeNode[],
  parentTitle = "",
): IOmniSearchData[] => {
  const bookmarks: IOmniSearchData[] = [];
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
): Promise<IOmniSearchData[]> => {
  if (!searchOpenedTab) {
    return [];
  }
  const windows = await chrome.windows.getAll({ populate: false });
  const sortedWindows = windows.sort((a, b) => a.id! - b.id!);
  const bookmarks: IOmniSearchData[] = [];
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

/**
 * 获取所有的搜索数据
 * @param searchOpenedTab 是否搜索打开的tab
 */
export const getAllSearchData = async (
  searchOpenedTab: boolean,
): Promise<IOmniSearchData[]> => {
  const [bookmarks, collectionData, openTabs] = await Promise.all([
    processBookmarks(await chrome.bookmarks.getTree()),
    getCollectionData(),
    getAllOpenTabs(searchOpenedTab),
  ]);
  const data: IOmniSearchData[] = [
    ...openTabs,
    ...bookmarks,
    ...collectionData.map((m) => ({
      ...m,
      isCollect: true,
    })),
  ];
  const clickCountData = (await clickCountDb.getAll()) || [];
  const clickCountMap = new Map<string, number>(
    clickCountData.map((d) => [d.id, d.clickCount]),
  );
  data.forEach((d) => {
    d.clickCount = clickCountMap.get(d.id) || 0;
    clickCountMap.delete(d.id);
  });
  // 删除已经不存在的数据
  if (clickCountMap.size > 0) {
    const ids = Array.from(clickCountMap.keys());
    ids.forEach((id) => {
      clickCountDb.delete(id);
    });
  }
  return data;
};
