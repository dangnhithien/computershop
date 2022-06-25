import axiosConfig from "../utils/axiosConfig";

const PERSONAL = {
  getUser: () => {
    return axiosConfig.get("personal/profile");
  },
  create: (data) => {
    return axiosConfig.post("v1/products", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default PERSONAL;
