import axiosConfig from "../utils/axiosConfig";

const SUPPLIERS = {
  search: (data) => {
    return axiosConfig.post("v1/suppliers/search", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/suppliers", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/suppliers/${data.id}`, data);
  },
};

export default SUPPLIERS;
