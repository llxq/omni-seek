import {
  onGetTemporaryData,
  onSetUserTemporaryData,
  registerContextMenu,
  registerShortcut,
} from "./shared/event.ts";

registerShortcut();
registerContextMenu();
onGetTemporaryData();
onSetUserTemporaryData();
