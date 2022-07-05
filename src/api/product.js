import axiosConfig from "../utils/axiosConfig";

const PRODUCT = {
  search: (data) => {
    return axiosConfig.post("v1/products/search", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/products", data);
  },
  getSingle: (data) => {
    return axiosConfig.get(`v1/products/${data.id}`, data.id);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default PRODUCT;
