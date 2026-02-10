import styles from './app.module.scss';
import { Dialogs } from "./dialogs/Dialogs.tsx";
import { Sections } from "./sections/Sections.tsx";

export const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.app__sections}>
        <Sections/>
      </main>
      <div>
        <Dialogs />
      </div>
    </div>
  );
}
