import { notification } from "antd";
import NOTIFICATION from "api/notification";
import create from "zustand";

const useStoreNotification = create((set) => ({
  notifications: [],
  loading: false,
  setNotifications: (userId) => {
    set(() => ({ loading: true }));

    NOTIFICATION.search({ userId: userId })
      .then((res) => {
        set((state) => ({
          notifications: res.data.data,
          loading: false,
        }));
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },
}));

export default useStoreNotification;
