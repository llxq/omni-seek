import {
  CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY,
  EVENT_TIMEOUT,
} from "./constants.ts";
import { db } from "./Db.ts";
import { EOmniEvent } from "./enum.ts";
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
    // eslint-disable-next-line
    let timeout: TUndefinable<ReturnType<typeof setTimeout>>;
    const reject = () => {
      resolve([]);
      timeout && clearTimeout(timeout);
    };
    timeout = setTimeout(reject, EVENT_TIMEOUT);
    // 发送获取收藏数据事件
    chrome.runtime.sendMessage(
      { type: EOmniEvent.GET_ALL_COLLECTION_DATA },
      (responseFromContent) => {
        if (chrome.runtime.lastError) {
          console.log(chrome.runtime.lastError.message);
          reject();
        } else {
          clearTimeout(timeout);
          if (responseFromContent && responseFromContent.data) {
            resolve(responseFromContent.data);
          } else {
            resolve([]);
          }
        }
      },
    );
  });
};

/**
 * 获取所有的收藏数据
 */
export const onGetAllCollectionDataByDb = () => {
  chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.type === EOmniEvent.GET_ALL_COLLECTION_DATA) {
      db.getAll().then((data) => {
        sendResponse({ data });
      });
      return true;
    }
  });
};
