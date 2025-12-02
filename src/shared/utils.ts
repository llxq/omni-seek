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
 * 给设定的搜索规则增加去除空格的内容
 */
export const getFuseSearchResult = (item: IOmniSearchData) => {
  const defaultSetting = getDefaultSetting();
  return {
    ...item,
    ...defaultSetting.searchRules.reduce((pre, cur) => {
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
