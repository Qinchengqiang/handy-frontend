import { BASE_URL, proAPIs, ajax } from "./APIs";

export const findMatchingPros = (payload) => {
  const url = `${BASE_URL}${proAPIs().findPros.url}`;
  const method = `${proAPIs().findPros.method}`;
  return ajax(url, method, payload);
};
