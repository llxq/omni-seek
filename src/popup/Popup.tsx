import "./Popup.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import type { IBookmark } from "../shared/types.ts";

/**
 * 向 popup.js 发送消息
 * @param message
 */
const sendMessageToPopupScript = (message: TAllType): void =>
  window.parent.postMessage(message, "*");

/**
 * 关闭 popup
 */
const closePopup = (): void =>
  sendMessageToPopupScript({ action: "closePopup" });

/**
 * 判断是否匹配
 * @param compareValue
 * @param targetValue
 */
const compareUrl = (compareValue: string, targetValue: string): boolean => {
  if (compareValue && targetValue) {
    return targetValue.toLowerCase().includes(compareValue.toLowerCase());
  }
  return false;
};

// 排序规则，优先匹配 name，其次是 url ，最后是父节点
const compareRule: (keyof IBookmark)[] = ["title", "url", "parentTitle"];

/**
 * 获取最新值
 * @param value
 */
function useLatest<T>(value: T) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

export const Popup = () => {
  const [bookmarks, setBookmarks] = useState<IBookmark[]>([]);
  const [historyBookmarks, setHistoryBookmarks] = useState<IBookmark[]>([]);
  const [searchBookmarks, setSearchBookmarks] = useState<IBookmark[]>([]);
  const searchBookmarksRef = useLatest(searchBookmarks);
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const selectedIdRef = useLatest(selectedId);

  useEffect(() => {
    const messageHandler = (message: {
      action: string;
      bookmarks?: IBookmark[];
      historyBookmarks?: IBookmark[];
    }) => {
      if (message.action === "updateBookMarks") {
        const { bookmarks = [], historyBookmarks = [] } = message;
        setBookmarks(bookmarks);
        setHistoryBookmarks(historyBookmarks);
        inputRef.current?.focus();
      }
    };
    chrome.runtime?.onMessage?.addListener(messageHandler);
    // 通知外部渲染完成可以开始交互了
    sendMessageToPopupScript({ action: "initSuccess" });

    return () => {
      chrome.runtime?.onMessage?.removeListener(messageHandler);
    };
  }, [inputRef]);

  useEffect(() => {
    if (!keyword) {
      setSearchBookmarks(historyBookmarks);
      setSelectedId(historyBookmarks[0]?.id || "");
    } else {
      const stacks: IBookmark[][] = Array.from(
        { length: compareRule.length },
        () => [],
      );
      for (let i = 0; i < compareRule.length; i++) {
        stacks[i] = bookmarks.filter((f) =>
          compareUrl(keyword, Reflect.get(f, compareRule[i]) as string),
        );
      }
      const result = stacks.reduce(
        (pre, cur) => [...new Set([...pre, ...cur])],
        [],
      );
      setSearchBookmarks(result);
      setSelectedId(result[0]?.id || "");
    }
  }, [keyword, bookmarks, historyBookmarks]);

  /**
   * 根据 url 打开书签
   * @param bookmark
   * @param openNewTab 是否在新标签页打开
   * @param findOpenTab 是否查找已经打开的标签
   */
  const selectBookmarkByUrl = useCallback(
    (bookmark: IBookmark, openNewTab = true, findOpenTab = false): void => {
      setSelectedId(bookmark.id || "");
      if (bookmark.url) {
        sendMessageToPopupScript({
          action: "goToBookmark",
          url: bookmark.url,
          openNewTab,
          findOpenTab,
        });
        closePopup();
        // 关闭之后清空输入框
        setKeyword("");
      }
    },
    [],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      /* 按下esc关闭 */
      if (event.key === "Escape") {
        closePopup();
        return;
      }

      const index = searchBookmarksRef.current.findIndex(
        (f) => f.id === selectedIdRef.current,
      );
      if (index > -1) {
        /* 按上/下箭头切换 */
        if (event.key === "ArrowUp") {
          const nextIndex =
            index === 0 ? searchBookmarksRef.current.length - 1 : index - 1;
          setSelectedId(searchBookmarksRef.current[nextIndex].id);
          event.preventDefault();
        }

        if (event.key === "ArrowDown") {
          const nextIndex =
            index === searchBookmarksRef.current.length - 1 ? 0 : index + 1;
          setSelectedId(searchBookmarksRef.current[nextIndex].id);
          event.preventDefault();
        }

        /* 按下回车 */
        if (event.key === "Enter") {
          selectBookmarkByUrl(searchBookmarksRef.current[index]);
          event.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectBookmarkByUrl]);

  return (
    <div className="bookmarks-search__container">
      <div className="bookmarks-search__content">
        <div className="bookmarks-search__search">
          <input
            placeholder="请输入要搜索的关键字"
            type="text"
            autoComplete="off"
            className="bookmarks-search__search-input"
            autoFocus
            ref={inputRef}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="bookmarks-search__list">
          {searchBookmarks.map((item) => (
            <div
              onClick={() => selectBookmarkByUrl(item)}
              className={`bookmarks-search__list-item ${selectedId === item.id ? "bookmarks-search__list-item-active" : ""}`}
              key={item.id}
            >
              {item.faviconURL && (
                <img
                  className="bookmarks-search__list-item-favicon"
                  src={item.faviconURL}
                  alt={item.title}
                />
              )}
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
