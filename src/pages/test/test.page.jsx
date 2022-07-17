import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyleSupplier = styled.div`
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #f1f1f1;
  &:hover {
    border: 1px solid #ff6a3c;
  }
  a:hover {
    img {
      transform: scale(1.015);
    }
    .hover-text {
      visibility: visible;
    }
    .text {
      background-color: #ff6a3c;
    }
  }
  .image {
    overflow: hidden;
    box-sizing: border-box;
    display: block;
    border: 1px solid #d3d3d3;
    border-radius: 6px 6px 0 0;
    img {
      width: 100%;
      transition: transform 1s ease;
    }
  }
  .hover-text {
    margin-left: auto;
    visibility: hidden;
  }
  .text {
    background: black;
    color: #fff;
    background: #1b1b1b;
    color: #fff;
    height: 38px;
    line-height: 38px;
    padding: 0 17px;
    font-size: 14px;
    border: 1px solid #d3d3d3;
    border-top: 0;
    border-bottom: 0;
    display: flex;
    overflow: hidden;
    transition: background 300ms ease;
  }
`;

const Test = () => {
  return (
    <Row gutter={[8, 8]} style={{ maxWidth: 1200 }}>
      <Col span={8}>
        <StyleSupplier>
          <Link to="">
            <div className="image">
              <img
                src="https://cdn.dsmcdn.com/ty449/pimWidgetApi/mobile_20220607083243_2231639KozmetikMobile202206061901.jpg"
                alt=""
              />
            </div>
            <div className="text">
              <span>Hãng dell</span>
              <span className="hover-text">
                Đến xem <RightOutlined />
              </span>
            </div>
          </Link>
        </StyleSupplier>
      </Col>
    </Row>
  );
};

export default Test;
