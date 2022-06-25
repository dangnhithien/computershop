import { SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  notification,
  Popconfirm,
  Radio,
  Rate,
  Row,
  Tag,
  Typography,
} from "antd";

import styled from "styled-components";

import { Select } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  MdDelete,
  MdFilterListAlt,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import CATEGORIES from "../../api/categories";
import PRODUCT from "../../api/product";
import SUPPLIERS from "../../api/suppliers";
import face2 from "../assets/images/face-2.jpg";
import TableCustom from "../components/table/table";
import SHIPPER from "../../api/shipper";

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

const Shipper = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    actionGetAllShipper();
  }, []);

  function actionGetAllShipper(keyword) {
    setLoading(true);
    SHIPPER.search({ keyword })
      .then((res) => {
        setData(res.data.data);
        console.log(data);
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
      title: "Năm sinh",
      key: "dob",
      dataIndex: "dob",
      render: (_, { dob }) => {
        return <p>{dob}</p>;
      },
    },
    {
      title: "Giới tính",
      key: "gender",
      dataIndex: "gender",

      render: (_, { gender }) => {
        return (
          <>
            <p>{gender ? "Nam" : "Nữ"}</p>
          </>
        );
      },
    },
    {
      title: "Gmail",
      key: "mail",
      dataIndex: "mail",

      render: (_, { mail }) => {
        return (
          <>
            <p>{mail}</p>
          </>
        );
      },
    },
    {
      title: "Số điện thoại ",
      key: "phoneNumber",
      dataIndex: "phoneNumber",

      render: (_, { phoneNumber }) => {
        return (
          <>
            <p>{phoneNumber}</p>
          </>
        );
      },
    },
    {
      title: "Địa chỉ",
      key: "addressId",
      dataIndex: "addressId",

      render: (_, { addressId }) => {
        return (
          <>
            <p>{addressId}</p>
          </>
        );
      },
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
                    placeholder="Tìm kiếm..."
                    width={230}
                    onChange={(element) => {
                      actionGetAllShipper(element?.target.value);
                    }}
                  />
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

export default Shipper;
