// const data = {
//     email: "admin@root.com",
//     password: "123Pa$$word!",
//   };

import axios from "axios";
import { API_URL } from "../utils/const";

const LOGIN = {
  post: (data) => {
    return axios({
      headers: {
        "Content-Type": "application/json",
        tenant: "root",
      },
      method: "post",
      url: API_URL.one + "tokens",
      data,
    });
  },
  register: (data) => {
    return axios({
      headers: {
        "Content-Type": "application/json",
        tenant: "root",
      },
      method: "post",
      url: API_URL.one + "users/self-register",
      data,
    });
  },
  confirmEmail: (data) => {
    return axios({
      headers: {
        "Content-Type": "application/json",
        tenant: "root",
      },
      method: "get",
      url: API_URL.one + "users/confirm-email",
      params: data,
    });
  },
};

export default LOGIN;
