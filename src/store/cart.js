import { notification } from "antd";
import create from "zustand";
import CART from "../api/cart";

const useStoreCart = create((set) => ({
  cart: [],
  loading: false,
  setCart: () => {
    set(() => ({ loading: true }));

    CART.search({ keyword: "" })
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

    CART.create(data)
      .then((res) => {
        notification.success({
          message: "thành công",
          placement: "topRight",
        });
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },
}));

export default useStoreCart;
