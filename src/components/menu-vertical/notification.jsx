import { Avatar, Badge, Col, Empty, Row, Tooltip, Typography } from "antd";

import { useEffect } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useStoreNotification from "store/notification";
import useStoreUser from "store/personal";

import { PATH } from "../../utils/const";
import { StyleSubContent } from "./style/style";
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
    <div className="notification">
      <Badge count={notifications.length ?? 0} size="small" offset={[0, 20]}>
        <Tooltip
          overlayStyle={{ maxWidth: "500px" }}
          color={"#fff"}
          title={
            <>
              <StyleSubContent>
                {notifications.length > 0 ? (
                  <>
                    <Row gutter={[8, 8]}>
                      {notifications.map((e, key) => {
                        return (
                          <Col>
                            <Row gutter={[8, 8]} wrap={false}>
                              <Col>
                                <Avatar
                                  shape="square"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH5j3LmfFGLsofpNHt5wLnIrldx_g9lI_R_XnYFJUGdetZhFZOeOnQqqVk-H3AMY2elI&usqp=CAU"
                                  size={50}
                                />
                              </Col>
                              <Row gutter={[0, 0]}>
                                <Col>
                                  <Title level={5} style={{ margin: 0 }}>
                                    {e.title}
                                  </Title>
                                </Col>
                                <Col>
                                  <Text>{e.content}</Text>
                                </Col>
                              </Row>
                            </Row>
                          </Col>
                        );
                      })}
                    </Row>
                  </>
                ) : (
                  <Empty
                    description="Không có thông báo mới"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                )}
              </StyleSubContent>
            </>
          }
          placement="left"
        >
          <Link to={PATH.CART} className="border-icon">
            <IoNotificationsSharp className="icon" />
          </Link>
        </Tooltip>
      </Badge>
    </div>
  );
};

export default Notification;
