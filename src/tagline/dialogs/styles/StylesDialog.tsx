import type { FC } from "react";
import { DialogBody, DialogHeader } from "../common";
import { stylesDialogStore } from "./styles-dialog.store.ts";
import { observer } from "mobx-react-lite";
import { stylesItems } from "./types";
import styles from './styles-dialog.module.scss';
import { taglineStore } from "../../tagline.store.ts";

export const StylesDialog: FC = observer(() => {
  if (!stylesDialogStore.isVisible) {
    return null;
  }
  return (
    <DialogBody>
      <DialogHeader label={'Styles'} onClose={() => {
        stylesDialogStore.close()
      }}/>
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
                            taglineStore.getStyle(style.type) === value.type ? styles.styles__item_active : '',
                            ...value.classnames,
                          ].join(' ')}
                          onClick={() => {
                            if (taglineStore.getStyle(style.type) !== value.type) {
                              taglineStore.setStyle(style.type, value.type);
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