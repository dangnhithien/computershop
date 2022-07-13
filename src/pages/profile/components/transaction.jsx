import { Avatar, Col, Modal, Row } from "antd";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

import { StyleDetail } from "../style/styleProfile";
import { Typography } from "antd";
const { Title, Text } = Typography;
const Transaction = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Row gutter={[24, 0]} className="main">
      <Col span={14}>
        <h5 className="title">Lịch sử giao dịch</h5>
      </Col>
      <Col span={24} className="containers">
        <div className="purchased disable">
          <div className="code">Mã đơn hàng </div>
          <div className="code">Trạng thái </div>
          <div className="date">Ngày đặt</div>
          <div className="total">Tổng tiền</div>
          <div className="show">Chi tiết</div>
        </div>

        <div className="purchased">
          <div className="code">Mn00235 </div>
          <div className="code">Chờ xác nhận</div>
          <div className="date">11/9/2021</div>
          <div className="total">12.000.000&nbsp;vnđ</div>
          <div className="show">
            <AiFillEye onClick={() => setModalVisible(true)} />
          </div>
          <Modal
            title={
              <Title level={5} style={{ margin: 0 }}>
                Chi tiết đơn hàng
              </Title>
            }
            style={{ top: 20 }}
            width={1000}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            bodyStyle={{ minHeight: 400 }}
            className="modalStyle"
            footer={false}
          >
            <StyleDetail>
              <Row gutter={[4, 4]}>
                <Col span={12}>
                  <Title level={5} underline>
                    Thông tin đơn hàng
                  </Title>
                  <Row gutter={[4, 4]}>
                    <Col span={24}>
                      <Text strong>Mã đơn hàng:&nbsp;</Text>
                      <Text type="italic">MN123</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Trạng thái:&nbsp;</Text>
                      <Text type="success">Chờ xác nhận</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Số điện thoại:&nbsp;</Text>
                      <Text type="italic">0326863079</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Địa chỉ:&nbsp;</Text>
                      <Text type="italic">
                        134/8,tân chánh hiệp, q12, tp hồ chí minh
                      </Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Thanh toán:&nbsp;</Text>
                      <Text type="italic">30%</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Ngày đặt:&nbsp;</Text>
                      <Text type="italic">11/12/2021</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Ghi chú:&nbsp;</Text>
                      <Text type="italic">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est aliquam libero cum quos facere tenetur enim
                        laborum, et reiciendis rerum distinctio perferendis
                        suscipit magni nulla numquam recusandae sunt atque
                        alias.
                      </Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Tổng thanh toán:&nbsp;</Text>
                      <Text type="italic">100.000.000&nbsp;vnđ</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Đã thanh toán:&nbsp;</Text>
                      <Text type="italic">30.000.000&nbsp;vnđ</Text>
                    </Col>
                    <Col span={24}>
                      <Text strong>Chờ thanh toán:&nbsp;</Text>
                      <Text type="danger">70.000.000&nbsp;vnđ</Text>
                    </Col>
                  </Row>
                </Col>

                <Col span={12}>
                  <Title level={5} underline>
                    Sản phẩm
                  </Title>
                  <div className="wapper">
                    <Row gutter={[4, 4]}>
                      <Col span={24} className="item">
                        <Row gutter={[8, 8]} wrap={false} align="middle">
                          <Col>
                            <Avatar
                              shape="square"
                              src="https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png"
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
                                  laptop dell chạy rất là chậm
                                </Title>
                              </Col>
                              <Col span={24}>
                                <Text type="secondary">
                                  Giá: 25.000.000 vnđ
                                </Text>
                              </Col>
                              <Col span={24}>
                                <Text type="warning">x6</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={8}>
                            <Text>Tổng: 25.000.000 vnđ</Text>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24} className="item">
                        <Row gutter={[8, 8]} wrap={false} align="middle">
                          <Col>
                            <Avatar
                              shape="square"
                              src="https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png"
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
                                  laptop dell chạy rất là chậm
                                </Title>
                              </Col>
                              <Col span={24}>
                                <Text type="secondary">
                                  Giá: 25.000.000 vnđ
                                </Text>
                              </Col>
                              <Col span={24}>
                                <Text type="warning">x6</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={8}>
                            <Text>Tổng: 25.000.000 vnđ</Text>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24} className="item">
                        <Row gutter={[8, 8]} wrap={false} align="middle">
                          <Col>
                            <Avatar
                              shape="square"
                              src="https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png"
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
                                  laptop dell chạy rất là chậm
                                </Title>
                              </Col>
                              <Col span={24}>
                                <Text type="secondary">
                                  Giá: 25.000.000 vnđ
                                </Text>
                              </Col>
                              <Col span={24}>
                                <Text type="warning">x6</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={8}>
                            <Text>Tổng: 25.000.000 vnđ</Text>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24} className="item">
                        <Row gutter={[8, 8]} wrap={false} align="middle">
                          <Col>
                            <Avatar
                              shape="square"
                              src="https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png"
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
                                  laptop dell chạy rất là chậm
                                </Title>
                              </Col>
                              <Col span={24}>
                                <Text type="secondary">
                                  Giá: 25.000.000 vnđ
                                </Text>
                              </Col>
                              <Col span={24}>
                                <Text type="warning">x6</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={8}>
                            <Text>Tổng: 25.000.000 vnđ</Text>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </StyleDetail>
          </Modal>
        </div>
      </Col>
    </Row>
  );
};

export default Transaction;
