import { Col, Row } from "antd";
import { FaMoneyBillWave, FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

import { PATH } from "../../utils/const";
import { StyleFooter, StyleInfoBox } from "./style/style";

const Footer = () => {
  return (
    <>
      {/* <Row gutter={[8, 8]} justify="space-around" style={{ marginTop: 20 }}>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/acer-logo.png"
            alt="Acer"
          />
        </Col>{" "}
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/acer-predator-logo.png"
            alt="Predator"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/apple-logo.png"
            alt="Apple"
          />
        </Col>{" "}
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/asus-logo.png"
            alt="Asus"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/hp-omen-logo.png"
            alt="Omen"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/dell-alienware-logo.png"
            alt="Alienware"
          />
        </Col>{" "}
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/dell-logo.png"
            alt="Dell"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/microsoft-logo.png"
            alt="Microsoft"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/hp-logo.png"
            alt="HP"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/lenovo-logo.png"
            alt="Lenovo"
          />
        </Col>
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/msi-logo.png"
            alt="MSI"
          />
        </Col>{" "}
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/razer-logo.png"
            alt="Razer"
          />
        </Col>{" "}
        <Col>
          <img
            src="https://laptoptitan.vn/wp-content/uploads/2021/05/asus-rog-logo.png"
            alt="Asus Rog"
          />
        </Col>
      </Row> */}
      <StyleInfoBox>
        <Row gutter={[24, 0]}>
          <Col span={8}>
            <div className="item">
              <div className="icon">
                <FaShippingFast />
              </div>
              <div className="content">
                <div className="title">Miễn phí vận chuyển</div>
                <div>Miễn phí vận chuyển với hóa đơn trên 10 triệu </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="item">
              <div className="icon">
                <FaMoneyBillWave />
              </div>
              <div className="content">
                <div className="title">Miễn phí vận chuyển</div>
                <div>Miễn phí vận chuyển với hóa đơn trên 10 triệu </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="item">
              <div className="icon">
                <MdSupportAgent />
              </div>
              <div className="content">
                <div className="title">Miễn phí vận chuyển</div>
                <div>Miễn phí vận chuyển với hóa đơn trên 10 triệu </div>
              </div>
            </div>
          </Col>
        </Row>
      </StyleInfoBox>
      <StyleFooter>
        <footer className="footer">
          <div className="footer__addr">
            <h1 className="footer__logo">Totostore</h1>

            <h2>Contact</h2>

            <address>
              5534 Somewhere In. The World 22193-10212
              <br />
              <Link className="footer__btn" to="#">
                Email Us
              </Link>
            </address>
          </div>

          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">Media</h2>

              <ul className="nav__ul">
                <li>
                  <Link to={PATH.HOME}>Online</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Print</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Alternative Ads</Link>
                </li>
              </ul>
            </li>

            <li className="nav__item nav__item--extra">
              <h2 className="nav__title">Technology</h2>

              <ul className="nav__ul nav__ul--extra">
                <li>
                  <Link to={PATH.HOME}>Hardware Design</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Software Design</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Digital Signage</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Automation</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Artificial Intelligence</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>IoT</Link>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Legal</h2>

              <ul className="nav__ul">
                <li>
                  <Link to={PATH.HOME}>Privacy Policy</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Terms of Use</Link>
                </li>

                <li>
                  <Link to={PATH.HOME}>Sitemap</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="legal">
            <p>&copy; 2022 Something. All rights reserved.</p>
          </div>
        </footer>
      </StyleFooter>
    </>
  );
};

export default Footer;
