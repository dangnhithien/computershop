import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../utils/const";
import { Col } from "antd";
const StyleTag = styled.div`
  .broker-tag {
    padding: 8px 12px;
    -webkit-transition: background 0.2s ease, border-color 0.2s ease;
    -webkit-transition: background 0.2s ease, border-color 0.2s ease;
    transition: background 0.2s ease, border-color 0.2s ease;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    color: #000000a6;
    font-family: Haas Grot Text R Web, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-transform: capitalize;
    &:hover {
      color: #ff6a3c;
      border: 1px solid #ff6a3c;
    }
  }
`;
const Tags = ({ data }) => {
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

export default Tags;
