/*
 * 注册右键菜单
 */
import {
  ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
  CUSTOM_ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
  DEFAULT_ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
  UPDATE_COLLECTION_DATA_MESSAGE_KEY,
} from "./constants.ts";
import { db } from "./Db.ts";
import { EOmniEvent } from "./enum.ts";
import {
  onGetAllCollectionDataByDb,
  openAddCollectionDataPage,
} from "./event.ts";
import { createSystemNotification } from "./notice.ts";
import type { IOmniSearchData } from "./types.ts";

/**
 * 根据tab创建收藏数据
 * @param tab
 */
const createOmniCollectionByTab = (tab: chrome.tabs.Tab) => {
  return {
    url: tab.url!,
    title: tab.title!,
    id: `${tab.id}_${Date.now()}`,
    parentId: "",
    parentTitle: "",
    faviconURL: tab.favIconUrl || "",
  };
};

/**
 * 注册右键菜单
 */
const registerContextMenu = () => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
        title: "添加到Omni收藏夹",
        contexts: ["all"],
      });
      chrome.contextMenus.create({
        id: DEFAULT_ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
        title: "使用当前网站标题添加",
        parentId: ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
        contexts: ["all"],
      });
      chrome.contextMenus.create({
        id: CUSTOM_ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
        title: "自定义名称添加",
        parentId: ADD_COLLECTION_DATA_CONTEXT_MENU_ID,
        contexts: ["all"],
      });
    });
  });

  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (tab) {
      const collectionData: IOmniSearchData = createOmniCollectionByTab(tab);
      if (info.menuItemId === DEFAULT_ADD_COLLECTION_DATA_CONTEXT_MENU_ID) {
        db.add(collectionData).then(() => {
          void createSystemNotification("添加成功");
        });
      } else if (
        info.menuItemId === CUSTOM_ADD_COLLECTION_DATA_CONTEXT_MENU_ID
      ) {
        await openAddCollectionDataPage(collectionData, tab);
      }
    }
  });
};

/**
 * 快捷键注册
 */
/**
 * 注册快捷键监听
 */
const registerShortcut = () => {
  chrome.commands.onCommand.addListener((command) => {
    if (command === EOmniEvent.OPEN_CUSTOM_ADD_COLLECTION_DATA_PAGE) {
      chrome.tabs.query({ active: true, currentWindow: true }).then((res) => {
        const [tab] = res;
        if (!tab) {
          void createSystemNotification("无法获取当前tab，请刷新重试");
          return;
        }
        if (chrome.runtime.lastError) {
          console.log(chrome.runtime.lastError.message);
        } else {
          void openAddCollectionDataPage(createOmniCollectionByTab(tab), tab);
        }
      });
    }
  });
};

/**
 * 更新收藏数据
 */
const registerOnAddOrUpdateCollectionData = () => {
  chrome.runtime.onMessage.addListener(({ type, data }) => {
    if (type === UPDATE_COLLECTION_DATA_MESSAGE_KEY) {
      if (data.updateTime) {
        // 修改
        db.update(data).then(() => {
          void createSystemNotification("操作成功");
        });
        return;
      }
      db.add(data).then(() => {
        void createSystemNotification("操作成功");
      });
    }
  });
};

/**
 * background.js 注册
 */
export const bootstrapBackground = () => {
  registerContextMenu();
  registerShortcut();
  registerOnAddOrUpdateCollectionData();

  // 所有的操作db的数据都放在background中进行
  onGetAllCollectionDataByDb();
};
