import { Row, Col, Card, Table, Typography, Radio, Select, Modal } from "antd";
import { Badge, Calendar } from "antd";
import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Detail from "../components/detail/Detail";
import Profile from "../components/profile/profile";

const { Option } = Select;

const { Title } = Typography;
const TextAlign = styled.div`
  .table-responsive table tbody tr td {
    text-align: left !important;
  }
  .ant-table-pagination-right {
    justify-content: center !important;
  }
`;
const CalendarStyle = styled.div`
  .ant-select-selector {
    height: 40px !important;
  }
  .ant-select-selection-item {
    line-height: 40px !important;
  }
`;
// table code start
const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "order",
    key: "order",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    // filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.address.startsWith(value),
    width: "5%",
  },
  {
    title: "Tên khách hàng",
    key: "customer",
    dataIndex: "customer",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    // filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.address.startsWith(value),
    width: "20%",
  },
  {
    title: "Ngày đặt",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Tổng tiền",
    key: "employed",
    dataIndex: "employed",
    width: "50%",
  },
];

const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "4",
        },
        {
          type: "success",
          content: "3",
        },
      ];
      break;

    case 10:
      listData = [
        {
          type: "warning",
          content: "3",
        },
        {
          type: "success",
          content: "6",
        },
        {
          type: "error",
          content: "9",
        },
      ];
      break;

    case 15:
      listData = [
        {
          type: "warning",
          content: "5",
        },
        {
          type: "success",
          content: "8",
        },
      ];
      break;

    default:
  }

  return listData || [];
};

const Order = () => {
  const [value, setValue] = useState(moment());
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {
      key: "1",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>m456</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>Đặng Nhị Thiên</p>
        </>
      ),
      date: (
        <>
          <p>22/6/2022</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>12.000.000</p>

            <Link to="" onClick={() => setModalVisible(true)}>
              Chi tiết
            </Link>
            <Detail
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </div>
        </>
      ),
    },

    {
      key: "2",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },

    {
      key: "3",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>1200000000</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
    {
      key: "4",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
    {
      key: "5",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },

    {
      key: "6",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
    {
      key: "7",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
    {
      key: "8",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
    {
      key: "9",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
    {
      key: "10",
      order: (
        <>
          <div className="avatar-info">
            <Title level={5}>NM21</Title>
          </div>
        </>
      ),

      customer: (
        <>
          <p>q12,tp HCM</p>
        </>
      ),
      date: (
        <>
          <p>08888888888</p>
        </>
      ),
      status: (
        <>
          <p>Đang giao</p>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <p>0</p>
            <a href="#pablo">Chi tiết</a>
          </div>
        </>
      ),
    },
  ];
  const onSelect = (newValue) => {
    setValue(newValue);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={24} md={16} className="mb-24">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Đơn hàng"
              extra={
                <>
                  <Radio.Group defaultValue="all">
                    <Radio.Button value="all">Đơn mới</Radio.Button>
                    <Radio.Button value="online">Đang giao</Radio.Button>
                    <Radio.Button value="store">Hoàn thành</Radio.Button>
                  </Radio.Group>
                </>
              }
              style={{ height: 820 }}
            >
              <TextAlign>
                <div className="table-responsive pb-5">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 6 }}
                    scroll={false}
                    className="ant-border-space"
                  />
                </div>
              </TextAlign>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              style={{ height: 820 }}
            >
              <CalendarStyle>
                <div className="site-calendar-demo-card p-5">
                  <Calendar
                    dateCellRender={dateCellRender}
                    value={value}
                    onSelect={onSelect}
                  />
                </div>
              </CalendarStyle>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Order;
