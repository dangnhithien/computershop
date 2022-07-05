import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import SearchBar from "../../components/search/searchBar";
import { Row, Col, Avatar, Rate } from "antd";
import clsx from "clsx";
import useStoreCategory from "../../store/category";
import { PATH } from "../../utils/const";
import parseMoney from "../../utils/parseMoney";
import Feedback from "../../components/modal-feed-back/feedback";
import { StyleContentDropdown, StyleHeader, StyleLogo } from "./style/style";
import useStoreSupplier from "../../store/supplier";
import LOGO from "../../assets/images/logo/logo.png";
import useStoreUser from "../../store/personal";

const StyleBox = styled.div`
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: rgb(99 99 99 / 9%) 0px 2px 4px 0px;
  padding: 0.5px;
  height: 85px;
  margin-top: 12px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #94bacb1f;
  }
  .ribbon {
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
  }
  .ribbon span {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 100px;
    display: block;
    background: #79a70a;
    background: linear-gradient(#ea1c26 0%, #ea1c26 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    right: -21px;
  }
  .ribbon span::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #7e151a;
    border-right: 3px solid #5e050900;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #a31a21;
  }
  .ribbon span::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #52070a;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #380609;
  }
  .content {
    margin-left: 12px;
    .title {
      font-size: 16px;
    }
    .rate {
      font-size: 14px;
      font-weight: bold;
      color: black;
    }
  }
  .image {
    width: 85px;
    height: 100%;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .purchase {
    font-weight: 600;
    font-size: 13px;
    padding: 3px 5px;
  }
`;
const StyleTag = styled.div`
  .broker-tag {
    margin-right: -14px;
    margin-bottom: 8px;
    padding: 8px 12px;
    -webkit-transition: background 0.2s ease, border-color 0.2s ease;
    -webkit-transition: background 0.2s ease, border-color 0.2s ease;
    transition: background 0.2s ease, border-color 0.2s ease;
    border: 1px solid #efc3c5;
    border-radius: 4px;
    color: #5a5a5a;
    font-family: Haas Grot Text R Web, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-transform: lowercase;
    &:hover {
      border-color: transparent;
      background: #f3f3f4;
    }
  }
`;
const Header = (props) => {
  const init = [
    {
      id: 0,
      name: "bán chạy",
      status: false,
    },
    {
      id: 1,
      name: "đánh giá",

      status: false,
    },
    {
      id: 2,
      name: "giảm giá",

      status: false,
    },
    {
      id: 3,
      name: "loại sản phẩm",

      status: false,
    },
    {
      id: 4,
      name: "nhãn hàng",

      status: false,
    },
  ];
  const [loading, setLoading] = useState(false);
  // const [listCategory, setListCategory] = useState([]);

  const [active, setActive] = useState([]);
  const categories = useStoreCategory((state) => state.categories);
  const suppliers = useStoreSupplier((state) => state.suppliers);
  const [modalVisible, setModalVisible] = useState(false);
  const userProfile = useStoreUser((state) => state.profile);
  useEffect(() => {
    handleActive(0);
  }, []);

  function handleActive(current) {
    init[current].status = true;
    setActive(init);
  }
  function handleDisplay() {
    let current = active?.filter((e) => e.status == true);
    switch (current[0]?.id) {
      case 0:
        return <SingleProduct />;
      case 1:
        return <SingleProduct />;
      case 2:
        return <SingleProduct />;
      case 3:
        return <SingleTag data={categories} />;
      case 4:
        return <SingleTag data={suppliers} />;
      default:
        return;
    }
  }
  return (
    <>
      <StyleHeader>
        <div className="container">
          <Row gutter={[24, 12]}>
            <Col span={24}>
              <div className="main-menu">
                <nav>
                  <ul style={{ display: "flex" }}>
                    <li>
                      <Link className="active main-menu-link" to="/">
                        <StyleLogo>Totostore</StyleLogo>
                        {/* <img src={LOGO} alt="" /> */}
                      </Link>
                    </li>
                    <li className="has-dropdown has-megaitem">
                      <Link to={PATH.PRODUCT}>
                        Mua hàng <IoIosArrowDown />
                      </Link>

                      <div className="mega-menu">
                        <StyleContentDropdown>
                          <Row gutter={[24, 0]}>
                            <Col span={24}>
                              <div className="title">Sản phẩm</div>
                            </Col>
                            <Col span={4} className="side-bar">
                              <div>
                                {active.map((Element, key) => {
                                  return (
                                    <div
                                      key={key}
                                      className={clsx("type", {
                                        active: Element.status,
                                      })}
                                      onClick={() => {
                                        handleActive(Element.id);
                                      }}
                                    >
                                      {Element.name}
                                      <IoIosArrowForward />
                                    </div>
                                  );
                                })}
                              </div>
                            </Col>
                            <Col span={20}>
                              <Row gutter={[24, 0]}>{handleDisplay()}</Row>
                            </Col>
                          </Row>
                        </StyleContentDropdown>
                      </div>
                    </li>
                    <li>
                      <Link
                        to={
                          Object.keys(userProfile).length != 0
                            ? PATH.CART
                            : PATH.SINGIN
                        }
                      >
                        Giỏ hàng
                      </Link>
                    </li>
                    <li>
                      <Link to="" onClick={() => setModalVisible(true)}>
                        Phản hồi
                      </Link>
                      <Feedback
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                      />
                    </li>
                    <li style={{ marginLeft: "auto" }}>
                      <SearchBar />
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </div>
      </StyleHeader>
    </>
  );
};
const SingleProduct = () => {
  return (
    <Col span={12}>
      <StyleBox>
        <div className="ribbon">
          <span>30%</span>
        </div>
        <div className="image">
          <img src="https://picsum.photos/200" />
        </div>
        <div className="content">
          <div className="title">laptop delll chạy rất là lâu</div>
          <div className="rate">
            <Rate disabled defaultValue={2} style={{ fontSize: 14 }} />
            &nbsp;2.0
          </div>
          <div className="purchase">Đã bán: {parseMoney(12000000)}</div>
        </div>
      </StyleBox>
    </Col>
  );
};
const SingleTag = ({ data }) => {
  return (
    <>
      {data?.map((item, key) => {
        return (
          <Col key={key}>
            <StyleTag>
              <Link to={PATH.HOME}>
                <div className="broker-tag">{item.name}</div>
              </Link>
            </StyleTag>
          </Col>
        );
      })}
    </>
  );
};

export default Header;
