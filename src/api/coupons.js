import axiosConfig from "../utils/axiosConfig";

const COUPONS = {
  search: (data) => {
    return axiosConfig.post("v1/coupons/search", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/coupons", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default COUPONS;
