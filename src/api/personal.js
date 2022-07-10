import axiosConfig from "../utils/axiosConfig";

const PERSONAL = {
  getUser: () => {
    return axiosConfig.get("personal/profile");
  },
  changePassword: (data) => {
    return axiosConfig.put("personal/change-password", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/products/${data.id}`, data);
  },
};

export default PERSONAL;
