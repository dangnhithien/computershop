import { Button, Card, Col, Input, Pagination, Row, Typography } from "antd";
import { useState } from "react";
import { MdDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

import styled from "styled-components";
import TableCustom from "../components/table/table";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const Group = styled.div`
  /* margin-bottom: 20px; */
  padding: 5px;
  h6 {
    font-weight: bold;
  }
  .btn-save {
    height: 30px;
    font-size: 16px;
  }
`;
// table code start
const columns = [
  {
    title: "Mã giảm giá",
    dataIndex: "voucher",
    key: "voucher",
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
    render: (_, { voucher }) => {
      return (
        <>
          <div>{voucher}</div>
        </>
      );
    },
    width: "20%",
  },
  {
    title: "Giảm giá",
    key: "address",
    dataIndex: "address",
    render: (_, { discount }) => {
      return (
        <>
          <p>{discount}</p>
        </>
      );
    },
    width: "30%",
  },
  {
    title: "bắt đầu",
    key: "start",
    dataIndex: "start",
    render: (_, { start }) => {
      return (
        <>
          <p>{start}</p>
        </>
      );
    },
  },
  {
    title: "kết thúc",
    key: "finish",
    dataIndex: "finish",
    render: (_, { finish }) => {
      return (
        <>
          <p>{finish}</p>
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

const data = [
  {
    key: "1",
    voucher: "m145",
    discount: "90%",
    start: "8:00:00 22/6/2019",
    finish: "9:00:00 22/6/2022",
  },
];

const Promotion = () => {
  const [md, setMd] = useState(24);
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
              <TableCustom columns={columns} data={data} />
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
                      <div className="Name-provider">
                        <h6>Mã giảm giá</h6>
                        <Input showCount maxLength={256} />
                      </div>
                    </Group>
                    <Group>
                      <div className="address">
                        <h6>Giảm</h6>
                        <Input showCount maxLength={256} />
                      </div>
                    </Group>
                    <Group>
                      <div className="phone">
                        <h6>Thời gian</h6>
                        <RangePicker
                          showTime
                          size="large"
                          placeholder={["bắt đầu", "kết thúc"]}
                        />
                      </div>
                    </Group>
                  </Col>
                </Row>

                <div className="mt-5 ml-15 pb-15 ">
                  <Button type="primary" style={{ width: 320 }}>
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
