import type { FC } from "react";
import { DialogBody, DialogHeader } from "../common";
import { itemDialogStore } from './main-dialog.store.ts';
import { observer } from "mobx-react-lite";
import styles from "./item-dialog.module.scss";

export const ItemDialog: FC = observer(() => {
  if (!itemDialogStore.isVisible) {
    return null;
  }

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={itemDialogStore.close}/>
      <div className={styles.item__inputs}>
        <div className={styles.item__inputblock}>
          <div className={styles.item__label}>Label</div>
          <input
            type="text"
            className={styles.item__input}
          />
        </div>
        <div className={styles.item__inputblock}>
          <div className={styles.item__label}>Link</div>
          <input
            type="text"
            className={styles.item__input}
          />
        </div>
      </div>
    </DialogBody>
  )
});