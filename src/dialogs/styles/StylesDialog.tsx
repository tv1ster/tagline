import type { FC } from "react";
import { DialogBody, DialogHeader } from "../common";
import { observer } from "mobx-react-lite";
import styles from './styles-dialog.module.scss';
import { dialogsStore } from "../dialogs.store.ts";

export const StylesDialog: FC = observer(() => {
  const sectionStore = dialogsStore.expectedSectionStore;
  return (
    <DialogBody>
      <DialogHeader
        label={'Styles'}
        onClose={() => { dialogsStore.closeAll(); }}
        onBack={() => { dialogsStore.goBack(); }}
      />
      <div>
        {
          sectionStore.themeFields.map((style, index) => {
            return (
              <div key={index} className={styles.styles__block}>
                {style.label && <div className={styles.styles__label}>{style.label}</div>}
                <div className={styles.styles__items}>
                  {style.values.map((value, i) => {
                      return (
                        <div
                          key={i}
                          className={[
                            styles.styles__item,
                            sectionStore.getThemeProperty(style.type) === value.type ? styles.styles__item_active : '',
                            style.classname ?? '',
                            value.classname ?? '',
                          ].join(' ')}
                          onClick={() => {
                            if (sectionStore.getThemeProperty(style.type) !== value.type) {
                              sectionStore.setThemeProperty(style.type, value.type);
                            }
                          }}
                        >
                          {value.specialValue !== undefined ? value.specialValue : value.type.toUpperCase()}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })
        }
      </div>
    </DialogBody>
  )
});