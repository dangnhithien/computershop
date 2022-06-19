import { Badge, Calendar, Card, Col, Radio, Row, Typography } from "antd";
import moment from "moment";
import { useState } from "react";

import "moment/locale/vi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Detail from "../components/detail/Detail";
import TableCustom from "../components/table/table";

moment.locale("vi_VN");

const { Title } = Typography;

const CalendarStyle = styled.div`
  .ant-select-selector {
    height: 40px !important;
  }
  .ant-select-selection-item {
    line-height: 40px !important;
  }
  .ant-picker-calendar-header .ant-picker-calendar-mode-switch {
    display: none;
  }
`;
// table code start

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
  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "order",
      key: "order",
      filters: [
        {
          text: "m456",
          value: "M456",
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
      onFilter: (value) => console.log(value, "dd"),
      render: (_, { order }) => {
        return (
          <>
            <div className="avatar-info">
              <Title level={5}>{order}</Title>
            </div>
          </>
        );
      },
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
      filterSearch: (value) => console.log(value, "dd"),
      onFilter: (value, record) => record.address.startsWith(value),
      render: (_, { customer }) => {
        return (
          <>
            <p>{customer}</p>
          </>
        );
      },
      width: "20%",
    },
    {
      title: "Ngày đặt",
      key: "date",
      dataIndex: "date",
      render: (_, { date }) => {
        return (
          <>
            <p>{date}</p>
          </>
        );
      },
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        return (
          <>
            <p>{status}</p>
          </>
        );
      },
    },
    {
      title: "Tổng tiền",
      key: "total",
      dataIndex: "total",
      width: "50%",
      render: (_, { total }) => {
        return (
          <div className="ant-employed">
            <p>{total}</p>

            <Link to="" onClick={() => setModalVisible(true)}>
              Chi tiết
            </Link>
            <Detail
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      order: "m456",

      customer: "đặng nhị thiên",
      date: "20/05/2022",
      status: "đang giao",
      total: "1200000 vnđ",
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
          <Col span={24} md={17} className="mb-24">
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
              <TableCustom data={data} columns={columns} />
            </Card>
          </Col>
          <Col span={24} md={7} className="mb-24">
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
                    locale={{ lang: { locale: "vi" } }}
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
