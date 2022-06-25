import axiosConfig from "../utils/axiosConfig";

const PRODUCT_PRICE = {
  post: (data) => {
    return axiosConfig.post("v1/ProductPrices", data);
  },
  create: (data) => {
    return axiosConfig.post("v1/products", data);
  },
  delete: (data) => {
    return axiosConfig.delete(`v1/categories/${data.id}`, data);
  },
};

export default PRODUCT_PRICE;
