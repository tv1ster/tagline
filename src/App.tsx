import { Tagline } from "./tagline/Tagline.tsx";
import styles from './app.module.scss';
import { Dialogs } from "./tagline/dialogs/Dialogs.tsx";

export const App = () => {
  return (
    <div className={styles.app}>
      <Tagline />
      <div>
        <Dialogs />
      </div>
    </div>
  );
}
