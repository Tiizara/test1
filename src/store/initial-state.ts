import { GridColDef } from "@mui/x-data-grid";

export interface Rows{
  name: string;
  language: string;
  numFork: number;
  numStar: number;
  dataReplace: string;
  id: number;
}

interface InitialState {
  isLoading: boolean;
  error: string;
  columns: GridColDef[];
  rows: Rows[];
}

const initialState: InitialState = {
  columns: [
    { field: "name", headerName: "Название", width: 70 },
    { field: "language", headerName: "Язык", width: 130 },
    {
      field: "numFork",
      headerName: "Число форков",
      width: 130,
    },
    { field: "numStar", headerName: "Число звезд", width: 130 },
    { field: "dataReplace", headerName: "Дата обновления", width: 130 },
  ],
  rows: [],
  isLoading: false,
  error: "",
};

export { initialState };
