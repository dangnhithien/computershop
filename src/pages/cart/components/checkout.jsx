import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { IoLogoPaypal } from "react-icons/io5";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import parseMoney from "../../../utils/parseMoney";
import { StyleCheckout } from "../style/style";

const Checkout = ({ products, promotionId }) => {
  const [buttonPayal, setButonPaypal] = useState(false);
  const [responsive, setRes] = useState("d");
  console.log(responsive);
  return (
    <StyleCheckout>
      <div className="title">Địa chỉ nhận hàng</div>
      <div className="name">Đặng Nhị Thiên (+84) 326834079</div>
      <div className="wrapper">
        <div className="address">
          134/8 Tch 18, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh
        </div>
      </div>
      <div className="choose-address">Thay đổi</div>
      <div className="pay">
        <h6>Phương thức thanh toán</h6>
        <Row>
          <Col>
            <div
              className={buttonPayal ? "box " : "box active"}
              onClick={() => setButonPaypal(false)}
            >
              Tiền mặt
            </div>
          </Col>
          <Col>
            <div
              className={buttonPayal ? "box active" : "box"}
              onClick={() => setButonPaypal(true)}
            >
              <IoLogoPaypal />
            </div>
          </Col>
        </Row>
      </div>
      <div className="total">
        <Row gutter={[24, 0]}>
          <Col>Tổng tiền hàng</Col>
          <Col>{parseMoney(24000000)}vnđ</Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col>Phí vận chuyển</Col>
          <Col>{parseMoney(24000000)}vnđ</Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col>Tổng thanh toán</Col>
          <Col className="total-pay">{parseMoney(24000000)}vnđ</Col>
        </Row>
      </div>
      {buttonPayal ? (
        <PayPalScriptProvider
          options={{
            "client-id":
              "ATmZyxJmHYMA1aq-oW_1NW-MYnVw2B14iHJigBLfKt5xYpOeiE9QlqvUtF73GBjayhBM_rSBbcfXG-Hz",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.99",
                    },
                  },
                ],
              });
            }}
            onApprove={(datas, actions) => {
              return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                setRes(details);
                alert(`Transaction completed by ${name}`);
              });
            }}
          />
        </PayPalScriptProvider>
      ) : (
        <Button type="primary" className="btn-checkout">
          Đặt Hàng
        </Button>
      )}
    </StyleCheckout>
  );
};

export default Checkout;
