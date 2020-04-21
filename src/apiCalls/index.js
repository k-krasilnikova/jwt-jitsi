import { API_URL } from "../constants";
import { handleResponse } from "../helpers/handleResponse";

export const loginCall = (username, password) => {
  let formData = new FormData();

  formData.append("email", username);
  formData.append("password", password);
  const requestOptions = {
    method: "POST",
    body: formData,
  };

  return fetch(API_URL, requestOptions)
    .then(handleResponse)
    .then((user) => user);
};
