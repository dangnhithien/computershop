import { Avatar, Col, Input, Modal, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { supplier, categories, product } from "./seed";
import { Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const StyleCoupon = styled.div`
  padding: 10px;
  .wrapper-input {
    input {
      border: none;
      background-color: #f1f1f1;
      &::placeholder {
        color: #333333 !important;
        font-weight: 300;
      }
    }
  }
  .content {
    margin-top: 8px;
  }
  .item {
    border: 1px solid #f1f1f1;
  }
`;
const Test = () => {
  return (
    <>
      <Modal
        // style={{ marginTop: 50 }}
        width={500}
        visible={true}
        // onCancel={() => setModalVisible(false)}
        bodyStyle={{ minHeight: 400 }}
        footer={false}
      >
        <StyleCoupon>
          <div className="wrapper-input">
            <Input placeholder="Nhập mã giảm giá" />
          </div>
          <div className="content">
            <Row gutter={[8, 8]}>
              <Col span={24} className="item">
                <Row gutter={[8, 8]} wrap={false}>
                  <Col>
                    <Avatar shape="square" size={64} />
                  </Col>
                  <Col>
                    <Row gutter={[0, 0]}>
                      <Col span={24}>
                        <Text level={5} ellipsis={{ rows: 1 }}>
                          Khuyến mãi lớn ngày cuối tuần
                        </Text>
                      </Col>
                      <Col span={24}>
                        <Text type="secondary">
                          không giới hạn chi tiêu tối thiểu
                        </Text>
                      </Col>
                      <Col span={24}>
                        <Text type="warning">
                          <ClockCircleOutlined /> 1 giờ
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </StyleCoupon>
      </Modal>
    </>
  );
};

export default Test;
