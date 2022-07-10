import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { IoLogoPaypal } from "react-icons/io5";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import parseMoney from "../../../utils/parseMoney";
import { StyleCheckout } from "../style/style";
import Success from "./success";
import useStoreUser from "store/personal";
import { PATH } from "utils/const";
import CUSTOMER from "api/customer";
import { Link } from "react-router-dom";

const Checkout = ({ total }) => {
  const [buttonPayal, setButonPaypal] = useState(false);
  const [response, setRes] = useState(false);
  const [data, setData] = useState(null);
  const [usd, setUsd] = useState(23);
  const userProfile = useStoreUser((state) => state.profile);
  // const { city, district, ward, stayingAddress } = data?.address;
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((res) => {
        setUsd(res.rates["VND"]);
      });
  }, []);
  useEffect(() => {
    // if (!userProfile.id) {
    //   return;
    // }

    CUSTOMER.search({ userId: userProfile.id })
      .then((res) => {
        console.log(res);
        setData(res.data.data.at(3));
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      {response && <Success details={response} />}
      <StyleCheckout>
        <div className="title">Địa chỉ nhận hàng</div>
        {data ? (
          <>
            <div className="name">{data.name + " " + data.phoneNumber}</div>
            <div className="wrapper">
              <div className="address">
                {data.address.stayingAddress +
                  "," +
                  data.address.ward +
                  "," +
                  data.address.district +
                  "," +
                  data.address.city}
              </div>
            </div>
            <div className="choose-address">Thay đổi</div>
          </>
        ) : (
          <>
            <span>Cần cập nhật đầy đủ thông tin trước khi thanh toán</span>
            <Link to={PATH.PROFILE}>Thêm thông tin</Link>
          </>
        )}
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
            <Col>{parseMoney(total)}vnđ</Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col>Phí vận chuyển</Col>
            <Col>{parseMoney(0)}vnđ</Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col>Tổng thanh toán</Col>
            <Col className="total-pay">{parseMoney(total)}vnđ</Col>
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
                        value: (total / usd).toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={(datas, actions) => {
                return actions.order.capture().then((details) => {
                  setRes(details);
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
    </>
  );
};

export default Checkout;
