import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchResponse } from "../type";

export const fetchRepositories = createAsyncThunk<
  SearchResponse,
  string,
  { rejectValue: string }
>("fetchAll", async (query, thunkAPI) => {
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occurred!");
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
});
