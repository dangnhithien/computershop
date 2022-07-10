import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Upload, Modal, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { StyleProfile } from "../style/styleProfile";
import Info from "../components/info";
import Notification from "../components/notification";
import Transaction from "../components/transaction";

import Password from "../components/password";

const Profile = () => {
  const [display, setDisplay] = useState("info");
  useEffect(() => window.scrollTo(0, 0), []);
  function handleDisplay() {
    console.log(display);
    if (display === "info") return <Info />;
    if (display === "transaction") return <Transaction />;
    if (display === "notification") return <Notification />;
    if (display === "password") return <Password />;
    return <></>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <StyleProfile>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <div className="banner">
                  <img
                    //
                    src="https://picsum.photos/1200/300"
                    alt=""
                  />
                </div>
              </Col>
              <Col span={4}>
                <Row gutter={[8, 8]} className="sidebar">
                  <Col>
                    <div
                      className={display === "info" ? "active tab" : "info tab"}
                      onClick={() => setDisplay("info")}
                    >
                      Hồ sơ
                    </div>
                  </Col>
                  <Col>
                    <div
                      className={
                        display === "transaction"
                          ? "active tab"
                          : "transaction tab"
                      }
                      onClick={() => setDisplay("transaction")}
                    >
                      Giao dịch
                    </div>
                  </Col>
                  <Col>
                    <div
                      className={
                        display === "password"
                          ? "active tab"
                          : "notification tab"
                      }
                      onClick={() => setDisplay("password")}
                    >
                      Mật khẩu
                    </div>
                  </Col>
                  <Col>
                    <div
                      className={
                        display === "notification"
                          ? "active tab"
                          : "notification tab"
                      }
                      onClick={() => setDisplay("notification")}
                    >
                      Thông báo
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={20} style={{ marginLeft: "-10px" }}>
                {handleDisplay()}
              </Col>
            </Row>
          </StyleProfile>
        </div>
      </div>
    </>
  );
};

export default Profile;
