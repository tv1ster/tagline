import { type FC, useEffect } from "react";
import { useState } from "react";
import { DialogBody, DialogHeader } from "../common";
import { itemDialogStore } from './item-dialog.store.ts';
import { observer } from "mobx-react-lite";
import styles from "./item-dialog.module.scss";
import { taglineStore } from "../../tagline.store.ts";
import { mainDialogStore } from "../main";

export const ItemDialog: FC = observer(() => {
  const [label, setLabel] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (itemDialogStore.itemId) {
      const item = taglineStore.getItemById(itemDialogStore.itemId);
      setLabel(item?.label ?? '');
      setLink(item?.link ?? '');
    } else {
      setLabel('');
      setLink('');
    }
  }, [itemDialogStore.itemId, itemDialogStore.isVisible]);

  if (!itemDialogStore.isVisible) {
    return null;
  }

  const onClose = () => {
    if (label === '') {
      itemDialogStore.close();
      return;
    }
    if (itemDialogStore.itemId !== undefined) {
      taglineStore.editTagline(itemDialogStore.itemId, label, link);
      itemDialogStore.close();
      return;
    }
    // new item
    taglineStore.addTagline(label, link);
    itemDialogStore.close();
  }

  const onBack = () => {
    onClose();
    mainDialogStore.open();
  }

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={onClose} onBack={onBack}/>
      <div className={styles.item__inputs}>
        <div className={styles.item__inputblock}>
          <div className={styles.item__label}>Label</div>
          <input
            type="text"
            className={styles.item__input}
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div className={styles.item__inputblock}>
          <div className={styles.item__label}>Link</div>
          <input
            type="text"
            className={styles.item__input}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>
    </DialogBody>
  )
});