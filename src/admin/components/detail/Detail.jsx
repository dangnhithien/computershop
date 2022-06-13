import { Col, Modal, Row, Table, Typography } from "antd";
import React from "react";
import styled from "styled-components";
const { Title } = Typography;
const TitleModal = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const Group = styled.div`
  padding: 5px;
  .lable {
    display: inline-block;
    margin-right: 10px;
    color: #8c8c8c;
    font-weight: 700;
    background-color: transparent;
    font-size: 14px;
  }
  .content {
    font-size: 16px;
    font-weight: 600;
    color: #464646;
    margin-bottom: 0px;
  }
  .status {
    color: red;
  }
  .total-price {
    color: #39d345;
  }
`;
const columns = [
  {
    title: "Mã sản phẩm",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Sên sản phẩm",
    key: "address",
    dataIndex: "address",
    width: "30%",
  },
  {
    title: "Số lượng",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Giá bán",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Tổng tiền",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <p>SP1</p>
      </>
    ),

    address: (
      <>
        <p>Laptop dell</p>
      </>
    ),
    phone: (
      <>
        <p>3</p>
      </>
    ),
    email: (
      <>
        <p>12tr</p>
      </>
    ),
    employed: (
      <>
        <p>36tr</p>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABCr</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "7",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "8",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "9",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "10",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];
const Detail = ({ modalVisible, setModalVisible }) => {
  return (
    <>
      <Modal
        title={
          <TitleModal>
            <span>Mã đơn: </span>
            <span>MN02</span>
          </TitleModal>
        }
        style={{
          top: 20,
        }}
        width={1000}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        bodyStyle={{ minHeight: "550px" }}
        footer={false}
      >
        <div>
          <Row gutter={[24, 0]}>
            <Col span={24} md={16} className="mb-24">
              <Group>
                <span className="lable">Khách hàng:</span>
                <span className="content">Đặng Nhị Thiên</span>
              </Group>
              <Group>
                <span className="lable">Ngày đặt:</span>
                <span className="content">11/6/2022</span>
              </Group>
              <Group>
                <span className="lable">Địa chỉ:</span>
                <span className="content">Q12,tp HCM</span>
              </Group>
              <Group>
                <span className="lable">Trạng thái:</span>
                <span className="content status">Đang giao</span>
              </Group>
            </Col>
            <Col span={24} md={8} className="mb-24">
              <Group>
                <span className="lable">Tổng tiền hàng:</span>
                <span className="content">12000000</span>
              </Group>
              <Group>
                <span className="lable">Phí vận chuyển:</span>
                <span className="content">12000</span>
              </Group>
              <Group>
                <span className="lable">Giảm giá:</span>
                <span className="content">12000</span>
              </Group>
              <Group>
                <span className="lable">Thành tiền:</span>
                <span className="content total-price">12000000</span>
              </Group>
            </Col>
          </Row>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{
              y: 280,
            }}
            className="ant-border-space"
          />
        </div>
      </Modal>
    </>
  );
};

export default Detail;
