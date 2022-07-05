import create from "zustand";
import PERSONAL from "../api/personal";

const useStoreUser = create((set) => ({
  profile: {},
  loading: false,
  setUser: () => {
    set(() => ({ loading: true }));

    PERSONAL.getUser()
      .then((res) => {
        console.log(res);
        set((state) => ({
          profile: res.data,
          loading: false,
        }));
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },
}));

export default useStoreUser;
