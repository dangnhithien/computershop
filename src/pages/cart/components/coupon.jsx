import { Avatar, Button, Col, Input, Modal, Row, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Typography } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleFilled,
  PlusCircleOutlined,
} from "@ant-design/icons";
import COUPONS from "api/coupons";
import SpinCustom from "components/spin/Spin";

const giftBox = [
  "https://static.vecteezy.com/system/resources/previews/004/745/256/non_2x/present-gift-box-with-ribbon-bows-flat-design-illustration-in-circle-icon-isometric-interface-elements-for-app-icon-ui-ux-banner-web-invitation-isolated-on-circle-shaped-background-free-vector.jpg",
  "https://www.uidownload.com/files/803/360/31/gift-box-design.jpg",
  "https://static.vecteezy.com/system/resources/previews/004/745/536/original/present-gift-box-with-ribbon-bows-flat-design-illustration-in-circle-icon-isometric-interface-elements-for-app-icon-ui-ux-banner-web-invitation-isolated-on-circle-shaped-background-free-vector.jpg",
];
const { Title, Text } = Typography;
const StyleCoupon = styled.div`
  padding: 10px;
  .wrapper-input {
    margin-bottom: 16px;
    input {
      border: none;
      background-color: #f1f1f1;
      text-transform: uppercase;
      color: black;
      letter-spacing: 1px;
      &::placeholder {
        color: #727070 !important;
        font-weight: 300;
        text-transform: unset !important;
      }
    }
  }
  .content {
    margin-top: 8px;
    max-height: 350px;
    padding-right: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .item {
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f1f1;
  }
  .icon {
    cursor: pointer;
    font-size: 25px;
    color: #ff9a3c;
  }
  .success {
    color: #007b55 !important;
  }
  .apply {
    border: 1px solid #f1f1f1;
    margin-bottom: 16px;
    margin-top: -8px;
    padding: 10px;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0, 1, 0, 0.99);
    .btn-apply {
      width: 100px;
      background-color: #02aa75;
      border: none;
      color: #fff;
      &:hover {
        background-color: #026d4b;
      }
    }
  }
`;
const Coupon = ({ setCouponApplied, modalVisible, setModalVisible }) => {
  const [loading, setLoading] = useState(false);
  const [couponId, setCouponId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(null);
  const timeoutRef = useRef(null);
  function handleCoupon(element) {
    if (element.id === couponId?.id) {
      setCouponId(null);
      setCouponApplied(null);
    } else setCouponId(element);
  }

  useEffect(() => {
    actionGetCoupons({ keyword: keyword });
  }, [keyword]);
  function actionGetCoupons(keyword) {
    setLoading(true);
    COUPONS.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  function handleApply() {
    setCouponApplied(couponId);
  }
  function handleSearch(keyword) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setKeyword(keyword);
    }, 500);
  }
  return (
    <>
      <Modal
        style={{ top: 20 }}
        width={510}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        className="modalStyle"
        bodyStyle={{ minHeight: 400 }}
        footer={false}
        destroyOnClose
      >
        <StyleCoupon>
          <div className="wrapper-input">
            <Input
              placeholder="Nhập mã giảm giá"
              onChange={(element) => handleSearch(element.target.value)}
            />
          </div>
          {couponId ? (
            <Row className="apply" align="middle" justify="space-around">
              <Col span={14}>
                <Text>Bạn đã chọn 1 ưu đãi</Text>
              </Col>
              <Col span={6}>
                <Button
                  className="btn-apply"
                  onClick={() => {
                    handleApply();
                    setModalVisible(false);
                  }}
                >
                  Áp dụng
                </Button>
              </Col>
            </Row>
          ) : (
            <></>
          )}
          {loading ? (
            <SpinCustom />
          ) : (
            <div className="content">
              <Row gutter={[8, 8]}>
                {data?.map((e, key) => {
                  return (
                    <Col key={key} span={24} className="item">
                      <Row gutter={[8, 8]} wrap={false} align="middle">
                        <Col>
                          <Avatar
                            shape="square"
                            src="https://www.uidownload.com/files/803/360/31/gift-box-design.jpg"
                            size={64}
                          />
                        </Col>
                        <Col>
                          <Row gutter={[0, 0]}>
                            <Col span={24}>
                              <Title
                                level={5}
                                ellipsis={{ rows: 1 }}
                                style={{ marginBottom: 0 }}
                              >
                                {e.name}
                              </Title>
                            </Col>
                            <Col span={24}>
                              <Text type="secondary">
                                Không giới hạn chi tiêu tối thiểu
                              </Text>
                            </Col>
                            <Col span={24}>
                              <Text type="warning">
                                <ClockCircleFilled /> 1 giờ
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          {e.id === couponId?.id ? (
                            <CheckCircleOutlined
                              className="icon success"
                              onClick={() => handleCoupon(e)}
                            />
                          ) : (
                            <PlusCircleOutlined
                              className="icon "
                              onClick={() => handleCoupon(e)}
                            />
                          )}
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </StyleCoupon>
      </Modal>
    </>
  );
};

export default Coupon;
