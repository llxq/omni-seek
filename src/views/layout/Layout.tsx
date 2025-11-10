import "./layout.scss";
import { useEffect, useState } from "react";
import { POPUP_TYPE_KEY } from "../../shared/event.ts";
import type { IBookmark } from "../../shared/types.ts";
import { AddTemporary } from "../add-temporary/AddTemporary.tsx";
import { Search } from "../search/Search.tsx";
import { Setting } from "../setting/Setting.tsx";
import { TemporaryData } from "../temporary-data/TemporaryData.tsx";

const layoutTabs = [
  {
    name: "搜索",
    key: "search",
    component: () => <Search />,
  },
  {
    name: "设置",
    key: "setting",
    component: () => <Setting />,
  },
  {
    name: "临时书签管理",
    key: "temporary",
    component: (setTemporaryData: (data: TUndefinable<IBookmark>) => void) => (
      <TemporaryData setTemporaryData={setTemporaryData} />
    ),
  },
];

export const Layout = () => {
  const [activeTab, setActiveTab] = useState("search");
  const [temporaryData, setTemporaryData] =
    useState<TUndefinable<IBookmark>>(void 0);

  useEffect(() => {
    chrome.storage.local.get(POPUP_TYPE_KEY).then((res) => {
      const data = Reflect.get(res, POPUP_TYPE_KEY) as IBookmark & {
        _t: number;
      };
      if (data) {
        // 判断数据是否超过2s，超过则认为是过期数据
        if (Date.now() - data._t > 2 * 1000) {
          // 过期数据直接删除
          chrome.storage.local.remove(POPUP_TYPE_KEY);
        } else {
          setTemporaryData(data);
        }
      }
    });
  }, []);

  return temporaryData ? (
    <AddTemporary data={temporaryData} setTemporaryData={setTemporaryData} />
  ) : (
    <div className="layout__container">
      <div className="layout__header">
        {layoutTabs.map((tab) => {
          return (
            <div
              className={`layout__tab ${tab.key === activeTab ? "active" : ""}`}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="layout__content">
        {layoutTabs
          .find((tab) => tab.key === activeTab)
          ?.component(setTemporaryData)}
      </div>
    </div>
  );
};
