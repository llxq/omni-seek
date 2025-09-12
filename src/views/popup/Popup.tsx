import "./popup.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import type { IBookmark, ISearchBookmarkSetting } from "../../shared/types.ts";

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
const compare = (compareValue: string, targetValue: string): boolean => {
  if (compareValue && targetValue) {
    return targetValue.toLowerCase().includes(compareValue.toLowerCase());
  }
  return false;
};

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

let compareRule: (keyof IBookmark)[] = ["title", "parentTitle", "url"];

export const Popup = () => {
  const [bookmarks, setBookmarks] = useState<IBookmark[]>([]);
  const [historyBookmarks, setHistoryBookmarks] = useState<IBookmark[]>([]);
  const [searchBookmarks, setSearchBookmarks] = useState<IBookmark[]>([]);
  const searchBookmarksRef = useLatest(searchBookmarks);
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>("");
  const keywordRef = useLatest(keyword);
  const [selectedId, setSelectedId] = useState<string>("");
  const selectedIdRef = useLatest(selectedId);
  const [formData, setFormData] = useState<ISearchBookmarkSetting>({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0",
  });
  const formDataRef = useLatest(formData);
  const selectedRectRef = useRef<HTMLDivElement>(null);
  const [selectedRect, setSelectedRect] = useState({ top: 0, height: 0 });

  const updateCompareRule = useCallback(async () => {
    const storage = await chrome.storage.local.get<{
      searchBookmarkSetting: ISearchBookmarkSetting;
    }>("searchBookmarkSetting");
    if (storage.searchBookmarkSetting) {
      compareRule = storage.searchBookmarkSetting.searchRule;
      setFormData(storage.searchBookmarkSetting);
    }
  }, []);

  useEffect(() => {
    const messageHandler = (message: {
      action: string;
      bookmarks?: IBookmark[];
      historyBookmarks?: IBookmark[];
    }) => {
      if (message.action === "updateBookMarks") {
        updateCompareRule().finally(() => {
          const { bookmarks = [], historyBookmarks = [] } = message;
          setBookmarks(bookmarks);
          setHistoryBookmarks(historyBookmarks);
          inputRef.current?.focus();
          const { top = 0, height = 0 } =
            selectedRectRef.current?.getBoundingClientRect() ?? {};
          setSelectedRect({ top, height });
        });
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
        stacks[i] = bookmarks
          .filter((f) =>
            compare(keyword, Reflect.get(f, compareRule[i]) as string),
          )
          .sort((s, t) => {
            const rule = compareRule[i];
            const sValue = (Reflect.get(s, rule) || "") as string;
            const tValue = (Reflect.get(t, rule) || "") as string;
            const kl = keyword.toLowerCase();
            if (rule === "title") {
              return sValue.length - tValue.length;
            } else if (rule === "url") {
              return kl.indexOf(sValue) - kl.indexOf(tValue);
            }
            return 1;
          });
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
   * @param isCtrl 是否按下 ctrl/command/windows 键
   */
  const selectBookmarkByUrl = useCallback(
    (bookmark: IBookmark, isCtrl = false): void => {
      setSelectedId(bookmark?.id || "");
      if (!bookmark?.url && formDataRef.current.useDefaultSearch === "0") {
        return;
      }
      sendMessageToPopupScript({
        action: "goToBookmark",
        url: bookmark?.url || "",
        keyword: keywordRef.current,
        isCtrl,
      });
      closePopup();
      // 关闭之后清空输入框
      setKeyword("");
    },
    [],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      /* 按下esc关闭 */
      if (event.key === "Escape") {
        closePopup();
        // 关闭之后清空输入框
        setKeyword("");
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
      }

      /* 按下回车 */
      if (event.key === "Enter") {
        // ctrl 按下 或者 command 按下
        selectBookmarkByUrl(
          searchBookmarksRef.current[index],
          event.metaKey || event.ctrlKey,
        );
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectBookmarkByUrl]);

  useEffect(() => {
    const selectedElement = document.querySelector(`[data-id="${selectedId}"]`);
    if (selectedElement) {
      // 判断是否在区间内
      const { top, height } = selectedElement.getBoundingClientRect();
      const { top: selectedTop, height: selectedHeight } = selectedRect;
      const isInRange =
        top >= selectedTop && top + height <= selectedTop + selectedHeight;
      if (!isInRange) {
        selectedElement.scrollIntoView({
          block: "center",
          inline: "center",
        });
      }
    }
  }, [selectedId, selectedIdRef]);

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
        <div ref={selectedRectRef} className="bookmarks-search__list">
          {searchBookmarks.map((item) => (
            <div
              onClick={(event) =>
                selectBookmarkByUrl(item, event.metaKey || event.ctrlKey)
              }
              className={`bookmarks-search__list-item ${selectedId === item.id ? "bookmarks-search__list-item-active" : ""}`}
              key={item.id}
              data-id={item.id}
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
