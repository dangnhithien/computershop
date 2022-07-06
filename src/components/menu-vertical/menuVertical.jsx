import { Avatar, BackTop, Badge, Col, Empty, Row, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { ImProfile, ImUser } from "react-icons/im";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiShoppingCartFill } from "react-icons/ri";
import { TiArrowUpThick, TiHome } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PRODUCT from "../../api/product";

import { PATH } from "../../utils/const";
import useStoreUser from "../../store/personal";
import useStoreCart from "../../store/cart";
import {
  StyleMenuVertical,
  StyleSubContent,
  StyleSubContentUser,
} from "./style/style";

const MenuVertical = () => {
  const [loading, setLoading] = useState(false);
  const userProfile = useStoreUser((state) => state.profile);
  const dataCart = useStoreCart((state) => state.cart);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = PATH.HOME;
  };
  return (
    <>
      <StyleMenuVertical>
        <div className="user">
          {Object.keys(userProfile).length != 0 ? (
            <Tooltip
              overlayStyle={{
                maxWidth: "500px",
              }}
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
                        <div className="username">{userProfile.name}</div>
                      </Col>
                      <Col span={24}>
                        <div className="email">{userProfile.email}</div>
                      </Col>

                      <Col span={24} className="row-sub">
                        {" "}
                        <ImProfile className="icon-sub" />
                        Trang cá nhân
                      </Col>
                      <Col span={24} className="row-sub" onClick={logout}>
                        <FiLogOut className="icon-sub" />
                        Đăng xuất
                      </Col>
                    </Row>
                  </StyleSubContentUser>
                </>
              }
              placement="left"
            >
              <div className="border-round">
                <Link to={PATH.PROFILE}>
                  <img
                    src={
                      !userProfile.imgUrl ? new Error() : userProfile.profile
                    }
                    className="image"
                    onError={(e) =>
                      (e.target.src = "https://picsum.photos/200/300?random=1")
                    }
                  />
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
        <Link to={PATH.HOME} className="home">
          <div className="border-icon">
            <TiHome className="icon" />
          </div>
        </Link>
        <div className="cart">
          <Badge count={dataCart.length} size="small" offset={[0, 20]}>
            <Tooltip
              overlayStyle={{ maxWidth: "500px" }}
              color={"#fff"}
              title={
                <>
                  <StyleSubContent>
                    {dataCart.length > 0 ? (
                      <>
                        {dataCart?.slice(0, 3).map((item, key) => {
                          return (
                            <Col key={key} span={24} className="row-cart">
                              <Row>
                                <Col span={8}>
                                  <Avatar
                                    size={64}
                                    shape="square"
                                    src={
                                      item.imgUrl ??
                                      "https://picsum.photos/300/600"
                                    }
                                    className="image"
                                  />
                                </Col>
                                <Col span={16}>
                                  <Row gutter={[24, 0]}>
                                    <Col span={24}>
                                      <h6 className="title">
                                        {item.productName ?? "null"}
                                      </h6>
                                    </Col>
                                    <Col span={8}>
                                      <span className="quantity">
                                        x{item.quantity ?? "null"}
                                      </span>
                                    </Col>
                                    <Col span={16}>
                                      <span className="price">
                                        {item.price ?? "null"} &nbsp; vnđ
                                      </span>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          );
                        })}

                        <Col span={24}>
                          <Link to={PATH.CART} className="link">
                            Giỏ hàng
                          </Link>
                        </Col>
                      </>
                    ) : (
                      <Empty
                        description="Bạn chưa thêm sản phẩm nào!"
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                      />
                    )}
                  </StyleSubContent>
                </>
              }
              placement="left"
            >
              <Link
                to={
                  Object.keys(userProfile).length != 0 ? PATH.CART : PATH.SINGIN
                }
                className="border-icon"
              >
                <RiShoppingCartFill className="icon" />
              </Link>
            </Tooltip>
          </Badge>
        </div>
        <div className="notification">
          <Badge count={99} size="small" offset={[0, 20]}>
            <Tooltip
              overlayStyle={{ maxWidth: "500px" }}
              color={"#fff"}
              title={
                <>
                  <StyleSubContent>
                    <Empty
                      description="Không có thông báo mới"
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                    />
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
        <div className="back-top">
          <BackTop style={{ position: "unset", width: 50, height: 50 }}>
            <div className="border-icon">
              <TiArrowUpThick className="icon" />
            </div>
          </BackTop>
        </div>
      </StyleMenuVertical>
    </>
  );
};

export default MenuVertical;
