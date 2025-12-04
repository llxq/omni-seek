import { CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY } from "./constants.ts";
import { collectDb } from "./Db.ts";
import { setStorage } from "./storage.ts";
import type { IOmniCollectSearchData, IOmniSearchData } from "./types.ts";

/**
 * 打开添加收藏数据的页面
 * @param data
 * @param tab
 */
export const openAddCollectionDataPage = async (
  data: IOmniSearchData,
  tab: chrome.tabs.Tab,
) => {
  // 是为了关闭原有的popup
  await chrome.windows.update(tab.windowId, {
    focused: true,
  });
  await setStorage(CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY, data);
  await chrome.action.openPopup({
    windowId: tab.windowId,
  });
};

/**
 * 获取收藏的数据
 * @description 目前数据
 */
export const getCollectionData = async () => {
  return new Promise<IOmniCollectSearchData[]>((resolve) => {
    collectDb.getAll().then(resolve);
  });
};
