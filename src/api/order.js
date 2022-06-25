import axiosConfig from "../utils/axiosConfig";

const ORDER = {
  search: (data) => {
    return axiosConfig.post("v1/orders/search", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/products", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default ORDER;
