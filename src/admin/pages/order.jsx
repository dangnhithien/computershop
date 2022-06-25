import { Card, Col, DatePicker, Input, Radio, Row, Typography } from "antd";
import moment from "moment";
import { useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import "moment/locale/vi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ORDER from "../../api/order";
import Detail from "../components/detail/detailOrder";
import SpinCustom from "../components/loading/spinCustom";
import TableCustom from "../components/table/table";
const dateFormat = "YYYY-MM-DD";
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
const Custom = styled.div`
  display: flex;
  .custom {
    font-size: 16px;
    height: 40px;
    margin-left: 10px;
  }
  .ant-input {
    height: auto;
  }
  .ant-input-group-addon {
    background-color: #1890ff;
  }
`;

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(moment());
  const [modalVisible, setModalVisible] = useState(false);
  // const [data, setData] = useState();
  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "order",
      key: "order",
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
      title: "Khách hàng",
      key: "customerName",
      dataIndex: "customerName",

      render: (_, { customerName }) => {
        return (
          <>
            <p>{customerName}</p>
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
      render: (_, { total, id }) => {
        return (
          <div className="ant-employed">
            <p>{total}</p>

            <Link to="" onClick={() => setModalVisible(true)}>
              Chi tiết
            </Link>
            <Detail
              id={id}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </div>
        );
      },
    },
  ];
  // useEffect(() => {
  //   actionGetAllOrder({keyword:""});
  // }, []);

  function actionGetAllOrder(data) {
    setLoading(true);
    ORDER.search(data)
      .then((res) => {
        // setData(res.data.data);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
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

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={24} md={24} className="mb-24">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Đơn hàng"
              extra={
                <div>
                  <Custom>
                    <div style={{ width: 250, marginRight: 20 }}>
                      <Input
                        size="large"
                        prefix={<SearchOutlined />}
                        placeholder="Tìm kiếm..."
                        width={230}
                        onChange={(element) => {
                          actionGetAllOrder({
                            advancedSearch: {
                              fields: ["name", "code"],
                              keyword: element?.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div style={{ marginRight: 20 }}>
                      <DatePicker
                        placeholder="tất cả"
                        size="large"
                        onChange={(element) => {
                          actionGetAllOrder({
                            advancedSearch: {
                              fields: ["dateCreated"],
                              keyword: element.format("YY-MM-DD"),
                            },
                          });
                        }}
                      />
                    </div>
                    <div>
                      <Radio.Group
                        defaultValue={0}
                        onChange={(element) => {
                          actionGetAllOrder({
                            advancedSearch: {
                              fields: ["status"],
                              keyword: element?.target.value,
                            },
                          });
                        }}
                      >
                        <Radio.Button value={0}>Đơn mới</Radio.Button>
                        <Radio.Button value={1}>Đang giao</Radio.Button>
                        <Radio.Button value={2}>Hoàn thành</Radio.Button>
                      </Radio.Group>
                    </div>
                  </Custom>
                </div>
              }
              style={{ height: 820 }}
            >
              {loading ? (
                <SpinCustom />
              ) : (
                <TableCustom data={data} columns={columns} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Order;
