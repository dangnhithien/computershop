import create from "zustand";
import CATEGORIES from "../api/categories";

const useStoreCategory = create((set) => ({
  categories: [],
  loading: false,
  setCategories: () => {
    set(() => ({ loading: true }));
    CATEGORIES.search({ keyword: "" })
      .then((res) => {
        set((state) => ({ categories: res.data.data, loading: false }));
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },
}));

export default useStoreCategory;
