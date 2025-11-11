import { useEffect, useState } from "react";
import { sendGetTemporaryDataEvent } from "../../shared/event.ts";
import { getStorage, setStorage } from "../../shared/storage.ts";
import type { IBookmark, TSearchRule } from "../../shared/types.ts";
import { findSimilarTab, getDomain } from "../../shared/url.ts";
import { useSearchSetting } from "./useSearchSetting.ts";

/**
 * 搜索的标签历史记录 缓存的key
 */
const BOOK_MARK_SEARCH_LOCAL_STORAGE_ID = "bookMarkSearch";

/**
 * 最大缓存记录条数
 */
const MAX_HISTORY_COUNT = 10;

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
 * 根据节点拿到所有的书签
 * @param node
 * @param parentTitle
 */
const processBookmarks = (
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
 * 获取所有的书签
 */
const getBookmarks = async () => {
  try {
    const [bookmarks, userTemplateData] = await Promise.all([
      processBookmarks(await chrome.bookmarks.getTree()),
      sendGetTemporaryDataEvent(),
    ]);
    return [
      ...bookmarks,
      ...userTemplateData.map((item) => {
        return {
          ...item,
          isTemporary: true,
        };
      }),
    ];
  } catch (e) {
    console.error(e);
    return [];
  }
};

/**
 * 获取历史选中的数据
 */
const getHistorySelectBookmarks = (): Promise<string[]> => {
  return getStorage(BOOK_MARK_SEARCH_LOCAL_STORAGE_ID, []);
};

/**
 * 判断是否匹配
 * @param compareValue
 * @param targetValue
 */
const someValue = (compareValue: string, targetValue: string): boolean => {
  if (compareValue && targetValue) {
    return targetValue.toLowerCase().includes(compareValue.toLowerCase());
  }
  return false;
};

/**
 * 关闭窗口
 */
export const closeSearch = () => {
  window.close();
};

export const useSearch = () => {
  const [bookmarks, setBookmarks] = useState<IBookmark[]>([]);
  const [historyBookmarks, setHistoryBookmarks] = useState<IBookmark[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState<string>("");
  const [searchBookmarks, setSearchBookmarks] = useState<IBookmark[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const { setting } = useSearchSetting();

  useEffect(() => {
    if (!keyword) {
      // default show history
      setSearchBookmarks(historyBookmarks);
      setSelectedId(historyBookmarks[0]?.id || "");
      return;
    }
    const searchRule = setting.searchRule || ["url", "title", "parentTitle"];
    const searchRules: IBookmark[][] = Array.from({
      length: searchRule.length,
    });
    const addIdSet = new Set<string>();
    const getSearchResultByRule = (rule: TSearchRule) => {
      return bookmarks
        .filter((b) => {
          if (addIdSet.has(b.id)) {
            return false;
          }
          const isSame = someValue(keyword, Reflect.get(b, rule) as string);
          if (isSame) {
            addIdSet.add(b.id);
          }
          return isSame;
        })
        .sort((s, t) => {
          // 排序规则
          const sValue = (Reflect.get(s, rule) || "") as string;
          const tValue = (Reflect.get(t, rule) || "") as string;
          const kl = keyword.toLowerCase();
          if (rule === "title") {
            // 标题匹配，优先显示长度短的
            return sValue.length - tValue.length;
          } else if (rule === "url") {
            // URL 匹配，优先显示关键词在 URL 开头附近的
            const sIndex = sValue.toLowerCase().indexOf(kl);
            const tIndex = tValue.toLowerCase().indexOf(kl);
            return sIndex - tIndex;
          }
          return 0; // 默认不改变顺序
        });
    };
    const result = searchRules.reduce(
      (result: IBookmark[], _, currentIndex) => {
        const rule = searchRule[currentIndex];
        const searchResult = getSearchResultByRule(rule);
        if (searchResult.length) {
          result.push(...searchResult);
        }
        return result;
      },
      [] as IBookmark[],
    );
    setSearchBookmarks(result);
    setSelectedId(result[0]?.id || "");
  }, [keyword, bookmarks, historyBookmarks, setting.searchRule]);

  useEffect(() => {
    setLoading(true);
    Promise.all([getBookmarks(), getHistorySelectBookmarks()]).then(
      ([bookmarks, historyBookmarks]) => {
        setBookmarks(bookmarks);
        const bookMarksMap = new Map(bookmarks.map((b) => [b.id, b]));
        const currentHistoryBookmarks = (historyBookmarks || []).reduce(
          (result: IBookmark[], item) => {
            if (bookMarksMap.has(item)) {
              result.push(bookMarksMap.get(item)!);
            }
            return result;
          },
          [],
        );
        setHistoryBookmarks(currentHistoryBookmarks);
        if (currentHistoryBookmarks.length) {
          // default select history first
          setSelectedId(currentHistoryBookmarks[0].id);
          setSearchBookmarks(currentHistoryBookmarks);
        }
        setLoading(false);
      },
    );
  }, []);

  const [isOpening, setIsOpening] = useState(false);
  /**
   * 打开书签/搜索
   * @param id 打开的书签id
   * @param isCtrl 是否按下ctrl
   */
  const open = async (id: string, isCtrl?: boolean) => {
    // 当前激活的tab的url
    const currentTab = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    const activeTabUrl = currentTab[0]?.url || "";
    const isBlank = ["about:blank", "chrome://newtab/"].includes(activeTabUrl);
    try {
      if (isOpening) {
        return;
      }
      const { useDefaultSearch, openNewTab } = setting;
      if (!id && keyword && +useDefaultSearch === 1) {
        await chrome.search.query({
          disposition: "NEW_TAB",
          text: keyword,
        });
      } else {
        const bookmark = bookmarks.find((b) => b.id === id);
        if (!bookmark) {
          return;
        }
        const currentHistoryBookmarks = [...historyBookmarks];
        const index = currentHistoryBookmarks.findIndex((b) => b.id === id);
        if (index > -1) {
          currentHistoryBookmarks.splice(index, 1);
        }
        currentHistoryBookmarks.unshift(bookmark);
        if (currentHistoryBookmarks.length > MAX_HISTORY_COUNT) {
          currentHistoryBookmarks.pop();
        }
        setHistoryBookmarks(currentHistoryBookmarks);
        // 加入缓存
        await setStorage(
          BOOK_MARK_SEARCH_LOCAL_STORAGE_ID,
          currentHistoryBookmarks.map((m) => m.id),
        );
        let activeTab: TUndefinable<chrome.tabs.Tab>;
        if (!isCtrl && +openNewTab === 1) {
          const tabs = await chrome.tabs.query({});
          const domain = getDomain(bookmark.url);
          if (tabs?.length && domain) {
            activeTab = findSimilarTab(tabs, bookmark.url);
          }
        }
        if (activeTab) {
          await Promise.all([
            // 切换激活的tab
            chrome.tabs.update(activeTab.id, { active: true }),
            () => {
              if (activeTab.windowId) {
                // 切换激活的窗口
                chrome.windows.update(activeTab.windowId, { focused: true });
              }
            },
          ]);
        } else {
          // 如果是空白标签，则修改当前空白标签的url
          if (isBlank) {
            await chrome.tabs.update(currentTab[0].id, { url: bookmark.url });
          } else {
            await chrome.tabs.create({ url: bookmark.url });
          }
        }
      }
      closeSearch();
      setIsOpening(true);
    } catch (e) {
      console.error(e);
      alert(
        "出现未知错误,请刷新重试，或者提交issue至：https://github.com/llxq/bookmark-search/issues",
      );
    }
  };

  return {
    loading,
    keyword,
    setKeyword,
    searchBookmarks,
    selectedId,
    setSelectedId,
    open,
  };
};
