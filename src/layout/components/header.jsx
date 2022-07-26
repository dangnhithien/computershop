import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import { Col, Row } from "antd";
import LOGO from "../../assets/images/logo/ToroStore.png";
import Feedback from "../../components/modal-feed-back/feedback";
import SearchBar from "../../components/search/searchBar";
import useStoreUser from "../../store/personal";
import { PATH } from "../../utils/const";
import { StyleHeader, StyleLogo } from "./style/style";

import DropdownContent from "./components/dropdown-content";

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userProfile = useStoreUser((state) => state.profile);

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
                        <DropdownContent />
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
                    {/* <li>
                      <Link to={PATH.COMPARE}>So sánh</Link>
                    </li> */}
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
