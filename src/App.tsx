import { Tagline } from "./tagline/Tagline.tsx";
import styles from './app.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Tagline />
    </div>
  );
}
