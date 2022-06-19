import { SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Popconfirm,
  Radio,
  Rate,
  Row,
  Tag,
  Tooltip,
  Typography,
} from "antd";

import styled from "styled-components";

import { Select } from "antd";
import { Link } from "react-router-dom";
import face2 from "../assets/images/face-2.jpg";
import TableCustom from "../components/table/table";
import {
  MdDelete,
  MdOutlineModeEditOutline,
  MdFilterListAlt,
} from "react-icons/md";
import PRODUCT from "../../api/product";
import { useEffect, useMemo, useRef, useState } from "react";

const { Option } = Select;

const { Title } = Typography;

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

// const data = [
//   {
//     key: "1",
//     avatar: "http",
//     name: "laptop dell prison",
//     status: "public",
//     categories: " laptop dell",
//     provider: "Công ty abc",
//     purchased: 1000,
//   },
//   {
//     key: "2",
//     avatar: "http2",
//     name: "laptop dell prison",
//     status: "public",
//     categories: " laptop dell",
//     provider: "Công ty abc",
//     purchased: 1000,
//   },
// ];

const ListProduct = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [valueStatus, setValueStatus] = useState(true);

  const datas = useRef({
    id: "936DA01F-9ABD-4d9d-80C7-02AF85C822A8",
    name: "",
    description: "",
    slug: "thien",
    level: 0,
    order: 0,
    isShowed: true,
    parentId: "936DA01F-9ABD-4d9d-80C7-02AF85C822A8",
  });
  useEffect(() => {
    actionSearch("");
  }, []);
  function actionSearch(keyword) {
    setLoading(true);
    PRODUCT.search({ keyword })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",

      render: (_, { name, avatar }) => {
        {
          console.log(name, avatar);
        }
        return (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={64}
                src={face2}
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}>{name}</Title>
              </div>
            </Avatar.Group>
          </>
        );
      },
      width: "20%",
    },

    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = status === 1 ? "#2db7f5" : "#f50";
        return (
          <Tag
            color={color}
            style={{ height: "40px", fontSize: "14px", padding: "10px 20px" }}
          >
            {status ? "public" : "private"}
          </Tag>
        );
      },
    },
    {
      title: "Loại sản phẩm",
      key: "categories",
      dataIndex: "categories",

      render: (_, { categories }) => {
        return (
          <>
            <p>{categories}</p>
          </>
        );
      },
    },
    {
      title: "Nhãn hàng",
      key: "supplierName",
      dataIndex: "supplierName",

      render: (_, { supplierName }) => {
        return (
          <>
            <p>{supplierName}</p>
          </>
        );
      },
    },
    {
      title: "Đánh giá",
      key: "rate",
      dataIndex: "rate",

      render: (_, { rate }) => {
        return (
          <>
            <Rate disabled allowHalf defaultValue={rate} />
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
            <div className="ant-employed">
              <span style={{ width: "50px", textAlign: "center" }}>
                {quantity}
              </span>
              <div className="col-action">
                <Button type="link" danger style={{ fontSize: 25 }}>
                  <MdDelete />
                </Button>
                <Button
                  type="link"
                  className="darkbtn"
                  style={{ fontSize: 25 }}
                >
                  <MdOutlineModeEditOutline />
                </Button>
              </div>
            </div>
          </>
        );
      },
      with: "30%",
    },
  ];
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Danh sách sản phẩm"
              extra={[
                <Custom>
                  <Input
                    size="large"
                    prefix={<SearchOutlined />}
                    addonAfter={
                      <Popconfirm
                        placement="bottom"
                        title={
                          <>
                            <Row gutter={[24, 0]} style={{ width: 400 }}>
                              <Col span={24}>
                                <Row
                                  gutter={[24, 0]}
                                  style={{ marginBottom: 5 }}
                                >
                                  <Col span={8}>
                                    <p>Trạng thái</p>
                                  </Col>
                                  <Col span={16}>
                                    <Row>
                                      <Radio.Group
                                        onChange={(e) =>
                                          setValueStatus(e.target.value)
                                        }
                                        value="all"
                                      >
                                        <Radio value="all">All</Radio>
                                        <Radio value="public">Public</Radio>
                                        <Radio value="private">Private</Radio>
                                      </Radio.Group>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row
                                  gutter={[24, 0]}
                                  style={{ marginBottom: 5 }}
                                >
                                  <Col span={8}>
                                    <p>Loại sản phẩm</p>
                                  </Col>
                                  <Col span={16}>
                                    <Select
                                      defaultValue="lucy"
                                      style={{
                                        width: 120,
                                      }}
                                    >
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                  </Col>
                                </Row>
                                <Row
                                  gutter={[24, 0]}
                                  style={{ marginBottom: 5 }}
                                >
                                  <Col span={8}>
                                    <p>Nhãn hàng</p>
                                  </Col>
                                  <Col span={16}>
                                    <Select
                                      defaultValue="lucy"
                                      style={{
                                        width: 120,
                                      }}
                                    >
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </>
                        }
                        icon={<></>}
                        okText="Lọc"
                        cancelText="Hủy"
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            width: 50,
                            fontSize: 16,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#1890ff",
                            color: "#fff",
                          }}
                        >
                          Lọc
                          <MdFilterListAlt style={{ marginLeft: 10 }} />
                        </div>
                      </Popconfirm>
                    }
                    placeholder="Tìm kiếm..."
                    width={230}
                    onChange={(element) => {
                      actionSearch(element?.target.value);
                    }}
                  />
                  <Button type="primary" className="custom">
                    <Link to="them-san-pham">Thêm sản phẩm</Link>
                  </Button>
                </Custom>,
              ]}
            >
              <TableCustom data={data} columns={columns} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ListProduct;
