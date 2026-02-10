import type { FC } from "react";
import styles from "./dialog-header.module.scss";

export const DialogHeader: FC<Readonly<{
  label: string;
  onClose: () => void;
  onBack?: () => void;
}>> = ({ label, onClose, onBack }) => {
  return (
    <div className={styles.header}>
      {onBack && (
        <div
          className={styles.header__back}
          onClick={onBack}
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