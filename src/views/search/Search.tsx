import "./Search.scss";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { closeSearch, useSearch } from "./useSearch.ts";

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

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isComposition, setIsComposition] = useState(false);
  const isCompositionRef = useLatest(isComposition);
  const selectedRectRef = useRef<HTMLDivElement>(null);

  const {
    keyword,
    setKeyword,
    searchBookmarks,
    open,
    selectedId,
    setSelectedId,
  } = useSearch();

  const searchBookmarksRef = useLatest(searchBookmarks);
  const selectedIdRef = useLatest(selectedId);
  const [selectedRect, setSelectedRect] = useState({ top: 0, height: 0 });

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (isCompositionRef.current) {
      return;
    }
    // esc 关闭
    if (event.key === "Escape") {
      closeSearch();
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
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    setSelectedRect(
      selectedRectRef.current?.getBoundingClientRect() ?? {
        top: 0,
        height: 0,
      },
    );
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const selectedElement = document.querySelector(`[data-id="${selectedId}"]`);
    if (selectedElement) {
      // 判断是否在区间内
      const { top, height } = selectedElement.getBoundingClientRect();
      const { top: selectedTop, height: selectedHeight } = selectedRect;
      if (!(top >= selectedTop)) {
        selectedElement.scrollIntoView({
          block: "start",
        });
      } else if (!(top + height <= selectedTop + selectedHeight)) {
        selectedElement.scrollIntoView({
          block: "end",
        });
      }
    }
  }, [selectedId, selectedIdRef]);

  return (
    <div className="search__container">
      <div className="search__input-container">
        <div className="tips">
          Enter 打开选中项、Esc 取消、↑ 或 ↓ 切换选中项
        </div>
        <input
          placeholder="请输入要搜索的关键字"
          type="text"
          autoComplete="off"
          className="search__input"
          autoFocus
          ref={inputRef}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onCompositionStart={() => setIsComposition(true)}
          onCompositionEnd={() => setIsComposition(false)}
          onKeyDown={(e) => {
            if (!isComposition && e.key === "Enter") {
              void open(selectedId, e.metaKey || e.ctrlKey);
              e.preventDefault();
            }
          }}
        />
      </div>
      <div className="search__result-container">
        <div className="search__list" ref={selectedRectRef}>
          {searchBookmarks.map((item) => (
            <div
              onClick={(event) => open(item.id, event.metaKey || event.ctrlKey)}
              className={`search__list-item ${selectedId === item.id ? "search__list-item-active" : ""}`}
              data-id={item.id}
              key={item.id}
            >
              <div className="favicon__container">
                <img
                  src={
                    item.faviconURL ||
                    chrome.runtime.getURL("icons/default_favicon.png")
                  }
                  alt={item.title}
                />
              </div>
              <div className="search__list-item-content">
                <div
                  className={`title__container ${item.isTemporary ? "is-temporary__container" : ""}`}
                >
                  <div className="title" title={item.title}>
                    {item.title}
                  </div>
                  {item.isTemporary ? (
                    <div className="is-temporary">临时书签</div>
                  ) : null}
                </div>
                <div className="url" title={item.url}>
                  {item.url}
                </div>
                {item.parentTitle ? (
                  <div className="path" title={item.parentTitle}>
                    <img
                      className="icon"
                      src={chrome.runtime.getURL("icons/dir_icon.png")}
                      alt="文件夹"
                    />
                    <div className="path__label">
                      {item.parentTitle.split("/").join(" / ")}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
