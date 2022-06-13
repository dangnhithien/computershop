import React from "react";
import CartTable from "../components/cartTable1";
import CartTotal from "../components/cartTotal";
import { Cookie, COOKIE_NAME } from "../../../utils/cookie";
import { useCookies } from "react-cookie";
import { Empty, Button } from "antd";
import { isEmpty } from "../../../utils/method";

const Cart = () => {
  const [cookies, setCookie] = useCookies([COOKIE_NAME.CART]);
  return (
    <>
      <div className="cart-section">
        {isEmpty(new Cookie(cookies).getCart()) ? (
          <div
            style={{
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={"Chưa có sản phẩm"}
            >
              <Button type="primary">Thêm ngay</Button>
            </Empty>
          </div>
        ) : (
          <>
            <CartTable />
            <CartTotal />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
