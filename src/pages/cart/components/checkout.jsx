import { Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";

import { CheckCircleFilled, PlusOutlined } from "@ant-design/icons";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import CUSTOMER from "api/customer";
import { Link } from "react-router-dom";
import useStoreUser from "store/personal";
import { PATH } from "utils/const";
import parseMoney from "../../../utils/parseMoney";
import { StyleCheckout } from "../style/style";
import Success from "./success";
const { Text } = Typography;
const Checkout = ({ total, setTotalPrice }) => {
  const [paymentLevel, setPaymentLevel] = useState(30);
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
    document.body.style.overflow = "hidden";
    return (document.body.style.overflow = "visible");
  }, [total]);
  useEffect(() => {
    // if (!userProfile.id) {
    //   return;
    // }

    CUSTOMER.search({ userId: userProfile.id })
      .then((res) => {
        setData(res.data.data.at(0));
      })
      .catch((error) => {});
  }, []);
  function handleTotal(percent) {
    setPaymentLevel(percent);
    setTotalPrice((total * percent) / 100);
  }
  return (
    <>
      {response && <Success details={response} />}
      <StyleCheckout>
        <div className="title">Địa chỉ nhận hàng</div>
        {data ? (
          <>
            <Text strong>{data.name + "-" + data.phoneNumber}</Text>
            <Text>
              <div className="address">
                {data.address.stayingAddress +
                  "," +
                  data.address.ward +
                  "," +
                  data.address.district +
                  "," +
                  data.address.city}
              </div>
            </Text>
            <Link to={PATH.PROFILE}>Thay đổi</Link>
          </>
        ) : (
          <>
            <span>Cần cập nhật đầy đủ thông tin trước khi thanh toán</span>
            <Link to={PATH.PROFILE}>Thêm thông tin</Link>
          </>
        )}
        {data?.address?.cityCode && (
          <>
            <div className="pay">
              <p className="note">
                <span style={{ fontWeight: 600 }}>Ghi chú:</span> Bạn bắt buộc
                phải thanh toán tối thiểu trước{" "}
                <span style={{ color: "#ff6a3c" }}>30%</span> giá trị đơn hàng
                trước cho chúng mình.🤑
              </p>
            </div>
            <div className="total">
              <Row>
                <Col span={24}>
                  <div
                    className={paymentLevel === 30 ? "active" : ""}
                    onClick={() => handleTotal(30)}
                  >
                    <span> Trả trước:</span>
                    &nbsp; 30% &nbsp;
                    {paymentLevel === 30 ? (
                      <CheckCircleFilled className="icon" />
                    ) : (
                      <PlusOutlined className="icon" />
                    )}
                  </div>
                </Col>
                <Col span={24} style={{ marginBottom: 12 }}>
                  <div
                    className={paymentLevel === 100 ? "active" : ""}
                    onClick={() => handleTotal(100)}
                  >
                    <span>Thanh toán toàn bộ:</span>
                    &nbsp; 100% &nbsp;
                    {paymentLevel === 100 ? (
                      <CheckCircleFilled className="icon" />
                    ) : (
                      <PlusOutlined className="icon" />
                    )}
                  </div>
                </Col>
                <Col span={24}>
                  <span span={8}>Tổng tiền hàng:</span>&nbsp;
                  <span>&#8363; {parseMoney(total)}</span>
                </Col>
                <Col span={24}>
                  <span>Phí vận chuyển:</span>&nbsp;
                  <span style={{ color: "#2ba068" }}>Free</span>
                </Col>
                <Col span={24}>
                  <span>Tổng thanh toán:</span>&nbsp;
                  <span className="total-pay">
                    &#8363; {parseMoney((total * paymentLevel) / 100)}
                  </span>
                </Col>
              </Row>
            </div>

            <PayPalScriptProvider
              options={{
                "client-id":
                  "ATmZyxJmHYMA1aq-oW_1NW-MYnVw2B14iHJigBLfKt5xYpOeiE9QlqvUtF73GBjayhBM_rSBbcfXG-Hz",
              }}
            >
              {/* {isPending ? <div className="spinner" /> : null} */}
              <PayPalButtons
                forceReRender={[total]}
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
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    setRes(details);
                  });
                }}
              />
            </PayPalScriptProvider>
          </>
        )}
      </StyleCheckout>
    </>
  );
};

export default Checkout;
