import { API_URL } from "../constants";
import { handleResponse } from "../helpers/handleResponse";

export const loginCall = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${API_URL}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => user);
};
