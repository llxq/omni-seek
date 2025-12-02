import type { TOmniSearchRule } from "./types.ts";

/**
 * 事件超时时间
 * @default 2s
 */
export const EVENT_TIMEOUT = 2000;

/**
 * 右键菜单ID
 */
export const ADD_COLLECTION_DATA_CONTEXT_MENU_ID = "add_collection_data";

/**
 * 右键菜单ID-默认添加
 */
export const DEFAULT_ADD_COLLECTION_DATA_CONTEXT_MENU_ID =
  "default_add_collection_data";

/**
 * 右键菜单ID-自定义添加
 */
export const CUSTOM_ADD_COLLECTION_DATA_CONTEXT_MENU_ID =
  "custom_add_collection_data";

/**
 * 收藏数据自定义添加的时候传递给popup的消息的key
 */
export const CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY =
  "custom_add_collection_data";

/**
 * update collection data message
 */
export const UPDATE_COLLECTION_DATA_MESSAGE_KEY =
  "update_collection_data_message";

/**
 * setting key
 */
export const OMNI_SEARCH_SETTING_KEY = "omni_search_setting";

/**
 * 历史选中过的数据 key
 */
export const OMNI_SEARCH_HISTORY_KEY = "omni_search_history";

/**
 * 每个搜索对应的权重
 */
export const ruleSettingToWeight: Partial<Record<TOmniSearchRule, number>> = {
  title: 100,
  url: 60,
  parentTitle: 30,
};

/**
 * 历史记录最长几条
 */
export const MAX_HISTORY_COUNT = 10;
