import axiosConfig from "../utils/axiosConfig";

const CART = {
  search: (data) => {
    return axiosConfig.post("v1/carts/search", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/carts", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default CART;
