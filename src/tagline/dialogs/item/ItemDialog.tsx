import { type FC, useEffect } from "react";
import { useState } from "react";
import { DialogBody, DialogHeader } from "../common";
import { itemDialogStore } from './item-dialog.store.ts';
import { observer } from "mobx-react-lite";
import styles from "./item-dialog.module.scss";
import { taglineStore } from "../../tagline.store.ts";
import { mainDialogStore } from "../main";
import type { FieldsRecord } from "../../../types.ts";
import { SectionFieldType } from "../../../types.ts";

const getInitialFields = (): FieldsRecord => {
  const fields: FieldsRecord = {};
  taglineStore.fields.forEach(field => {
    fields[field.type] = field.initialValue;
  });
  return fields;
};

const INITIAL_FIELDS = getInitialFields();

export const ItemDialog: FC = observer(() => {
  const [fields, setFields] = useState<FieldsRecord>(INITIAL_FIELDS);

  useEffect(() => {
    if (itemDialogStore.itemId) {
      const item = taglineStore.getItemById(itemDialogStore.itemId);
      setFields(item?.fields ?? INITIAL_FIELDS);
    } else {
      setFields(INITIAL_FIELDS);
    }
  }, [itemDialogStore.itemId]);

  if (!itemDialogStore.isVisible) {
    return null;
  }

  const onClose = () => {
    const requiredField = taglineStore.fields.find(f => f.required);
    if (requiredField && !fields[requiredField.type]) {
      itemDialogStore.close();
      return;
    }
    if (itemDialogStore.itemId !== undefined) {
      taglineStore.editItem(itemDialogStore.itemId, fields);
      itemDialogStore.close();
      return;
    }
    // new item
    taglineStore.addItem(fields);
    itemDialogStore.close();
  }

  const onBack = () => {
    onClose();
    mainDialogStore.open();
  }

  const handleFieldChange = (fieldType: SectionFieldType, value: string) => {
    setFields(prev => ({
      ...prev,
      [fieldType]: value,
    }));
  };

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={onClose} onBack={onBack}/>
      <div className={styles.item__inputs}>
        {taglineStore.fields.map((field) => (
          <div key={field.type} className={styles.item__inputblock}>
            <div className={styles.item__label}>
              {field.label}
            </div>
            <input
              type="text"
              className={styles.item__input}
              value={fields[field.type] ?? ''}
              onChange={(e) => handleFieldChange(field.type, e.target.value)}
            />
          </div>
        ))}
      </div>
    </DialogBody>
  )
});