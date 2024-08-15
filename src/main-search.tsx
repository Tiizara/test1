import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector } from "./store/hook";
import { useState } from "react";
import styles from "./main-search.module.sass";
import { StateRow } from "./stateRow";

interface MainSearch {
  search: string;
  button: boolean;
  setButtonState: Function;
}

function MainSearch({ search, button, setButtonState }: MainSearch) {
  const { rows, columns } = useAppSelector((state) => state.repositoriesSlice);

  const searchItems = rows.filter((row) => {
    if (search === "") {
      setButtonState(false);
    } else if (row.name.toLowerCase().includes(search.toLowerCase())) {
      return row;
    }
  });

  const [stateRow, setStateRow] = useState({});
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
              rows={button ? searchItems : rows}
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
            {Object.keys(stateRow).length > 0 ? (
              <StateRow stateRow={stateRow} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { MainSearch };
