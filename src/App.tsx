import styles from './app.module.scss';
import { Dialogs } from "./dialogs";
import { Sections } from "./sections/Sections.tsx";
import { Theme } from "./theme";

export const App = () => {
  return (
    <Theme className={styles.app}>
      <main className={styles.app__sections}>
        <Sections/>
      </main>
      <div>
        <Dialogs />
      </div>
    </Theme>
  );
}
