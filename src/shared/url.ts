import Fuse from "fuse.js";

/**
 * 从完整的 URL 中提取路径部分（pathname），不包括查询参数或哈希。
 * @param url 要处理的完整 URL 字符串。
 * @returns URL 的路径字符串（例如 "/search"），如果 URL 无效则返回 undefined。
 */
export function getPath(
  url: string | TUndefinable<string>,
): TUndefinable<string> {
  if (!url) return "";
  return new URL(url).pathname;
}

/**
 * 获取某个url的域名
 */
export const getDomain = (url?: string) => {
  if (!url) return "";
  return new URL(url).hostname;
};

/**
 * 找到相似度最高的tab
 */
export const findSimilarTab = (
  tabs: chrome.tabs.Tab[],
  currentUrl: string,
): TUndefinable<chrome.tabs.Tab> => {
  const currentDomain = getDomain(currentUrl);
  // 找到与当前url域名一致的tab
  const sameDomainTabs = tabs.filter(
    (tab) => getDomain(tab.url) === currentDomain,
  );
  if (sameDomainTabs.length < 2) {
    return sameDomainTabs[0];
  }
  return (
    new Fuse(
      sameDomainTabs.map((tab) => {
        return {
          url: tab.url,
          item: tab,
          _compareKeyword: getPath(tab.url),
        };
      }),
      {
        keys: [
          { name: "_compareKeyword", weight: 100 },
          { name: "url", weight: 60 },
        ],
      },
    ).search(getPath(currentUrl) || "")[0]?.item?.item || sameDomainTabs[0]
  );
};
