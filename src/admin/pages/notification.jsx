import { Row, Col, Card, Avatar, List, Button } from "antd";

import avtar from "../assets/images/team-2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { Segmented } from "antd";

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 10px 20px;
  background-color: #fafafa;
`;
const NotificationItem = styled.div`
  padding: 0 18px;
  .notification-dot {
    font-size: 27px;
    padding: 15px;
    color: #42c570;
  }
  &:hover {
    background-color: #1890ff1c;
  }
  .ant-list-item-meta-title {
    font-size: 16px;
  }
`;
const SegmentedStyle = styled.div`
  .ant-segmented.ant-segmented-lg .ant-segmented-item-label {
    font-weight: 600;
    color: #1890ff;
  }
`;

const clockicon = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
      fill="#1890ff"
    ></path>
  </svg>,
];

const data = [
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio ",
    description: <>{clockicon} 2 giờ trước</>,

    avatar: avtar,
  },
  {
    title: "New album by Travis Scott",
    description: <>{clockicon} 2 giờ trước</>,

    avatar: avtar,
  },
  {
    title: "Payment completed",
    description: <>{clockicon} 2 giờ trước</>,
    avatar: avtar,
  },
];

const Notification = () => {
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={4} />
          <Col span={16}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24 pb-10"
              title="Thông báo"
              extra={
                <SegmentedStyle>
                  <Segmented
                    options={[
                      { label: "Tất cả", value: "all" },
                      { label: "Chưa đọc", value: "yet" },
                    ]}
                    size="large"
                  />
                </SegmentedStyle>
              }  
            >
              <div className="notification-day">
                <Title>Mới</Title>
                <div className="notification">
                  <List
                    min-width="100%"
                    className="header-notifications-dropdown "
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                      <NotificationItem>
                        <Link to="#">
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src={item.avatar} size={64} />}
                              title={item.title}
                              description={item.description}
                            />
                            <div className="notification-dot">
                              <GoPrimitiveDot />
                            </div>
                          </List.Item>
                        </Link>
                      </NotificationItem>
                    )}
                  />
                </div>
              </div>
              <div className="notification-day">
                <Title>Trước đó</Title>
                <div className="notification">
                  <List
                    min-width="100%"
                    className="header-notifications-dropdown "
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                      <NotificationItem>
                        <Link to="#">
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src={item.avatar} size={64} />}
                              title={item.title}
                              description={item.description}
                            />
                            <div className="notification-dot">
                              <GoPrimitiveDot />
                            </div>
                          </List.Item>
                        </Link>
                      </NotificationItem>
                    )}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Notification;
