import "./layout.scss";
import { useEffect, useState } from "react";
import {
  CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY,
  OMNI_SEARCH_SETTING_KEY,
} from "../../shared/constants.ts";
import { getStorage, removeStorage } from "../../shared/storage.ts";
import type {
  IOmniCollectSearchData,
  IOmniSearchSetting,
  IOmniSeekTabParams,
  TTheme,
} from "../../shared/types.ts";
import { AddCollect } from "../add-collect/AddCollect.tsx";
import { CollectManagement } from "../collect-management/CollectManagement.tsx";
import { Search } from "../search/Search.tsx";
import { Setting } from "../setting/Setting.tsx";

const omniSeekTabs = [
  {
    name: "搜索",
    key: "search",
    component: () => <Search />,
  },
  {
    name: "收藏管理",
    key: "collectManagement",
    component: (params: IOmniSeekTabParams) => (
      <CollectManagement {...params} />
    ),
  },
  {
    name: "设置",
    key: "setting",
    component: (params: IOmniSeekTabParams) => <Setting {...params} />,
  },
];

export const Layout = () => {
  const [activeTab, setActiveTab] = useState("search");
  const [theme, setTheme] = useState<TTheme>("auto");
  const [themeClass, setThemeClass] = useState("");
  const [temporaryData, setTemporaryData] =
    useState<TUndefinable<IOmniCollectSearchData>>(void 0);
  const [source, setSource] = useState<"add" | "edit">("edit");

  const back = () => {
    setTemporaryData(void 0);
    setSource("edit");
  };

  useEffect(() => {
    getStorage<IOmniCollectSearchData>(
      CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY,
    ).then((data) => {
      setTemporaryData(data || void 0);
      // 用完直接删除
      void removeStorage(CUSTOM_ADD_COLLECTION_DATA_STORAGE_KEY);
      if (data) {
        setSource("add");
      }
    });

    getStorage<IOmniSearchSetting>(OMNI_SEARCH_SETTING_KEY).then((setting) => {
      // 设置主题
      setTheme((preTheme) => setting?.theme || preTheme);
    });
  }, []);

  useEffect(() => {
    if (theme === "auto") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      setThemeClass(`${media.matches ? "dark-theme" : "light-theme"}`);
    } else {
      setThemeClass(`${theme}-theme`);
    }
  }, [theme]);

  return (
    <div className={`layout__wrapper ${themeClass}`}>
      {temporaryData ? (
        <AddCollect data={temporaryData} back={back} source={source} />
      ) : (
        <div className={`layout__container`}>
          <div className="layout__header">
            {omniSeekTabs.map((tab) => {
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
            {omniSeekTabs
              .find((tab) => tab.key === activeTab)
              ?.component({
                editCollect: setTemporaryData,
                updateTheme: setTheme,
              })}
          </div>
        </div>
      )}
    </div>
  );
};
