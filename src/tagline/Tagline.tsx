import type { FC } from "react";
import { mainDialogStore } from "./dialogs";
import styles from "./tagline.module.scss";
import { Taglines } from "./taglines/Taglines.tsx";

export const Tagline: FC = () => {
  return (
    <div className={styles.tagline}>
      <div
        className={styles.tagline__header}
        onClick={() => mainDialogStore.open()}
      >
        Tagline element
      </div>
      <div className={styles.tagline__taglines}>
        <Taglines />
      </div>
    </div>
  );
}