/**
 * 设置本地存储
 * @param key
 * @param value
 */
export const setStorage = async <T>(key: string, value: T) => {
  await chrome.storage.local.set({
    [key]: value,
  });
};

/**
 * 获取本地存储
 * @param key
 * @param defaultValue
 */
export const getStorage = async <T = any>(
  key: string,
  defaultValue?: T,
): Promise<T> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (result) => {
      resolve((result[key] || defaultValue) as T);
    });
  });
};

/**
 * 删除本地存储
 * @param key
 */
export const removeStorage = async (key: string) => {
  await chrome.storage.local.remove(key);
};
