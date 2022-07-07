import axiosConfig from "../utils/axiosConfig";

const CUSTOMER = {
  put: (data) => {
    return axiosConfig.put(`v1/customers/${data.id}`, data);
  },
  get: (id) => {
    return axiosConfig.get(`v1/customers/${id}`);
  },
  search: (data) => {
    return axiosConfig.post("v1/customers/search", data);
  },
};

export default CUSTOMER;
