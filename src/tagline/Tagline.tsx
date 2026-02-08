import type { FC } from "react";
import styles from "./tagline.module.scss";

export const Tagline: FC = () => {
  return (
    <div className={styles.tagline}>
      <div className={styles.tagline__header}>
        Tagline element
      </div>
    </div>
  );
}