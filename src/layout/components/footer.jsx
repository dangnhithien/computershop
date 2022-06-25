import React from "react";
import {
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Slider,
  Steps,
  Tag,
  Upload,
} from "antd";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import styled from "styled-components";
const FooterWrapper = styled.div`
  height: 300px;
  width: 100%;
  padding: 30px;
  display: flex;
  margin-top: 100px;
  background-color: #333333c2;
  .container {
    height: 33%;
    width: 33%;
    margin: auto;
  }
  .center {
    justify-content: center;
    margin-bottom: 10px;
  }
  .icon {
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff;
    color: #3e3e68;
  }
  h6 {
    color: #fff;
    margin-left: 40px;
    text-align: center;
  }
  .small {
    font-size: 14px;
    color: #bdbdbdd1;
  }
`;
const Footer = () => {
  return (
    <>
      <footer className="footer-section ">
        <FooterWrapper>
          <div className="container">
            <Row gutter={[24, 0]} className="center">
              <Col>
                <AiFillYoutube className="icon" />
              </Col>
              <Col>
                <AiFillFacebook className="icon" />
              </Col>
              <Col>
                <AiOutlineTwitter className="icon" />
              </Col>
            </Row>

            <Row gutter={[24, 0]} className="center">
              <Col span={24}>
                <h6 className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </Col>
            </Row>

            <Row gutter={[24, 0]} className="center">
              <Col span={24}>
                <h6 className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </Col>
            </Row>

            <Row gutter={[24, 0]} className="center">
              <Col span={24}>
                <h6 className="content small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </Col>
            </Row>
          </div>
        </FooterWrapper>
      </footer>{" "}
    </>
  );
};

export default Footer;
