import axiosConfig from "../utils/axiosConfig";

const PRODUCT = {
  search: (data) => {
    return axiosConfig.post("v1/products/search", data);
  },
  create: (data) => {
    return axiosConfig.put("v1/products", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/categories/${data.id}`, data);
  },
};

export default PRODUCT;
