import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "./store";

const useAppDispatch = () => useDispatch<AppDispath>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
