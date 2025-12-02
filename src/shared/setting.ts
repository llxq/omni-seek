import type { IOmniSearchSetting } from "./types.ts";

/**
 * 获取默认设置
 */
export const getDefaultSetting = () => {
  return {
    searchRules: ["url", "title", "parentTitle"],
    searchOpenedTab: "1",
    useDefaultSE: "1",
    useAdvancedSearch: "0",
    theme: "auto",
  } as IOmniSearchSetting;
};
