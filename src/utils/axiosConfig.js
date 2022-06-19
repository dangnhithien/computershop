import axios from "axios";

const TOKEN = localStorage.getItem("token");
const axiosConfig = axios.create({
  baseURL: "https://api.totostore.tech/api/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + TOKEN,
    "Content-Type": "application/json",
    tenant: "root",
  },
});

export default axiosConfig;
