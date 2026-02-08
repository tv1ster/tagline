import type { FC } from "react";
import { MainDialog, mainDialogStore } from "./dialogs";
import styles from "./tagline.module.scss";

export const Tagline: FC = () => {
  return (
    <div className={styles.tagline}>
      <div
        className={styles.tagline__header}
        onClick={() => mainDialogStore.open()}
      >
        Tagline element
      </div>
      <div>
        <MainDialog />
      </div>
    </div>
  );
}