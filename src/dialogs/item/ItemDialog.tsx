import { type FC, useEffect } from "react";
import { useState } from "react";
import { DialogBody, DialogHeader } from "../common";
import { itemDialogStore } from './item-dialog.store.ts';
import { observer } from "mobx-react-lite";
import styles from "./item-dialog.module.scss";
import type { FieldsRecord } from "../../sections/types.ts";
import { SectionFieldType } from "../../sections/types.ts";
import { dialogsStore } from "../dialogs.store.ts";

export const ItemDialog: FC = observer(() => {
  const { sectionStore } = itemDialogStore;
  const initialFields = sectionStore.fields.reduce(
    (map, field) => {
      map[field.type] = field.initialValue;
      return map;
    }, {} as FieldsRecord);
  const [fields, setFields] = useState<FieldsRecord>(initialFields);

  useEffect(() => {
    if (itemDialogStore.itemId) {
      const item = sectionStore.getItemById(itemDialogStore.itemId);
      setFields(item?.fields ?? initialFields);
    } else {
      setFields(initialFields);
    }
  }, [itemDialogStore.itemId]);

  const onClose = () => {
    const requiredField = sectionStore.fields.find(f => f.required);
    if (requiredField && !fields[requiredField.type]) {
      dialogsStore.closeAll();
      return;
    }
    if (itemDialogStore.itemId !== undefined) {
      sectionStore.editItem(itemDialogStore.itemId, fields);
    } else {
      // new item
      sectionStore.addItem(fields);
    }
    dialogsStore.closeAll();
    return;
  }

  const handleFieldChange = (fieldType: SectionFieldType, value: string) => {
    setFields(prev => ({
      ...prev,
      [fieldType]: value,
    }));
  };

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={onClose} onBack={() => dialogsStore.goBack()}/>
      <div className={styles.item__inputs}>
        {sectionStore.fields.map((field) => (
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