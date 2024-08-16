import { createSlice } from "@reduxjs/toolkit";
import { fetchRepositories } from "./action-creator";
import { initialState, Rows } from "./initial-state";
import { SearchResponse } from "../type";
import { formatDate } from "../formatDate";

/**
 * Сопоставляет SearchResponse с массивом объектов Rows
 *
 * @param {SearchResponse} response - SearchResponse для сопоставления
 * @returns {Rows[]} - Массив объектов Rows
 */

const mapResponse = (response: SearchResponse): Rows[] => {
  return response.items.map((res) => {
    return {
      name: res.name,
      language: res.language ? res.language : 'Язык не определен',
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
