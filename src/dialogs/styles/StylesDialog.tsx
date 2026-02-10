import type { FC } from "react";
import { DialogBody, DialogHeader } from "../common";
import { stylesDialogStore } from "./styles-dialog.store.ts";
import { observer } from "mobx-react-lite";
import { stylesItems } from "./types";
import styles from './styles-dialog.module.scss';
import { mainDialogStore } from "../main";

export const StylesDialog: FC = observer(() => {
  if (!stylesDialogStore.isVisible) {
    return null;
  }
  const { sectionStore } = stylesDialogStore;
  return (
    <DialogBody>
      <DialogHeader
        label={'Styles'}
        onClose={() => {
          stylesDialogStore.close()
        }}
        onBack={() => {
          stylesDialogStore.close();
          mainDialogStore.open(stylesDialogStore.sectionStore);
        }}
      />
      <div>
        {
          stylesItems.map((style, index) => {
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
                            sectionStore.getStyle(style.type) === value.type ? styles.styles__item_active : '',
                            style.classname ?? '',
                            value.classname ?? '',
                          ].join(' ')}
                          onClick={() => {
                            if (sectionStore.getStyle(style.type) !== value.type) {
                              sectionStore.setStyle(style.type, value.type);
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