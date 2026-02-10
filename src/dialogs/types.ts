import { stylesDialogStore } from "./styles";
import { itemDialogStore } from "./item";
import { mainDialogStore } from "./main";

export const enum DialogType {
  Styles = "styles",
  Item = "item",
  Main = "main",
}

export const DialogStores = {
  [DialogType.Styles]: stylesDialogStore,
  [DialogType.Item]: itemDialogStore,
  [DialogType.Main]: mainDialogStore,
} as const;