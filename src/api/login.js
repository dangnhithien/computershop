// const data = {
//     email: "admin@root.com",
//     password: "123Pa$$word!",
//   };

import axios from "axios";

const LOGIN = {
  post: (data) => {
    return axios({
      headers: {
        "Content-Type": "application/json",
        tenant: "root",
      },
      method: "post",
      url: "https://api.totostore.tech/tokens",
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
      url: "https://api.totostore.tech/users/self-register",
      data,
    });
  },
  // post: (data)=>{
  //     fetch("https://api.totostore.tech/api/tokens", {
  //   method: "POST", // or 'PUT'
  //   headers: {
  //     "Content-Type": "application/json",
  //     tenant: "root",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Success:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // }
};

export default LOGIN;
