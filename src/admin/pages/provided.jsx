import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Avatar,
  Typography,
  Input,
} from "antd";

import styled from "styled-components";

const { Title } = Typography;
const TextAlign = styled.div`
  .table-responsive table tbody tr td {
    text-align: left !important;
  }
  .ant-table-pagination-right {
    justify-content: center !important;
  }
`;
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
    width: "20%",
  },
  {
    title: "Địa chỉ",
    key: "address",
    dataIndex: "address",
    width: "30%",
  },
  {
    title: "Số điện thoại",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABCr</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "7",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "8",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "9",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "10",
    name: (
      <>
        <div className="avatar-info">
          <Title level={5}>Công ty ABC</Title>
        </div>
      </>
    ),

    address: (
      <>
        <p>q12,tp HCM</p>
      </>
    ),
    phone: (
      <>
        <p>08888888888</p>
      </>
    ),
    email: (
      <>
        <p>abc.@gmail.com</p>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];

const Provided = () => {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={24} md={16} className="mb-24">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Nhà cung cấp"
              style={{ minHeight: 500 }}
            >
              <TextAlign>
                <div className="table-responsive pb-5">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 6 }}
                    scroll={false}
                    className="ant-border-space"
                  />
                </div>
              </TextAlign>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24" style={{ maxHeight: 520 }}>
            <Card
              bordered={false}
              bodyStyle={{ paddingTop: 0 }}
              className="header-solid h-full  ant-list-yes"
              title={<h5 className="font-semibold m-0">Thêm loại sản phẩm</h5>}
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

              <div className="uploadfile pb-15 shadow-none">
                <Button type="dashed" className="ant-full-box">
                  Lưu
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Provided;
