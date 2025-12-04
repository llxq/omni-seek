import type { FuseSortFunctionArg } from "fuse.js";
import { useEffect, useRef } from "react";
import { getDefaultSetting } from "./setting.ts";
import type { IOmniSearchData } from "./types.ts";

/**
 * 格式化时间
 * @param time
 */
export const formatTime = (time: number) => {
  if (!time) {
    return "";
  }
  // 补0
  const padZero = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };
  const date = new Date(time);
  return `${date.getFullYear()}-${padZero(
    date.getMonth() + 1,
  )}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(
    date.getMinutes(),
  )}:${padZero(date.getSeconds())}`;
};

/**
 * 获取最新的值
 * @param value
 */
export const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
};

/**
 * 去除空格
 * @param value
 */
export const trimSpace = (value: string) => {
  return value.replace(/\s+/g, "");
};

/**
 * 给设定的搜索规则增加去除空格的内容
 */
export const getFuseSearchResult = (item: IOmniSearchData) => {
  const defaultSetting = getDefaultSetting();
  return {
    ...item,
    ...defaultSetting.searchRules.reduce((pre, cur) => {
      const value = Reflect.get(item, cur) as string;
      if (!value) return pre;
      Reflect.set(pre, `${cur}NoSpace`, trimSpace(value));
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
 * close popup
 */
export const closePopup = () => {
  window?.close?.();
};

/**
 * 获取标签
 * @param data
 */
export const getTagDefinition = (data: IOmniSearchData) => {
  if (data.isCollect) {
    return {
      text: "收藏",
      color: "var(--omni-collect-tag-color)",
      bgColor: "var(--omni-collect-tag-bg-color)",
    };
  } else if (data.isOpenTab) {
    return {
      text: `标签：W${data.windowIndex} / T${data.tabIndex}`,
      color: "var(--omni-tab-tag-color)",
      bgColor: "var(--omni-tab-tag-bg-color)",
    };
  }
  return void 0;
};

/**
 * 拦截 chrome.runtime.lastError
 */
export const interceptChromeRuntimeLastError = () => {
  if (chrome.runtime.lastError) {
    console.log("【lastError】", chrome.runtime.lastError.message);
  }
};

/**
 * 获取当前标签页的 DPR
 */
export const getDprFromActiveTab = async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  if (!tab || !tab.id) return null;
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        return window.devicePixelRatio;
      },
    });
    if (results && results[0]) {
      return Promise.resolve(results[0].result);
    }
    return Promise.resolve(null);
  } catch (error) {
    interceptChromeRuntimeLastError();
    console.log("无法获取当前标签页的 DPR:", error);
    return Promise.resolve(null);
  }
};

/**
 * 获取权重
 * @param clickCount
 */
const getSortWeightByClickCount = (clickCount: number) => {
  const weight = 1 - Math.log10(clickCount) * 0.1;
  return weight > 0 ? weight : 1;
};

/**
 * 查询排序
 */
export const getSearchSortFn = (
  fuseSearchData: IOmniSearchData[],
  isSearchOpenedTab: boolean,
) => {
  return (a: FuseSortFunctionArg, b: FuseSortFunctionArg): number => {
    const itemA = fuseSearchData[a.idx];
    const itemB = fuseSearchData[b.idx];
    let aScore = a.score;
    let bScore = b.score;
    // 评分权重目前暂定 0.8
    if (isSearchOpenedTab) {
      aScore = itemA.isOpenTab ? aScore * 0.8 : aScore;
      bScore = itemB.isOpenTab ? bScore * 0.8 : bScore;
    }
    const itemBClickCount = itemB.clickCount || 0;
    const itemAClickCount = itemA.clickCount || 0;
    if (itemAClickCount && aScore < 1) {
      aScore = aScore * getSortWeightByClickCount(itemAClickCount);
    }
    if (itemBClickCount && bScore < 1) {
      bScore = bScore * getSortWeightByClickCount(itemBClickCount);
    }
    return aScore - bScore;
  };
};
