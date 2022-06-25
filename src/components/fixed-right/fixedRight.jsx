import { Avatar, BackTop, Badge, Col, Row, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { ImUser } from "react-icons/im";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiShoppingCartFill } from "react-icons/ri";
import { TiArrowUpThick, TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PRODUCT from "../../api/product";
import useStore from "../../store/personal";

const SideBar = styled.div`
  position: fixed;
  top: 182px;
  right: 10px;
  font-size: 25px;

  padding: 15px;
  color: #f1f1f1;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  .border-icon {
    border: 1px solid #c1c1c1;

    cursor: pointer !important;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      background-color: #c2bcbc;
      -webkit-animation: swing 1s ease;
      animation: swing 1s ease;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }
  }
  .icon {
    color: #333333;
    width: 23px;
    height: 23px;
  }
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user {
    border-bottom: 1px solid #333333;
    padding-bottom: 20px;
    .border-round {
      width: 45px;
      height: 45px;
      text-align: center;
      border: 1px solid #333333;
      border-radius: 100%;
      overflow: hidden;
    }
  }
`;
const StyleSubContent = styled.div`
  padding: 15px 15px 0px 10px;
  width: 300px;
  min-width: 80px;
  .row-cart {
    margin-bottom: 20px;
    .title {
      font-size: 14px;
      font-weight: 600;

      line-height: 1.5em;
      height: 3em;
      overflow: hidden;

      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .image {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    span.quantity {
      color: #979797;
    }
    span.price {
      color: #61c899;
      text-align: right;
      display: block;
    }
  }
  a.link {
    text-align: center;
    display: block;
    margin-top: 18px;
  }
`;
const FixedRight = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userProfile = useStore((state) => state.profile);
  console.log("dd", userProfile);

  useEffect(() => {
    actionGetAllProduct({ keyword: "" });

    return;
  }, []);

  function actionGetAllProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  return (
    <>
      <SideBar>
        <div className="user">
          {Object.keys(userProfile).length != 0 ? (
            <div className="border-round">
              <Link to="/trang-ca-nhan">
                <img
                  src={!userProfile.imgUrl ? new Error() : userProfile.profile}
                  className="image"
                  onError={(e) =>
                    (e.target.src =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5ogil-WanyzsbXnAy84wz_jE9lkj8SkJCg&usqp=CAU")
                  }
                />
              </Link>
            </div>
          ) : (
            <div className="border-round">
              <Link to="/dang-ki">
                <ImUser className="icon" />
              </Link>
            </div>
          )}
        </div>
        <Link to="/" className="home">
          <div className="border-icon">
            <TiHome className="icon" />
          </div>
        </Link>
        <div className="cart">
          <Badge count={99} size="small" offset={[0, 20]}>
            <Tooltip
              overlayStyle={{ maxWidth: "500px" }}
              color={"#fff"}
              title={
                <>
                  <StyleSubContent>
                    {data?.map((item, key) => {
                      return (
                        <Col key={key} span={24} className="row-cart">
                          <Row>
                            <Col span={8}>
                              <Avatar
                                size={64}
                                shape="square"
                                src={item.imgUrl}
                                className="image"
                              />
                            </Col>
                            <Col span={16}>
                              <Row gutter={[24, 0]}>
                                <Col span={24}>
                                  <h6 className="title">{item.name}</h6>
                                </Col>
                                <Col span={8}>
                                  <span className="quantity">
                                    {item.quantity}
                                  </span>
                                </Col>
                                <Col span={16}>
                                  <span className="price">
                                    {item.price} &nbsp; vnđ
                                  </span>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      );
                    })}

                    <Col span={24}>
                      <Link to="/gio-hang" className="link">
                        Giỏ hàng
                      </Link>
                    </Col>
                  </StyleSubContent>
                </>
              }
              placement="left"
            >
              <Link to="/gio-hang" className="border-icon">
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
                    <Col span={24} className="row-cart">
                      <Row>
                        <Col span={8}>
                          <Avatar
                            size={64}
                            shape="square"
                            src=""
                            className="image"
                          />
                        </Col>
                        <Col span={16}>
                          <Row gutter={[24, 0]}>
                            <Col span={24}>
                              <h6 className="title">Laptop dell</h6>
                            </Col>
                            <Col span={8}>
                              <span className="quantity">x3</span>
                            </Col>
                            <Col span={16}>
                              <span className="price">12tr vnđ</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24} className="row-cart">
                      <Row>
                        <Col span={8}>
                          <Avatar
                            size={64}
                            shape="square"
                            src=""
                            className="image"
                          />
                        </Col>
                        <Col span={16}>
                          <Row gutter={[24, 0]}>
                            <Col span={24}>
                              <h6 className="title">Laptop dell</h6>
                            </Col>
                            <Col span={8}>
                              <span className="quantity">x3</span>
                            </Col>
                            <Col span={16}>
                              <span className="price">12tr vnđ</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24} className="row-cart">
                      <Row>
                        <Col span={8}>
                          <Avatar
                            size={64}
                            shape="square"
                            src=""
                            className="image"
                          />
                        </Col>
                        <Col span={16}>
                          <Row gutter={[24, 0]}>
                            <Col span={24}>
                              <h6 className="title">Laptop dell</h6>
                            </Col>
                            <Col span={8}>
                              <span className="quantity">x3</span>
                            </Col>
                            <Col span={16}>
                              <span className="price">12tr vnđ</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Link to="/gio-hang" className="link">
                        Giỏ hàng
                      </Link>
                    </Col>
                  </StyleSubContent>
                </>
              }
              placement="left"
            >
              <Link to="/gio-hang" className="border-icon">
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
      </SideBar>
    </>
  );
};

export default FixedRight;
