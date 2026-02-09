import type { FC } from "react";
import { DialogBody, DialogHeader } from "../common";
import { stylesDialogStore } from "./styles-dialog.store.ts";
import { observer } from "mobx-react-lite";

export const StylesDialog: FC = observer(() => {
  if (!stylesDialogStore.isVisible) {
    return null;
  }
  return (
    <DialogBody>
      <DialogHeader label={'Styles'} onClose={() => {stylesDialogStore.close()}} />
    </DialogBody>
  )
});