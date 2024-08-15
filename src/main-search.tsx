import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector } from "./store/hook";
import { useState } from "react";
import styles from "./main-search.module.sass";
import { StateRow, StateRowProps } from "./stateRow";

function MainSearch() {
  const { rows, columns } = useAppSelector((state) => state.repositoriesSlice);

  const [stateRow, setStateRow] = useState<StateRowProps | null>(null);
  console.log(stateRow);

  return (
    <>
      <div>
        <div>
          <p className={styles.resultSearch}>Результат поиска</p>
        </div>
        <div className={styles.section}>
          <div className={styles.containerDataGrid}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              onRowClick={(e) => setStateRow(e.row)}
            />
          </div>
          <div className={styles.containerRow}>
            {stateRow ? <StateRow stateRow={stateRow} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export { MainSearch };
