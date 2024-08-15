import { combineReducers, configureStore } from "@reduxjs/toolkit";
import repositoriesSlice from "./slice";

const rootReducer = combineReducers({
  repositoriesSlice,
});

export const store = () =>
  configureStore({
    reducer: rootReducer,
  });

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof store>;
type AppDispath = AppStore["dispatch"];

export type { RootState, AppDispath, AppStore };
