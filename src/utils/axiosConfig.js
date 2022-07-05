import axios from "axios";
import { API_URL } from "./const";
import { KEY } from "./localStorage";

const axiosConfig = axios.create({
  baseURL: API_URL.one,
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem(KEY.TOKEN),
    "Content-Type": "application/json",
    tenant: "root",
  },
});

export default axiosConfig;
