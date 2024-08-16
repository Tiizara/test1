import { TextField } from "@mui/material";
import styles from "../app/App.module.sass";

/** Тип состояния search и обновлениe search*/
export interface SearchType {
  search: string;
  setSearch: (value: string) => void;
}
/** Определение компонента Search в котором происходит ввод желаемого имени репозитория */
export const Search = ({ search, setSearch }: SearchType) => {
  return (
    <TextField
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.textfield}
      id='filled-basic'
      label='Поисковой запрос'
      variant='filled'
      size='small'
    />
  );
};
