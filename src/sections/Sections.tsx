import { sectionsStore } from "./sections.store.ts";
import styles from "./sections.module.scss";
import { Items } from "./items/Items.tsx";
import { mainDialogStore } from "../dialogs";

export const Sections = () => {
  return (
    <div className={styles.sections}>
      {
        sectionsStore.sections.map((section) => {
          return (
            <section key={section.brandingPrefix} className={styles.sections__section}>
              <div
                className={styles.sections__header}
                onClick={() => mainDialogStore.open(section.store)}
              >
                {section.headerLabel}
              </div>
              <div className={styles.sections__items}>
                <Items sectionStore={section.store}/>
              </div>
            </section>
          )
        })
      }
    </div>
  );
}