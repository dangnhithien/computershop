import axiosConfig from "../utils/axiosConfig";

const USER = {
  getAll: () => {
    return axiosConfig.get("users");
  },
  getSingleUser: (data) => {
    return axiosConfig.get(`users/${data?.id}`, data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default USER;
