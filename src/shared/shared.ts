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
