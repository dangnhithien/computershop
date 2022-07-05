const PATH = {
  HOME: "/",
  PRODUCT: "/mua-hang",
  DETAIL: (id) =>
    id ? `/chi-tiet-san-pham/${id}` : "/chi-tiet-san-pham/:productId",
  CONTACT: "/contact",
  CHECKOUT: "/thanh-toan",
  CART: "/gio-hang",
  SINGIN: "/dang-nhap",
  SINGUP: "/dang-ki",
  PROFILE: "/trang-ca-nhan",
  FEEDBACK: "/phan-hoi",
  ERROR: "/*",
  TEST: "/test",
};
const PATH_ADIM = {
  DASHBOARD: "/dashboard",
  PRODUCT: "/san-pham",
  AAD_PRODUCT: "san-pham/them-moi",
  EDIT_PRODUCT: "san-pham/chinh-sua",
  CATEGORY: "loai-san-pham",
  SUPPLIER: "nhan-hang",
  ACCOUNT: "tai-khoan",
  ORDER: "don-hang",
  PROMOTION: "giam-gia",
  NOTIFICATION: "thong-bao",
  SHIPPER: "shipper",
};
const LOCALHOST = "https://localhost:44311/v2";
const API_URL = {
  one: "https://api.totostore.tech/",
  two: "http://172.105.124.20:1109/",
};
export { PATH, LOCALHOST, PATH_ADIM, API_URL };
