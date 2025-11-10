/**
 * 创建通知
 * @param message
 * @param title
 */
export const createNotification = (message: string, title = "提示") => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title,
    message,
  });
};
