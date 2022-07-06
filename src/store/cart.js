import { notification } from "antd";
import create from "zustand";
import CART from "../api/cart";
import useStoreUser from "./personal";

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
        console.log(res.data.data.lenght);
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
