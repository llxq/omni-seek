import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Popup } from "./popup/Popup.tsx";
import { Setting } from "./setting/Setting.tsx";

const isIframe = window.self !== window.top;

createRoot(document.getElementById("root")!).render(
  <StrictMode>{isIframe ? <Popup /> : <Setting />}</StrictMode>,
);
