import type { FC } from "react";
import { Dialog, dialogStore } from "./dialog";
import styles from "./tagline.module.scss";

export const Tagline: FC = () => {
  return (
    <div className={styles.tagline}>
      <div
        className={styles.tagline__header}
        onClick={() => dialogStore.open()}
      >
        Tagline element
      </div>
      <div>
        <Dialog />
      </div>
    </div>
  );
}