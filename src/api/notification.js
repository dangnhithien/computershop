import axiosConfig from "../utils/axiosConfig";

const NOTIFICATION = {
  search: (data) => {
    return axiosConfig.post("v1/notifications/search", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/products", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default NOTIFICATION;
