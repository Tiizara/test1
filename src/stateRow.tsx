import styles from "./state-row.module.sass";

export function StateRow({ stateRow }: any) {
  // const license = () => {
  //   for (var keys in stateRow.license) {
  //     return stateRow.license[keys];
  //   }
  // };

  return (
    <>
      <div className={styles.box}>
        <p className={styles.rowName}>{stateRow.name}</p>
        <div className={styles.wrapper}>
          <div className={styles.language}>{stateRow.language}</div>
          <div className={styles.star}>{stateRow.numStar}</div>
        </div>
        <div className={styles.boxValue}>
          {Object.values(stateRow.license).map((value, index) => {
            return (
              <div className={styles.value} key={index}>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
        <p>{stateRow.description}</p>
      </div>
    </>
  );
}
