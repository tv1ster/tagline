import type { FC } from "react";
import { mainDialogStore } from "./dialogs";
import styles from "./tagline.module.scss";
import { Dialogs } from "./dialogs/Dialogs.tsx";

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
        <Dialogs />
      </div>
    </div>
  );
}