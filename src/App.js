import { useEffect } from "react";
import "./App.css";
import AllRouter from "./routes/listRoute";
import useStoreCart from "./store/cart";
import useStoreCategory from "./store/category";
import useStoreUser from "./store/personal";
import useStoreSupplier from "./store/supplier";

function App() {
  const setUserProfile = useStoreUser((state) => state.setUser);
  const setCategories = useStoreCategory((state) => state.setCategories);
  const setSuppliers = useStoreSupplier((state) => state.setSuppliers);
  const setCart = useStoreCart((state) => state.setCart);
  const user = useStoreUser((state) => state.profile);

  useEffect(setUserProfile, [setUserProfile]);
  useEffect(setCategories, [setCategories]);
  useEffect(setSuppliers, [setSuppliers]);
  useEffect(() => {
    setCart(user.id);
  }, []);
  // axiosConfig.defaults.headers.common["Authorization"] =
  //   "Bearer " + localStorage.getItem("token"); //the token is a variable which holds the token

  return (
    <>
      <AllRouter />
    </>
  );
}

export default App;
