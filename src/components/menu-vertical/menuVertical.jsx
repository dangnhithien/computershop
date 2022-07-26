import BackTopCustom from "./backTop";
import Cart from "./cart";
import Home from "./home";
import Notification from "./notification";
import { StyleMenuVertical } from "./style/style";
import User from "./user";

const MenuVertical = () => {
  return (
    <>
      <StyleMenuVertical>
        <User />
        <Home />
        <Cart />
        <Notification />
        <BackTopCustom />
      </StyleMenuVertical>
    </>
  );
};

export default MenuVertical;
