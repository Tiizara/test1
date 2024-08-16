import styles from "./error.module.sass";

/** Компонент ошибки */
export function Error() {
  return (
    <div className={styles.error}>
      <h1>Ошибка сервера повторите позже</h1>
    </div>
  );
}
