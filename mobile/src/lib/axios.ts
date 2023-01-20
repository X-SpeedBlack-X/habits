import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.40.103:3333",
});
