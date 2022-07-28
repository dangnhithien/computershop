import { Avatar, Col, Row, Typography } from "antd";
import { useEffect } from "react";
import { FaBell } from "react-icons/fa";
import useStoreNotification from "store/notification";
import useStoreUser from "store/personal";

import { StyleNotification } from "../style/styleProfile";
const { Title, Text } = Typography;
const Notification = () => {
  const notifications = useStoreNotification((state) => state.notifications);
  const setNotifications = useStoreNotification(
    (state) => state.setNotifications
  );
  const user = useStoreUser((state) => state.profile);
  useEffect(() => {
    setNotifications(user?.id);
  }, [user?.id]);
  return (
    <Row gutter={[8, 8]} className="main">
      <Col span={14} style={{ height: 50 }}>
        <Title level={5} className="title">
          Thông báo
        </Title>
      </Col>
      <Col span={24}>
        <Row gutter={[8, 8]}>
          {notifications.length > 0 &&
            notifications.map((e, key) => {
              return (
                <Col span={12}>
                  <StyleNotification>
                    <Row gutter={[8, 8]} align="middle">
                      <Col>
                        <Avatar
                          size={50}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH5j3LmfFGLsofpNHt5wLnIrldx_g9lI_R_XnYFJUGdetZhFZOeOnQqqVk-H3AMY2elI&usqp=CAU"
                          alt=""
                        />
                      </Col>
                      <Col span={18}>
                        <Title level={5} ellipsis={true} style={{ margin: 0 }}>
                          {e.title}
                        </Title>
                        <Text ellipsis={{ rows: 2 }} type="secondary">
                          {e.content}
                        </Text>
                      </Col>
                      <Col span={2}>
                        <FaBell />
                      </Col>
                    </Row>
                  </StyleNotification>
                </Col>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
};

export default Notification;
