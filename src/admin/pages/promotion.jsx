import {
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  notification,
  Row,
  Select,
} from "antd";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";

import { DatePicker } from "antd";
import { useEffect } from "react";
import styled from "styled-components";
import COUPONS from "../../api/coupons";
import SpinCustom from "../components/loading/spinCustom";
import TableCustom from "../components/table/table";
const { RangePicker } = DatePicker;
const { Option } = Select;

const Group = styled.div`
  /* margin-bottom: 20px; */
  padding: 5px;
  h6 {
    font-weight: bold;
    width: 150px;
  }
  .btn-save {
    height: 30px;
    font-size: 16px;
  }
  .row-custom {
    flex-direction: row;
    align-items: center;
  }
`;
// table code start

const Promotion = () => {
  const [md, setMd] = useState(24);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const newCoupon = useRef({
    name: "string",
    type: 0,
    amount: 0,
    timeBegin: "2022-06-20T15:05:30.610Z",
    timeEnd: "2022-06-20T15:05:30.610Z",
    quantity: 0,
  });
  useEffect(() => {
    actionGetAllCoupons({ keyword: "" });
  }, []);
  function actionGetAllCoupons(keyword) {
    setLoading(true);
    COUPONS.search(keyword)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  function actionCreateCoupon() {
    setLoading(true);
    COUPONS.post(newCoupon)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  const columns = [
    {
      title: "Mã giảm giá",
      dataIndex: "name",
      key: "name",

      render: (_, { name }) => {
        return (
          <>
            <div>{name}</div>
          </>
        );
      },
      width: "20%",
    },
    {
      title: "Loại",
      key: "type",
      dataIndex: "type",
      render: (_, { type }) => {
        return (
          <>
            <p>{type}</p>
          </>
        );
      },
    },
    {
      title: "Giảm",
      key: "amount",
      dataIndex: "amount",
      render: (_, { amount }) => {
        return (
          <>
            <p>{amount}</p>
          </>
        );
      },
    },
    {
      title: "Bắt đầu",
      key: "timeBegin",
      dataIndex: "timeBegin",
      render: (_, { timeBegin }) => {
        return (
          <>
            <p>{timeBegin}</p>
          </>
        );
      },
    },
    {
      title: "Kết thúc",
      key: "timeEnd",
      dataIndex: "timeEnd",
      render: (_, { timeEnd }) => {
        return (
          <>
            <p>{timeEnd}</p>
          </>
        );
      },
    },
    {
      title: "Số lượng",
      key: "quantity",
      dataIndex: "quantity",
      render: (_, { quantity }) => {
        return (
          <>
            <p>{quantity}</p>
          </>
        );
      },
    },
    {
      title: "",
      key: "employed",
      render: (_, { id }) => {
        return (
          <>
            <div className="ant-employed">
              <Button type="link" className="darkbtn" style={{ fontSize: 25 }}>
                <MdOutlineModeEditOutline />
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  function changeMd() {
    if (md == 16) {
      setMd(24);
      return;
    }
    setMd(16);
  }
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={24} md={md} className="mb-24">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Giảm giá"
              style={{ height: 520 }}
              extra={
                md == 24
                  ? [
                      <Button
                        className="custom"
                        onClick={changeMd}
                        style={{ fontSize: 16, border: "none" }}
                      >
                        Thêm
                        <MdDoubleArrow />
                      </Button>,
                    ]
                  : ""
              }
            >
              {loading ? (
                <SpinCustom />
              ) : (
                <TableCustom columns={columns} data={data} />
              )}
            </Card>
          </Col>
          {md === 16 ? (
            <Col span={24} md={8} className="mb-24" style={{ height: 520 }}>
              <Card
                bordered={false}
                bodyStyle={{ paddingTop: 0 }}
                className="header-solid h-full  ant-list-yes"
                title={
                  <h5 className="font-semibold m-0">Thêm loại sản phẩm</h5>
                }
                extra={[
                  <div
                    className="custom"
                    onClick={changeMd}
                    style={{ fontSize: 18, border: "none", cursor: "pointer" }}
                  >
                    <FaTimes />
                  </div>,
                ]}
              >
                <Row gutter={[24, 0]}>
                  <Col xs="24" xl={24}>
                    <Group>
                      <div className="row-custom">
                        <h6>Tên </h6>
                        <Input
                          showCount
                          maxLength={256}
                          size="middle"
                          onChange={(element) => {
                            newCoupon.current.name = element?.target.value;
                          }}
                        />
                      </div>
                    </Group>
                    <Group>
                      <div className="row-custom">
                        <h6>loại</h6>
                        <Select
                          defaultValue={1}
                          style={{ width: 120 }}
                          onChange={(value) => {
                            newCoupon.current.type = value;
                          }}
                        >
                          <Option value={1}>Loại 1</Option>
                          <Option value={2}>Loại 2</Option>
                          <Option value={3}>Loại 3</Option>
                        </Select>
                      </div>
                    </Group>
                    <Group>
                      <div className="row-custom">
                        <h6>Giảm</h6>
                        <InputNumber
                          min={1}
                          max={100}
                          defaultValue={3}
                          style={{ width: 120 }}
                          onChange={(value) =>
                            (newCoupon.current.amount = parseInt(value))
                          }
                        />
                      </div>
                    </Group>
                    <Group>
                      <div className="row-custom">
                        <h6>Số lượng</h6>
                        <InputNumber
                          min={1}
                          max={10}
                          style={{ width: 120 }}
                          onChange={(value) =>
                            (newCoupon.current.quantity = parseInt(value))
                          }
                        />
                      </div>
                    </Group>
                    <Group>
                      <div className="row-custom">
                        <h6>Thời gian</h6>
                        <RangePicker
                          showTime
                          size="large"
                          placeholder={["bắt đầu", "kết thúc"]}
                          onChange={(time) => {
                            newCoupon.current.timeBegin = time[0].format(
                              "YYYY-MM-DDTHH:mm:ss.SSS"
                            );
                            newCoupon.current.timeEnd = time[1].format(
                              "YYYY-MM-DDTHH:mm:ss.SSS"
                            );
                          }}
                        />
                      </div>
                    </Group>
                  </Col>
                </Row>

                <div className="mt-5 ml-15 pb-15 ">
                  <Button
                    loading={loading}
                    type="primary"
                    style={{ width: 320 }}
                    onClick={actionCreateCoupon}
                  >
                    Lưu
                  </Button>
                </div>
              </Card>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </div>
    </>
  );
};

export default Promotion;
