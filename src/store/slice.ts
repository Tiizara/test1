import { createSlice } from "@reduxjs/toolkit";
import { fetchRepositories } from "./action-creator";
import { initialState, Rows } from "./initial-state";
import { SearchResponse } from "../type";

function formatDate(isoString: string) {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

const mapResponse = (response: SearchResponse): Rows[] => {
  return response.items.map((res) => {
    return {
      name: res.name,
      language: res.language,
      numFork: res.forks,
      numStar: res.stargazers_count,
      dataReplace: formatDate(res.updated_at),
      id: res.id,
      description: res.description,
      license: res.license,
    };
  });
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.rows = mapResponse(action.payload);
    });
    builder.addCase(fetchRepositories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "";
    });
  },
});

export default repositoriesSlice.reducer;
