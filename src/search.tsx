import { TextField } from "@mui/material";
import styles from "./App.module.sass";

export interface SearchType {
  search: string;
  setSearch: (value: string) => void;
}
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
