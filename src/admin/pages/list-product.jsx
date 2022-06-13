import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Card, Table, Button, Avatar, Typography, Input } from "antd";

import styled from "styled-components";

import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import { Select } from "antd";
import { Link } from "react-router-dom";

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
`;
// table code start
const columns = [
  {
    title: "Sản phẩm",
    dataIndex: "name",
    key: "name",
    width: "40%",
  },

  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Đã bán",
    key: "purchased",
    dataIndex: "purchased",
  },
];
const deletebtn = [
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
      fill="#111827"
      className="fill-danger"
    ></path>
  </svg>,
];
const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];
const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Michael John</Title>
            <p>michael@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          PUBLIC
        </Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>10000</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Alexa Liras</Title>
            <p>alexa@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>100000</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Laure Perrier</Title>
            <p>laure@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          PUBLIC
        </Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>12000</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Miriam Eric</Title>
            <p>miriam@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          PUBLIC
        </Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Richard Gran</Title>
            <p>richard@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>23/03/20</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "7",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "8",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "9",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "10",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={64}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">PUBLIC</Button>
      </>
    ),
    purchased: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <div className="col-action">
            <Button type="link" danger>
              {deletebtn}DELETE
            </Button>
            <Button type="link" className="darkbtn">
              {pencil} EDIT
            </Button>
          </div>
        </div>
      </>
    ),
  },
];

const ListProduct = () => {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

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
                    className="custom"
                    placeholder="Type here..."
                    prefix={<SearchOutlined />}
                    size="middle"
                  />
                  <Select
                    className="custom"
                    defaultValue="lucy"
                    style={{ width: 250 }}
                    size="large"
                    // onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Loại sản phẩm</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <Button type="primary" className="custom">
                    <Link to="them-san-pham">Thêm sản phẩm</Link>
                  </Button>
                </Custom>,
              ]}
            >
              <TextAlign>
                <div className="table-responsive pb-5">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 5 }}
                    scroll={false}
                    className="ant-border-space"
                  />
                </div>
              </TextAlign>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ListProduct;
