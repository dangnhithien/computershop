import React from "react";
import styled from "styled-components";
import { Rate } from "antd";

const MyStyle = styled.div`
  .ant-rate-star:not(:last-child) {
    margin-right: 3px;
  }
  .ant-rate {
    font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  }
  .rates {
    margin-left: 10px;
    font-size: 12px;
  }
`;
const RateCustom = ({ size, rates, value }) => {
  return (
    <>
      <MyStyle size={size}>
        <Rate disabled defaultValue={value ? value : 0} allowHalf />
        {rates ? (
          <span className="rates">
            ({Math.round(rates / 1000) + "k"} đánh giá){" "}
          </span>
        ) : (
          ""
        )}
      </MyStyle>
    </>
  );
};

export default RateCustom;
