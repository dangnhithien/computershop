import { SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Radio,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import face2 from "../assets/images/face-2.jpg";
import Profile from "../components/profile/profile";
import TableCustom from "../components/table/table";

const { Title } = Typography;
const { Option } = Select;

const Accounts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const columns = [
    {
      title: "Tài khoản",
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
      render: (_, { name, avatar, email }) => {
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
                <p>{email}</p>
              </div>
            </Avatar.Group>{" "}
          </>
        );
      },
      width: "32%",
    },
    {
      title: "Đánh giá",
      dataIndex: "consider",
      key: "consider",
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
      filterSearch: (value) => console.log(value, "dd"),
      onFilter: (value) => console.log(value, "dd"),
      render: (_, { consider }) => {
        return (
          <>
            <div className="author-info">
              <Title level={5}>{consider}</Title>
            </div>
          </>
        );
      },
    },

    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = status === "ACTIVE" ? "#00e396" : "#d10101";
        return (
          <Tag
            color={color}
            style={{ height: "40px", fontSize: "14px", padding: "10px 20px" }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Ngày tạo",
      key: "date",
      dataIndex: "date",
      render: (_, { date }) => {
        return (
          <>
            <div>{date}</div>
          </>
        );
      },
    },
    {
      title: "",
      key: "detail",
      render: (_, { id }) => {
        return (
          <>
            <div className="ant-employed">
              <Link
                to=""
                onClick={() => setModalVisible(true)}
                style={{ color: "#1890ff" }}
              >
                Chi tiết
              </Link>
              <Profile
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                id={id}
              />
            </div>
          </>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      id: "",
      avatar: "",
      name: "đặng nhị thiên",
      email: "nhithienv@gamil.com",
      consider: "Khách hàng thân thiết",

      status: "ACTIVE",

      date: "22/12/2012",
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
              title="Danh sách tài khoản"
              extra={
                <>
                  <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Tất cả</Radio.Button>
                    <Radio.Button value="b">Hoạt động</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <TableCustom columns={columns} data={data} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Accounts;
