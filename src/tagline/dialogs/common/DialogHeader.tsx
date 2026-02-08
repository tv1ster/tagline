import type { FC } from "react";
import styles from "./dialog-header.module.scss";

export const DialogHeader: FC<Readonly<{ label: string; onClose: () => void }>> = ({ label, onClose }) => {
  return (
    <div className={styles.header}>
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