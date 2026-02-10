import { type FC, useEffect } from "react";
import { useState } from "react";
import { DialogBody, DialogHeader } from "../common";
import { observer } from "mobx-react-lite";
import styles from "./item-dialog.module.scss";
import type { FieldsRecord } from "../../sections/types.ts";
import { SectionFieldType } from "../../sections/types.ts";
import { dialogsStore } from "../dialogs.store.ts";

export const ItemDialog: FC = observer(() => {
  const sectionStore = dialogsStore.expectedSectionStore;
  const initialFields = sectionStore.fields.reduce(
    (map, field) => {
      map[field.type] = field.initialValue;
      return map;
    }, {} as FieldsRecord);
  const [fields, setFields] = useState<FieldsRecord>(initialFields);

  useEffect(() => {
    if (dialogsStore.itemId) {
      const item = sectionStore.getItemById(dialogsStore.itemId);
      setFields(item?.fields ?? initialFields);
    } else {
      setFields(initialFields);
    }
  }, [dialogsStore.itemId]);

  const saveChanges = () => {
    if (dialogsStore.itemId !== undefined) {
      sectionStore.editItem(dialogsStore.itemId, fields);
    } else {
      sectionStore.addItem(fields);
    }
  }

  const onClose = () => {
    const requiredField = sectionStore.fields.find(f => f.required);
    if (requiredField && !fields[requiredField.type]) {
      dialogsStore.closeAll();
      return;
    }
    saveChanges();
    dialogsStore.closeAll();
    return;
  }

  const handleFieldChange = (fieldType: SectionFieldType, value: string) => {
    setFields(prev => ({
      ...prev,
      [fieldType]: value,
    }));
  };
  const onBack = () => {
    saveChanges();
    dialogsStore.goBack();
  }

  return (
    <DialogBody>
      <DialogHeader label={'Item'} onClose={onClose} onBack={onBack}/>
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