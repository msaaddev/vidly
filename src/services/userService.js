import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "users";

export function register(user) {
  http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.nameOfUser
  });
}
