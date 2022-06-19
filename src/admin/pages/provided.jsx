import { Button, Card, Col, Input, Pagination, Row, Typography } from "antd";
import { useState } from "react";
import { MdDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

import styled from "styled-components";
import TableCustom from "../components/table/table";

const { Title } = Typography;

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
    title: "Tên nhà cung cấp",
    dataIndex: "name",
    key: "name",
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
    title: "Địa chỉ",
    key: "address",
    dataIndex: "address",
    render: (_, { address }) => {
      return (
        <>
          <p>{address}</p>
        </>
      );
    },
    width: "30%",
  },
  {
    title: "Số điện thoại",
    key: "phone",
    dataIndex: "phone",
    render: (_, { phone }) => {
      return (
        <>
          <p>{phone}</p>
        </>
      );
    },
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
    render: (_, { email }) => {
      return (
        <>
          <p>{email}</p>
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
    id: "123",
    name: "công ty abc",

    address: "q12,tp hcm",
    phone: "0326834079",
    email: "abc.@gmail.com",
  },
  {
    key: "2",
    id: "123",
    name: "công ty abc",

    address: "q12,tp hcm",
    phone: "0326834079",
    email: "abc.@gmail.com",
  },
  {
    key: "3",
    id: "123",
    name: "công ty abc",

    address: "q12,tp hcm",
    phone: "0326834079",
    email: "abc.@gmail.com",
  },
];

const Provided = () => {
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
              title="Nhà cung cấp"
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
                        <h6>Tên nhà cung cấp</h6>
                        <Input showCount maxLength={256} />
                      </div>
                    </Group>
                    <Group>
                      <div className="address">
                        <h6>Địa chỉ</h6>
                        <Input showCount maxLength={256} />
                      </div>
                    </Group>
                    <Group>
                      <div className="phone">
                        <h6>Số điện thoại</h6>
                        <Input showCount maxLength={256} />
                      </div>
                    </Group>
                    <Group>
                      <div className="email">
                        <h6>Email</h6>
                        <Input showCount maxLength={256} />
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

export default Provided;
