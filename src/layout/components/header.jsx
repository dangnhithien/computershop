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
import LOGO from "../../assets/images/logo/ToroStore.png";
import useStoreUser from "../../store/personal";

import axios from "axios";
import Horizoncard from "./components/horizon-card";
import Tags from "./components/tags";

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
        return <Horizoncard keyword={{ keyword: "" }} />;
      case 1:
        return <Horizoncard keyword={{ keyword: "" }} />;
      case 2:
        return <Horizoncard keyword={{ keyword: "" }} />;
      case 3:
        return <Tags data={categories} />;
      case 4:
        return <Tags data={suppliers} />;
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
                  <ul style={{ display: "flex", alignItems: "center" }}>
                    <li>
                      <Link className="active main-menu-link" to="/">
                        {/* <StyleLogo>Totostore</StyleLogo> */}
                        <StyleLogo>
                          <img src={LOGO} alt="" />
                        </StyleLogo>
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

export default Header;
