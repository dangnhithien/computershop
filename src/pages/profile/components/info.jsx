import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Upload } from "antd";
import React from "react";

const Info = () => {
  return (
    <Row gutter={[24, 0]} className="main">
      <Col span={14}>
        <h5 className="title">Hồ sơ của tôi</h5>
        <div className="group">
          <div className="label">Tên</div>
          <div className="content">
            <Input placeholder="Basic usage" className="border-white" />
          </div>
        </div>
        <div className="group">
          <div className="label">Emaiil</div>
          <div className="content">
            <Input placeholder="Basic usage" className="border-white" />
          </div>
        </div>

        <div className="group">
          <div className="label">Địa chỉ</div>
          <div className="content">
            <Input placeholder="Basic usage" className="border-white" />
          </div>
        </div>
        <div className="group">
          <div className="label">Số điện thoại</div>
          <div className="content">
            <Input placeholder="Basic usage" className="border-white" />
          </div>
        </div>
        <div className="groun">
          <Button className="btn-save">Lưu</Button>
        </div>
      </Col>
      <Col
        span={8}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row
          gutter={[24, 0]}
          style={{
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Col>
            <div className="image">
              <img src="https://picsum.photos/200/300?random=1" alt="" />
            </div>
          </Col>

          <Col className="upload-img">
            <Upload>
              <Button icon={<UploadOutlined />}>Chọn hình</Button>
            </Upload>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Info;
