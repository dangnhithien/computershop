import { Card, Avatar, Radio, Tooltip } from "antd";

import BgProfile from "../../assets/images/bg-profile.jpg";
import profilavatar from "../../assets/images/face-1.jpg";

import { Col, Modal, Row, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineCreditScore } from "react-icons/md";
import USER from "../../../api/user";

const { Title } = Typography;
const BoxIcon = styled.div`
  min-width: 50px;
  height: 50px;
  margin-right: 40px;
  font-weight: 600;
  .icon {
    min-width: 40px;
    min-height: 40px;
    margin-right: 5px;
  }
  .color-yellow {
    color: #40a9ff;
  }
  .color-red {
    color: #f3a657;
  }
  .color-green {
    color: #2ccf5e;
  }
`;
const Group = styled.div`
  margin-bottom: 10px;
  .label {
    display: inline-block;
    margin-right: 10px;
    color: #8c8c8c;
    font-weight: 600;
    background-color: transparent;
    font-size: 16px;
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
const TooltipColor = {
  blue: "blue",
};
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
const Profile = ({ modalVisible, setModalVisible, id }) => {
  const [tabVisible, setTabVisible] = useState("info");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    actionGetSingleUser(id);
  }, []);

  function actionGetSingleUser(id) {
    setLoading(true);
    USER.getSingleUser({ id: id })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((res) => {
        setLoading(false);
      });
  }

  function handleVisible({ target: { value } }) {
    setTabVisible(value);
  }
  const tabInfo = (
    <div style={{ paddingLeft: 12 }}>
      <Row gutter={[24, 0]}>
        <Col span={4}></Col>
        <Col span={8} className="mb-24">
          <Tooltip title="Số lần giao dịch" color={TooltipColor.blue}>
            <BoxIcon>
              <AiOutlineTransaction className="icon color-yellow" />

              <span className="content">120</span>
            </BoxIcon>
          </Tooltip>
          <Tooltip title="số tiền đã mua" color={TooltipColor.blue}>
            <BoxIcon>
              <GiPayMoney className="icon color-red" />

              <span className="content">1200000 đ</span>
            </BoxIcon>
          </Tooltip>
        </Col>

        <Col span={8} className="mb-24">
          <Group>
            <span className="label">Họ tên:</span>
            <span className="content">
              {data.firstName + " " + data.lastName}
            </span>
          </Group>
          <Group>
            <span className="label">Ngày sinh:</span>
            <span className="content">{data.dob}</span>
          </Group>
          <Group>
            <span className="label">Giới tính:</span>
            <span className="content">{data.gender}</span>
          </Group>
          <Group>
            <span className="label">Trạng thái:</span>
            <span className="content">
              {data.isActive ? "Hoạt động" : "Đã khóa"}
            </span>
          </Group>
          <Group>
            <span className="label">Số điện thoại:</span>
            <span className="content">{data.phoneNumber}</span>
          </Group>
          <Group>
            <span className="label">Email:</span>
            <span className="content ">{data.email}</span>
          </Group>
          <Group>
            <span className="label">Địa chỉ:</span>
            <span className="content">{data.address}</span>
          </Group>
        </Col>
      </Row>
    </div>
  );
  const tabTran = (
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
  );
  const tabOrder = <div>order</div>;
  function display() {
    if (tabVisible === "info") {
      return tabInfo;
    } else if (tabVisible === "tran") {
      return tabTran;
    } else if (tabVisible === "order") {
      return tabOrder;
    } else {
      return <>error</>;
    }
  }
  return (
    <>
      <Modal
        style={{
          top: 20,
        }}
        width={800}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        bodyStyle={{ height: 650 }}
        footer={false}
      >
        <div
          className="profile-nav-bg"
          style={{
            backgroundImage: "url(" + BgProfile + ")",
            height: 150,
            marginTop: "25px",
          }}
        ></div>

        <Card
          className="card-profile-head"
          bodyStyle={{ display: "none" }}
          title={
            <Row justify="space-between" align="middle" gutter={[24, 0]}>
              <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                  <Avatar size={74} shape="square" src={data.imageUrl} />

                  <div className="avatar-info">
                    <h4 className="font-semibold m-0">
                      {data.firstName + " " + data.lastName}
                    </h4>
                    <p>{data.email}</p>
                  </div>
                </Avatar.Group>
              </Col>
              <Col
                span={24}
                md={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Radio.Group value={tabVisible} onChange={handleVisible}>
                  <Radio.Button value="info">Thông tin</Radio.Button>
                  <Radio.Button value="tran">Giao dịch</Radio.Button>
                  <Radio.Button value="order">Đơn hàng</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          }
        ></Card>

        {display()}
      </Modal>
    </>
  );
};

export default Profile;
