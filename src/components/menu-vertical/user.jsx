import { Avatar, Col, Row, Tooltip } from "antd";
import { FiLogOut } from "react-icons/fi";
import { ImProfile, ImUser } from "react-icons/im";
import { Link } from "react-router-dom";

import useStoreUser from "../../store/personal";
import { PATH } from "../../utils/const";
import { StyleSubContentUser } from "./style/style";

const User = () => {
  const userProfile = useStoreUser((state) => state.profile);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = PATH.HOME;
  };
  return (
    <div className="user">
      {Object.keys(userProfile).length != 0 ? (
        <Tooltip
          overlayStyle={{
            maxWidth: "500px",
          }}
          placement="left"
          style={{ borderRadius: 6, overflow: "hidden" }}
          color={"#fff"}
          title={
            <>
              <StyleSubContentUser>
                <Row gutter={[24, 0]}>
                  <Col className="avatar-user">
                    <Avatar
                      size={80}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>

                  <Col span={24}>
                    <div className="email">{userProfile.email}</div>
                  </Col>

                  <Col span={24} className="row-sub">
                    <Link to={PATH.PROFILE} style={{ color: "#333333" }}>
                      <ImProfile className="icon-sub" />
                      Trang cá nhân
                    </Link>
                  </Col>
                  <Col span={24} className="row-sub" onClick={logout}>
                    <FiLogOut className="icon-sub" />
                    Đăng xuất
                  </Col>
                </Row>
              </StyleSubContentUser>
            </>
          }
        >
          <div className="border-round">
            <Link to={PATH.PROFILE}>
              <span style={{ textTransform: "uppercase", color: "black" }}>
                {userProfile.email.slice(0, 1)}
              </span>
            </Link>
          </div>
        </Tooltip>
      ) : (
        <div className="border-round">
          <Link to={PATH.SINGIN}>
            <ImUser className="icon" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
