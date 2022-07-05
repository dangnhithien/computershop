import create from "zustand";
import SUPPLIERS from "../api/suppliers";

const useStoreSupplier = create((set) => ({
  suppliers: [],
  loading: false,
  setSuppliers: () => {
    set(() => ({ loading: true }));
    SUPPLIERS.search({ keyword: "" })
      .then((res) => {
        set((state) => ({ suppliers: res.data.data, loading: false }));
      })
      .catch((error) => {
        set(() => ({ loading: false }));
      });
  },
}));

export default useStoreSupplier;
