let timer: TUndefinable<ReturnType<typeof setTimeout>>;

let initialZIndex = 2025;

/**
 * 创建通知
 * @param message
 * @param type
 */
export const createNotification = (
  message: string,
  type: "success" | "error" | "warning" = "success",
) => {
  timer && clearTimeout(timer);
  const div = document.createElement("div");
  div.classList.add("__bookmark__notification");
  if (type !== "success") {
    div.classList.add(`is-${type}`);
  }
  requestAnimationFrame(() => {
    div.classList.add("is-show");
  });
  div.innerText = message;
  div.style.zIndex = String(++initialZIndex);
  document.body.appendChild(div);

  timer = setTimeout(() => {
    div.classList.remove("is-show");
    div.classList.add("is-fadeout");

    requestAnimationFrame(() => {
      document.body.contains(div) && document.body.removeChild(div);
    });
  }, 2000);
};

/**
 * 创建系统通知
 * @param message
 * @param title
 */
export const createSystemNotification = async (
  message: string,
  title = "提示",
) => {
  await chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title,
    message,
  });
};
