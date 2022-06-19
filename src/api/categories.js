import axiosConfig from "../utils/axiosConfig";

const CATEGORIES = {
  post: (data) => {
    return axiosConfig.post("v1/categories", data);
  },
  search: (data) => {
    return axiosConfig.post("v1/categories/search", data);
  },
  put: (data) => {
    return axiosConfig.put(`v1/categories/${data.id}`, data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/categories/${data.id}`, data);
  },
};

export default CATEGORIES;
