import type { FC } from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { DialogBody, DialogHeader } from '../common';
import styles from './main-dialog.module.scss';
import { dialogsStore } from "../dialogs.store.ts";
import { DialogType } from "../types.ts";

export const MainDialog: FC = observer(() => {
  const sectionStore = dialogsStore.expectedSectionStore;
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== toIndex) {
      sectionStore.reorderItems(draggedIndex, toIndex);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <DialogBody>
      <DialogHeader label={'Tagline'} onClose={() => dialogsStore.closeAll()}/>
      <div className={styles.dialog__list}>
        {
          sectionStore.items.map((item, index) => {
            const isDragging = draggedIndex === index;
            const isDragOver = dragOverIndex === index;
            return (
              <div
                key={item.id}
                className={[
                  styles.dialog__item,
                  isDragging ? styles.dialog__item_dragging : '',
                  isDragOver ? styles.dialog__item_dragover : '',
                ].join(' ')}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                onClick={() => dialogsStore.openDialog(DialogType.Item, sectionStore, item.id)}
              >
                {sectionStore.getItemLabel(item)}
              </div>
            );
          })
        }
        <div
          className={styles.dialog__add}
          onClick={() => dialogsStore.openDialog(DialogType.Item, sectionStore) }
        >
          Add item
        </div>
      </div>
      <div className={styles.dialog__styles} onClick={() => dialogsStore.openDialog(DialogType.Styles, sectionStore)}>
        <div className={styles.dialog__styles_label}>Styles</div>
        <div className={styles.dialog__styles_arrow}>›</div>
      </div>
    </DialogBody>
  )
})