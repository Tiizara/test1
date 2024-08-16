import styles from "./App.module.sass";
import Button from "@mui/material/Button";
import { MainSearch } from "../main-search/main-search";
import { Search } from "../main-search/search";
import { useState } from "react";
import { fetchRepositories } from "../store/action-creator";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { WelcomeDrawer } from "../welcome-drawer/welcome-drawer";
import { Error } from "../error/error";

/** Определение компонента App */
function App() {
  /** Состояния для ввода поиска и состояния кнопки*/
  const [search, setSearch] = useState("");
  const [buttonState, setButtonState] = useState(false);

  /** Получение функции dispatch из hook.ts */
  const dispatch = useAppDispatch();

  /**Определение функции для обработки события нажатия на кнопку */
  const handleClick = () => {
    /** Отправляем данные поиска в action-creator.ts  */
    dispatch(fetchRepositories(search));
    /** Меняем состояния кнопки в true */
    setButtonState(true);
  };
  /** Получение состояния ошибки из хранилища Redux */
  const { error } = useAppSelector((state) => state.repositoriesSlice);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className={styles.button}>
          <Button
            disabled={search.trim().length > 0 ? false : true}
            size='large'
            onClick={handleClick}
            variant='contained'
          >
            Искать
          </Button>
        </div>
      </div>
      {/**  Условный рендеринг на основе состояния ошибки и состояния кнопки */}
      {error ? <Error /> : buttonState ? <MainSearch /> : <WelcomeDrawer />}
    </>
  );
}

export default App;
