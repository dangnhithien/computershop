import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../utils/const";
import { Col } from "antd";
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
