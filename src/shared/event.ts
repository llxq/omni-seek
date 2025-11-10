import { db } from "./Db.ts";
import { createNotification } from "./notice.ts";
import type { IBookmark, ITemporaryData } from "./types.ts";

/**
 * 获取用户临时数据
 */
export const GET_USER_TEMPORARY_DATA = "GET_USER_TEMPORARY_DATA";

/**
 * 事件超时时间
 * @default 2s
 */
export const EVENT_TIMEOUT = 2000;

/**
 * 右键菜单id
 */
const CONTEXT_MENU_ID = "add_temporary_data";
/**
 * 默认添加
 */
const CONTEXT_MENU_DEFAULT_ID = "add_default_data";
/**
 * 自定义添加
 */
const CONTEXT_MENU_CUSTOM_ID = "add_custom_data";

/**
 * 标识当前popup是什么类型
 */
export const POPUP_TYPE_KEY = "popup_type";

/*
 * 注册右键菜单
 */
export const registerContextMenu = () => {
  chrome.runtime.onInstalled.addListener(() => {
    // add context menu
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: CONTEXT_MENU_ID,
        title: "添加到书签搜索项",
        contexts: ["all"],
      });
      chrome.contextMenus.create({
        id: CONTEXT_MENU_DEFAULT_ID,
        title: "使用当前网站名称添加",
        parentId: CONTEXT_MENU_ID,
        contexts: ["all"],
      });
      chrome.contextMenus.create({
        id: CONTEXT_MENU_CUSTOM_ID,
        title: "自定义名称添加",
        parentId: CONTEXT_MENU_ID,
        contexts: ["all"],
      });
    });
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (tab) {
      const temporaryData: IBookmark = {
        url: tab.url!,
        title: tab.title!,
        id: `${tab.id}_${Date.now()}`,
        parentId: "",
        parentTitle: "",
        faviconURL: tab.favIconUrl || "",
      };
      if (info.menuItemId === CONTEXT_MENU_DEFAULT_ID) {
        db.add(temporaryData).then(() => {
          createNotification("添加成功");
        });
      } else if (info.menuItemId === CONTEXT_MENU_CUSTOM_ID) {
        chrome.storage.local
          .set({
            [POPUP_TYPE_KEY]: {
              ...temporaryData,
              _t: Date.now(),
            },
          })
          .then(() => {
            // 先关闭
            chrome.action.openPopup({
              windowId: tab.windowId,
            });
          });
      }
    }
  });
};

/**
 * 发送获取用户临时数据
 */
export const sendGetTemporaryDataEvent = async () => {
  return new Promise<ITemporaryData[]>((resolve) => {
    // eslint-disable-next-line
    let timeout: TUndefinable<ReturnType<typeof setTimeout>>;
    const reject = () => {
      resolve([]);
      timeout && clearTimeout(timeout);
    };
    timeout = setTimeout(reject, EVENT_TIMEOUT);
    // 获取本程序的扩展id
    chrome.runtime.sendMessage(
      { type: GET_USER_TEMPORARY_DATA },
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
 * 接收获取用户临时数据
 */
export const onGetTemporaryData = () => {
  chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.type === GET_USER_TEMPORARY_DATA) {
      db.getAll().then((data) => {
        sendResponse({ data });
      });
      return true;
    }
  });
};

/**
 * 设置用户临时数据
 */
export const SET_USER_TEMPORARY_DATA = "SET_USER_TEMPORARY_DATA";
/**
 * 设置用户临时数据
 */
export const onSetUserTemporaryData = () => {
  chrome.runtime.onMessage.addListener(({ type, data }) => {
    if (type === SET_USER_TEMPORARY_DATA) {
      db.add(data).then(() => {
        createNotification("保存成功");
      });
    }
  });
};
