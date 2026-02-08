import type { FC } from "react";
import { observer } from "mobx-react-lite";
import { mainDialogStore } from "./main-dialog.store.ts";
import { DialogBody, DialogHeader } from '../common';

export const MainDialog: FC = observer(() => {
  if (!mainDialogStore.isVisible) {
    return null;
  }

  return (
    <DialogBody>
      <DialogHeader label={'Tagline'} onClose={() => mainDialogStore.close()}/>
    </DialogBody>
  )
})