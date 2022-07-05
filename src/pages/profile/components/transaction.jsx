import { Avatar, Col, Modal, Row } from "antd";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

import { StyleDetail } from "../style/styleProfile";

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
          <div className="code">Hình thức </div>
          <div className="date">Ngày nhận</div>
          <div className="total">Tổng tiền</div>
          <div className="show">Chi tiết</div>
        </div>

        <div className="purchased">
          <div className="code">Mn00235 </div>
          <div className="code">Online </div>
          <div className="date">11/9/2001</div>
          <div className="total">12.000.000 đ</div>
          <div className="show">
            <AiFillEye onClick={() => setModalVisible(true)} />
          </div>
          <Modal
            title="Chi tiết đơn hàng"
            width={600}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            bodyStyle={{ minHeight: 400 }}
            footer={false}
          >
            <StyleDetail>
              <div className="swapper">
                <div className="purchased ">
                  <div className="avartar">
                    <Avatar
                      shape="square"
                      size={80}
                      src="https://picsum.photos/300/600"
                    />
                  </div>
                  <div className="group">
                    <div className="name">laptop dell chạy rất là chậm </div>
                    <div className="quantity">x6</div>
                  </div>
                  <div className="price">32.000.000 vnd</div>
                </div>
                <div className="purchased ">
                  <div className="avartar">
                    <Avatar
                      shape="square"
                      size={80}
                      src="https://picsum.photos/300/600"
                    />
                  </div>
                  <div className="group">
                    <div className="name">laptop dell chạy rất là chậm </div>
                    <div className="quantity">x6</div>
                  </div>
                  <div className="price">32.000.000 vnd</div>
                </div>
                <div className="purchased ">
                  <div className="avartar">
                    <Avatar
                      shape="square"
                      size={80}
                      src="https://picsum.photos/300/600"
                    />
                  </div>
                  <div className="group">
                    <div className="name">laptop dell chạy rất là chậm </div>
                    <div className="quantity">x6</div>
                  </div>
                  <div className="price">32.000.000 vnd</div>
                </div>
                <div className="purchased ">
                  <div className="avartar">
                    <Avatar
                      shape="square"
                      size={80}
                      src="https://picsum.photos/300/600"
                    />
                  </div>
                  <div className="group">
                    <div className="name">laptop dell chạy rất là chậm </div>
                    <div className="quantity">x6</div>
                  </div>
                  <div className="price">32.000.000 vnd</div>
                </div>
                <div className="purchased ">
                  <div className="avartar">
                    <Avatar
                      shape="square"
                      size={80}
                      src="https://picsum.photos/300/600"
                    />
                  </div>
                  <div className="group">
                    <div className="name">laptop dell chạy rất là chậm </div>
                    <div className="quantity">x6</div>
                  </div>
                  <div className="price">32.000.000 vnd</div>
                </div>
              </div>
            </StyleDetail>
          </Modal>
        </div>
      </Col>
    </Row>
  );
};

export default Transaction;
