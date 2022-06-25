import { SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Card,
  Col,
  Input,
  Radio,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import USER from "../../api/user";
import SpinCustom from "../components/loading/spinCustom";

import Profile from "../components/detail/detailUser";
import TableCustom from "../components/table/table";

const { Title } = Typography;
const { Option } = Select;
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

const Accounts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    actionGetAllAccount();
  }, []);
  function actionGetAllAccount() {
    setLoading(true);
    USER.getAll()
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "userName",
      key: "userName",

      render: (_, { userName, imageUrl, email }) => {
        return (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={64}
                src={imageUrl}
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}>{userName}</Title>
                <p>{email}</p>
              </div>
            </Avatar.Group>{" "}
          </>
        );
      },
      width: "32%",
    },
    {
      title: "Tên khách hàng",
      render: (_, { firstName, lastName }) => {
        return (
          <>
            <div className="author-info">
              <Title level={5}>{firstName + " " + lastName}</Title>
            </div>
          </>
        );
      },
    },

    {
      title: "Trạng thái",
      key: "isActive",
      dataIndex: "isActive",
      render: (_, { isActive }) => {
        return (
          <Tag
            color={isActive ? "#00e396" : "#d10101"}
            style={{ height: "40px", fontSize: "14px", padding: "10px 20px" }}
          >
            {isActive ? "Hoạt động" : "Đã khóa"}
          </Tag>
        );
      },
    },
    {
      title: "Số điện thoại",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      render: (_, { phoneNumber }) => {
        return (
          <>
            <div>{phoneNumber}</div>
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
                  <Custom>
                    <div style={{ width: 250, marginRight: 20 }}>
                      <Input
                        size="large"
                        prefix={<SearchOutlined />}
                        placeholder="Tìm kiếm..."
                        width={230}
                        onChange={(element) => {
                          actionGetAllAccount({
                            // advancedSearch: {
                            //   fields: ["name", "code"],
                            keyword: element?.target.value,
                            // },
                          });
                        }}
                      />
                    </div>

                    <div>
                      <Radio.Group
                        defaultValue={2}
                        // onChange={(element) => {
                        //         actionGetAllOrder({
                        //           advancedSearch: {
                        //             fields: ["status"],
                        //             keyword: element?.target.value,
                        //           },
                        //         });
                        //       }}
                      >
                        <Radio.Button value={2}>Tất cả</Radio.Button>
                        <Radio.Button value={true}>Hoạt động</Radio.Button>
                        <Radio.Button value={false}>Hoạt động</Radio.Button>
                      </Radio.Group>
                    </div>
                  </Custom>
                </>
              }
            >
              {loading ? (
                <SpinCustom />
              ) : (
                <TableCustom columns={columns} data={data} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Accounts;
