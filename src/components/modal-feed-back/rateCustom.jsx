import React from "react";

import { Rate } from "antd";
import { StyleRate } from "./style/style";

const RateCustom = ({ size, rates, value }) => {
  return (
    <>
      <StyleRate size={size}>
        <Rate disabled defaultValue={value ? value : 0} allowHalf />
        {rates ? (
          <span className="rates">
            ({Math.round(rates / 1000) + "k"} đánh giá)
          </span>
        ) : (
          "(14k đánh giá)"
        )}
      </StyleRate>
    </>
  );
};

export default RateCustom;
