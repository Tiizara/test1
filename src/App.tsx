import styles from "./App.module.sass";
import Button from "@mui/material/Button";
import { MainSearch } from "./main-search";
import { Search } from "./search";
import { useState } from "react";
import { fetchRepositories } from "./store/action-creator";
import { useAppDispatch } from "./store/hook";
import { WelcomeDrawer } from "./welcome-drawer";

function App() {
  const [search, setSearch] = useState("");
  const [buttonState, setButtonState] = useState(false);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchRepositories(search));
    setButtonState(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className={styles.button}>
          <Button size='large' onClick={handleClick} variant="contained">
            Искать
          </Button>
        </div>
      </div>
      {buttonState ? (
        <MainSearch
          button={buttonState}
          search={search}
          setButtonState={setButtonState}
        />
      ) : (
        <WelcomeDrawer />
      )}
    </>
  );
}

export default App;
