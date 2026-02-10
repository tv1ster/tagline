import { type FC } from "react";
import { observer } from "mobx-react-lite";
import { type WithSectionStore } from "../types.ts";
import styles from './items.module.scss';
import { dialogsStore, DialogType } from "../../dialogs";

export const Items: FC<WithSectionStore> = observer(({ sectionStore }) => {
  return (
    <div className={styles.items}>
      {sectionStore.items.map((item) => {
        return (
          <div
            key={item.id}
            className={styles.items__item}
            onClick={() => dialogsStore.openDialog(DialogType.Item, sectionStore, item.id)}
          >
            {sectionStore.getItemLabel(item)}
          </div>);
      })}
    </div>
  )
})