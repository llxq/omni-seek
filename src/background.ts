import {
  onGetTemporaryData,
  onSetUserTemporaryData,
  registerContextMenu,
} from "./shared/event.ts";

registerContextMenu();
onGetTemporaryData();
onSetUserTemporaryData();
