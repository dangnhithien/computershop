import { notification } from "antd";
import create from "zustand";
import CART from "../api/cart";

const useStoreCart = create((set) => ({
  cart: [],
  loading: false,
  setCart: (userId) => {
    set(() => ({ loading: true }));

    CART.search({ userId: userId })
      .then((res) => {
        set((state) => ({
          cart: res.data.data,
          loading: false,
        }));
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },

  addToCart: (data) => {
    set(() => ({ loading: true }));

    return CART.create(data)
      .then((res) => {
        notification.success({
          message: "Thêm thành công!",
          placement: "topRight",
        });
      })
      .catch((error) => {
        notification.error({
          message: "Thêm không thành công!",
          placement: "topRight",
        });
        set(() => ({ loading: false }));
      });
  },
}));

export default useStoreCart;
