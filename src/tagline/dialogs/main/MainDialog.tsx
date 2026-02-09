import type { FC } from "react";
import { observer } from "mobx-react-lite";
import { mainDialogStore } from "./main-dialog.store.ts";
import { DialogBody, DialogHeader } from '../common';
import { itemDialogStore } from "../item/main-dialog.store.ts";
import styles from './main-dialog.module.scss';

export const MainDialog: FC = observer(() => {
  if (!mainDialogStore.isVisible) {
    return null;
  }

  return (
    <DialogBody>
      <DialogHeader label={'Tagline'} onClose={mainDialogStore.close}/>
      <div className={styles.dialog__list}>
        <div
          className={styles.dialog__add}
          onClick={() => {
            // todo: notification/dialogs service
            mainDialogStore.close();
            itemDialogStore.open();
          }}
        >
          Add item
        </div>
      </div>
    </DialogBody>
  )
})