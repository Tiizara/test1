import styles from "./welcome-drawer.module.sass";

/** Компонент приветственного окна */
export function WelcomeDrawer() {
  return (
    <div className={styles.welcome}>
      <h1>Добро пожаловать</h1>
    </div>
  );
}
