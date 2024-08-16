import { Star } from "./star-svg";
import styles from "./state-row.module.sass";

/** задаем типы для StateRow о том какие данные приходят */
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
/** Определение компонента StateRow в котором отрисовывается выбранная строка */
export function StateRow({ stateRow }: Props) {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.rowName}>{stateRow.name}</p>
        <div className={styles.wrapper}>
          <div className={styles.language}>{stateRow.language}</div>
          <div className={styles.star}>
            <Star /> <p>{stateRow.numStar}</p>
          </div>
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
