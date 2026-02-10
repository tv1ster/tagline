import type { FC } from "react";
import styles from "./dialog-header.module.scss";
import { dialogsStore } from "../dialogs.store.ts";

export const DialogHeader: FC<Readonly<{
  label: string;
  onClose: () => void;
  onBack?: () => void;
}>> = ({ label, onClose, onBack }) => {
  return (
    <div className={styles.header}>
      {dialogsStore.canGoBack && (
        <div
          className={styles.header__back}
          onClick={() => {
            onBack?.();
            dialogsStore.goBack();
          }}
        >
          ‹
        </div>
      )}
      {label}
      <div
        className={styles.header__close}
        onClick={onClose}
      >
        ✖
      </div>
    </div>
  );
}