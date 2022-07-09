import { useEffect } from "react";
import "./App.css";
import AllRouter from "./routes/listRoute";
import useStoreCart from "./store/cart";
import useStoreUser from "./store/personal";

function App() {
  const setUserProfile = useStoreUser((state) => state.setUser);
  const setCart = useStoreCart((state) => state.setCart);
  const user = useStoreUser((state) => state.profile);

  useEffect(setUserProfile, [setUserProfile]);
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
