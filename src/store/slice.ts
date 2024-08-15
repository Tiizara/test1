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
      license: res.license
        ? {
            key: res.license.key,
            name: res.license.name,
            node_id: res.license.node_id,
            spdx_id: res.license.spdx_id,
          }
        : null,
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
      state.error = false;
      state.rows = mapResponse(action.payload);
    });
    builder.addCase(fetchRepositories.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchRepositories.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default repositoriesSlice.reducer;
