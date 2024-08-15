import styles from "./state-row.module.sass";

export interface StateRowProps {
  name: string;
  language: string;
  numStar: number;
  description: string;
  license: {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
  };
}

interface Props {
  stateRow: StateRowProps;
}

export function StateRow({ stateRow }: Props) {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.rowName}>{stateRow.name}</p>
        <div className={styles.wrapper}>
          <div className={styles.language}>{stateRow.language}</div>
          <div className={styles.star}>{stateRow.numStar}</div>
        </div>
        <div className={styles.boxValue}>
          {stateRow.license
            ? Object.values(stateRow.license).map((value, index) => {
                return (
                  <div className={styles.value} key={index}>
                    <p>{value}</p>
                  </div>
                );
              })
            : ""}
        </div>
        <p>{stateRow.description}</p>
      </div>
    </>
  );
}
