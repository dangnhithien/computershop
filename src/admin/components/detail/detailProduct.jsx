import { Col, Modal, Row, Typography, Tag, Rate, Avatar } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  font-size: 16px;
  .ant-row.row-single {
    padding: 10px;
    align-items: center;
  }
  .row-single-padding {
    padding: 10px;
  }

  .label {
    font-weight: 600;
    color: black;
  }
  .status {
    width: 65px;

    text-align: center;
    color: #078bfd;

    border: 1px solid;
  }
  .name {
    font-size: 20px;
  }
  .image {
    padding: 8px;
    margin: 5px;
    width: 104px;
    height: 104px;
    border: 1px solid #f1f1f1;
    float: left;
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

const DetailProduct = ({ modalVisible, setModalVisible }) => {
  const data = { ...modalVisible.data };

  return (
    <Modal
      title={<div>{data.id}</div>}
      style={{
        top: 20,
      }}
      width={800}
      visible={modalVisible.visible}
      onOk={() => setModalVisible({ ...modalVisible, visible: false })}
      onCancel={() => setModalVisible({ ...modalVisible, visible: false })}
      bodyStyle={{ minHeight: 750 }}
      footer={false}
    >
      <Container>
        <Row gutter={[24, 0]} className="row-single-padding">
          <Col span={5}>
            <div className="label ">Tên sản phẩm</div>
          </Col>
          <Col span={19}>
            <div className="name">{data.name}</div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single">
          <Col>
            <div className="label">Trạng thái</div>
          </Col>
          <Col>
            <div className="status">{data.status}</div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single">
          <Col>
            <div className="label">Loại sản phẩm</div>
          </Col>
          <Col>
            <div className="category">
              <Tag color="#f50">Máy tính</Tag> <Tag color="#f50">Máy tính</Tag>
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single">
          <Col>
            <div className="label">Nhãn hàng</div>
          </Col>
          <Col>
            <div className="content">{data.supplierName}</div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single">
          <Col>
            <div className="label">Ngày tạo</div>
          </Col>
          <Col>
            <div className="content">{data.createdDate}</div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single">
          <Col>
            <div className="label">Tổng số / Đã bán /Còn lại </div>
          </Col>
          <Col>
            <div className="content">1000 / 999 / 1</div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single ">
          <Col>
            <div className="label">Đánh giá</div>
          </Col>
          <Col>
            <div className="content">
              <Rate allowHalf defaultValue={2.5} />{" "}
              <span>2.5/5 &nbsp; & 14k (đánh giá)</span>
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="row-single-padding">
          <Col span={4}>
            <div className="label">Mô tả</div>
          </Col>
          <Col span={20}>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              culpa dolorum consectetur, unde exercitationem obcaecati esse
              repellendus, repudiandae eum commodi, sapiente ipsum facilis enim
              porro atque error accusantium cum natus?
            </div>
          </Col>
        </Row>

        <Row gutter={[24, 0]} className="row-single-padding">
          <Col span={4}>
            <div className="label">Hình ảnh</div>
          </Col>
          <Col span={20}>
            <div className="image">
              <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/qxwpth-zl/2022_04_28/photo-5-1651052896669631605443-3089.jpg" />
            </div>
            <div className="image">
              <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/qxwpth-zl/2022_04_28/photo-5-1651052896669631605443-3089.jpg" />
            </div>
            <div className="image">
              <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/qxwpth-zl/2022_04_28/photo-5-1651052896669631605443-3089.jpg" />
            </div>
            <div className="image">
              <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/qxwpth-zl/2022_04_28/photo-5-1651052896669631605443-3089.jpg" />
            </div>
            <div className="image">
              <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/qxwpth-zl/2022_04_28/photo-5-1651052896669631605443-3089.jpg" />
            </div>
            <div className="image">
              <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/qxwpth-zl/2022_04_28/photo-5-1651052896669631605443-3089.jpg" />
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default DetailProduct;
