import create from "zustand";
import PERSONAL from "../api/personal";

const useStore = create((set) => ({
  profile: {},
  loading: false,
  getUser: () => {
    set(() => ({ loading: true }));
    PERSONAL.getUser()
      .then((res) => {
        set((state) => ({
          profile: (state.profile = res.data),
          loading: false,
        }));
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },
}));

export default useStore;
