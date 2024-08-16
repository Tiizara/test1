import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchResponse } from "../type";

/** Получение репозиториев из API GitHub
 * @param {string} query - Поисковый запрос для получения репозиториев
 * @returns {Promise<SearchResponse>} - Promise, которое преобразуется в объект SearchResponse
 * @throws {string} - Сообщение об ошибке при неудачном запросе
 */

export const fetchRepositories = createAsyncThunk<
  SearchResponse,
  string,
  { rejectValue: string }
>("fetchAll", async (query) => {
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occurred!");
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});
