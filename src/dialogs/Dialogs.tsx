import type { FC } from "react";
import { observer } from "mobx-react-lite";
import { dialogsStore } from "./dialogs.store.ts";
import { StylesDialog } from "./styles";
import { ItemDialog } from "./item";
import { DialogType } from "./types.ts";
import { MainDialog } from "./main";

const DialogComponents = {
  [DialogType.Styles]: <StylesDialog />,
  [DialogType.Item]: <ItemDialog />,
  [DialogType.Main]: <MainDialog />,
}

export const Dialogs: FC = observer(() => {
  if (!dialogsStore.visibleDialog) {
    return null;
  }
  return (
    <>
      {DialogComponents[dialogsStore.visibleDialog]}
    </>
  )
});