import type { FC } from "react";
import { observer } from "mobx-react-lite";
import { mainDialogStore } from "./main-dialog.store.ts";
import { DialogBody, DialogHeader } from '../common';
import { itemDialogStore } from "../item";
import styles from './main-dialog.module.scss';
import { taglineStore } from "../../tagline.store.ts";

export const MainDialog: FC = observer(() => {
  if (!mainDialogStore.isVisible) {
    return null;
  }

  return (
    <DialogBody>
      <DialogHeader label={'Tagline'} onClose={mainDialogStore.close}/>
      <div className={styles.dialog__list}>
        {
          taglineStore.taglines.map(tagline => {
            return (
              <div
                key={tagline.id}
                className={styles.dialog__item}
                onClick={() => {
                  mainDialogStore.close();
                  itemDialogStore.open(tagline.id);
                }}
              >
                {tagline.label}
              </div>
            );
          })
        }
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
      <div className={styles.dialog__styles}>
        <div className={styles.dialog__styles_label}>Styles</div>
        <div className={styles.dialog__styles_arrow}>›</div>
      </div>
    </DialogBody>
  )
})