import { Col, Row } from "antd";
import { FaBell } from "react-icons/fa";

import { StyleNotification } from "../style/styleProfile";

const Notification = () => {
  return (
    <Row gutter={[24, 0]} className="main">
      <Col span={14}>
        <h5 className="title">Thông báo</h5>
      </Col>
      <Col span={24}>
        <StyleNotification>
          <div className="image">
            <img src="https://picsum.photos/300/600" alt="" />
          </div>
          <div className="content">
            <div className="title">Khuyến mãi lớn giảm tới 30%</div>
            <p>Khuyễn mãi lớn dành cho khách hàng thân thiết của shop</p>
          </div>
          <FaBell />
        </StyleNotification>
        <StyleNotification>
          <div className="image">
            <img src="https://picsum.photos/300/600" alt="" />
          </div>
          <div className="content">
            <div className="title">Khuyến mãi lớn giảm tới 30%</div>
            <p>Khuyễn mãi lớn dành cho khách hàng thân thiết của shop</p>
          </div>
        </StyleNotification>
        <StyleNotification>
          <div className="image">
            <img src="https://picsum.photos/300/600" alt="" />
          </div>
          <div className="content">
            <div className="title">Khuyến mãi lớn giảm tới 30%</div>
            <p>Khuyễn mãi lớn dành cho khách hàng thân thiết của shop</p>
          </div>
        </StyleNotification>
        <StyleNotification>
          <div className="image">
            <img src="https://picsum.photos/300/600" alt="" />
          </div>
          <div className="content">
            <div className="title">Khuyến mãi lớn giảm tới 30%</div>
            <p>Khuyễn mãi lớn dành cho khách hàng thân thiết của shop</p>
          </div>
        </StyleNotification>
      </Col>
    </Row>
  );
};

export default Notification;
