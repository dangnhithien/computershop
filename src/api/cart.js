import axiosConfig from "../utils/axiosConfig";

const CART = {
  search: (data) => {
    return axiosConfig.post("v1/carts/search", data);
  },
  put: (data) => {
    return axiosConfig.put(`v1/carts/${data.id}`, data);
  },
  create: (data) => {
    return axiosConfig.post("v1/carts", data);
  },
};

export default CART;
