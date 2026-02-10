import { type FC } from "react";
import { observer } from "mobx-react-lite";
import { type WithSectionStore } from "../types.ts";
import styles from './items.module.scss';

export const Items: FC<WithSectionStore> = observer(({ sectionStore }) => {
  return (
    <div className={styles.items}>
      {sectionStore.items.map((tagline) => {
        return (
          <div key={tagline.id} className={styles.items__item}>
            {sectionStore.getItemLabel(tagline)}
          </div>);
      })}
    </div>
  )
})