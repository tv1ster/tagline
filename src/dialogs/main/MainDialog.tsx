import type { FC } from "react";
import { observer } from "mobx-react-lite";
import { mainDialogStore } from "./main-dialog.store.ts";
import { DialogBody, DialogHeader } from '../common';
import styles from './main-dialog.module.scss';
import { dialogsStore } from "../dialogs.store.ts";
import { DialogType } from "../types.ts";

export const MainDialog: FC = observer(() => {
  const { sectionStore } = mainDialogStore;

  return (
    <DialogBody>
      <DialogHeader label={'Tagline'} onClose={() => dialogsStore.closeAll()}/>
      <div className={styles.dialog__list}>
        {
          sectionStore.items.map(item => {
            return (
              <div
                key={item.id}
                className={styles.dialog__item}
                onClick={() => dialogsStore.openDialog(DialogType.Item, sectionStore, item.id)}
              >
                {sectionStore.getItemLabel(item)}
              </div>
            );
          })
        }
        <div
          className={styles.dialog__add}
          onClick={() => dialogsStore.openDialog(DialogType.Item, sectionStore) }
        >
          Add item
        </div>
      </div>
      <div className={styles.dialog__styles} onClick={() => dialogsStore.openDialog(DialogType.Styles, sectionStore)}>
        <div className={styles.dialog__styles_label}>Styles</div>
        <div className={styles.dialog__styles_arrow}>›</div>
      </div>
    </DialogBody>
  )
})