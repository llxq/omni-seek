import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GET_DPR_SESSION_KEY } from "../shared/constants.ts";
import {
  getDprFromActiveTab,
  interceptChromeRuntimeLastError,
} from "../shared/utils.ts";
import { Layout } from "./layout/Layout.tsx";

const bootstrap = async () => {
  try {
    // 尝试解决dpr问题导致的模糊
    const isGetDpr = sessionStorage.getItem(GET_DPR_SESSION_KEY);
    if (!isGetDpr) {
      sessionStorage.setItem(GET_DPR_SESSION_KEY, "1");
      const dpr = await getDprFromActiveTab();
      if (dpr && dpr !== window.devicePixelRatio) {
        window.stop?.();
        // 尝试刷新界面
        window.location.reload();
        return Promise.reject();
      }
    }
  } catch (error) {
    interceptChromeRuntimeLastError();
    console.log("获取 DPR 出错:", error);
  }
  return Promise.resolve();
};

bootstrap()
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <Layout />
      </StrictMode>,
    );
  })
  .catch(() => {
    console.log("reload");
  });
