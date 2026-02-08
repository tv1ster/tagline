import type { FC, ReactNode } from "react";
import styles from "./dialog-body.module.scss";

export const DialogBody: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}