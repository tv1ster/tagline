import type { FC } from "react";
import { DialogBody, DialogHeader } from "../common";
import { itemDialogStore } from './main-dialog.store.ts';
import { observer } from "mobx-react-lite";

export const ItemDialog: FC = observer(() => {
  if (!itemDialogStore.isVisible) {
    return null;
  }

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={itemDialogStore.close}/>
    </DialogBody>
  )
});