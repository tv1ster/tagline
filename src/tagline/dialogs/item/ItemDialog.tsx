import type { FC } from "react";
import { useState } from "react";
import { DialogBody, DialogHeader } from "../common";
import { itemDialogStore } from './item-dialog.store.ts';
import { observer } from "mobx-react-lite";
import styles from "./item-dialog.module.scss";
import { taglineStore } from "../../tagline.store.ts";

export const ItemDialog: FC = observer(() => {
  const [label, setLabel] = useState("");
  const [link, setLink] = useState("");

  const { isVisible, itemId } = itemDialogStore;

  if (!isVisible) {
    return null;
  }

  if (itemId !== undefined) {
    const item = taglineStore.getItemById(itemId);
    if (item && item.label !== label && item.link !== link) {
      setLabel(item.label);
      setLink(item.link);
    }
  }

  const onClose = () => {
    if (label === '') {
      itemDialogStore.close();
      return;
    }
    if (itemId !== undefined) {
      taglineStore.editTagline(itemId, label, link);
      itemDialogStore.close();
      return;
    }
    // new item
    taglineStore.addTagline(label, link);
    itemDialogStore.close();
  }

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={onClose}/>
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