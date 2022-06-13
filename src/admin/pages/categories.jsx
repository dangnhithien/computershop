import { Row, Col, Card, Button, Descriptions, Input, Pagination } from "antd";

import styled from "styled-components";
const { TextArea } = Input;
const Group = styled.div`
  /* margin-bottom: 20px; */
  padding: 12px;
  h6 {
    font-weight: bold;
  }
  .btn-save {
    height: 50px;
    font-size: 16px;
  }
`;
const PaginationStyle = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const Categories = () => {
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

  const information = [
    {
      name: "laptop dell",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "1",
    },
    {
      name: "laptop asus",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "2",
    },
    {
      name: "macbook",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "3",
    },
    {
      name: "macbook",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "4",
    },
  ];

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[
              <h5 className="font-semibold m-0">Danh sách loại sản phẩm</h5>,
            ]}
            bodyStyle={{ paddingTop: "0" }}
          >
            <Row gutter={[24, 24]}>
              {information.map((e, index) => {
                return (
                  <Col span={24} key={index}>
                    <Card className="card-billing-info" bordered="false">
                      <div className="col-info">
                        <Descriptions title={e.name}>
                          <Descriptions.Item label="Loại sản phẩm" span={3}>
                            {e.name}
                          </Descriptions.Item>
                          <Descriptions.Item label="Mô tả" span={3}>
                            {e.description}
                          </Descriptions.Item>
                          <Descriptions.Item label="số thứ tự" span={3}>
                            {e.order}
                          </Descriptions.Item>
                        </Descriptions>
                      </div>
                      <div className="col-action">
                        <Button type="link" danger>
                          {deletebtn}DELETE
                        </Button>
                        <Button type="link" className="darkbtn">
                          {pencil} EDIT
                        </Button>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <PaginationStyle>
              <Pagination
                total={85}
                showTotal={(total) => `Total ${total} items`}
                defaultPageSize={20}
                defaultCurrent={1}
              />
            </PaginationStyle>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24" style={{ maxHeight: 500 }}>
          <Card
            bordered={false}
            bodyStyle={{ paddingTop: 0 }}
            className="header-solid h-full  ant-list-yes"
            title={<h5 className="font-semibold m-0">Thêm loại sản phẩm</h5>}
          >
            <Row gutter={[24, 0]}>
              <Col xs="24" xl={24}>
                <Group>
                  <div className="title">
                    <h6>Tiêu đề</h6>
                    <Input showCount maxLength={256} />
                  </div>
                </Group>

                <Group>
                  <div className="description">
                    <h6>Mô tả</h6>
                    <TextArea
                      showCount
                      maxLength={1000}
                      style={{ height: "150px" }}
                    />
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
    </>
  );
};

export default Categories;
