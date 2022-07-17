import React from "react";

import { Rate } from "antd";
import { StyleRate } from "./style/style";

const RateCustom = ({ size, rates, value }) => {
  return (
    <>
      <StyleRate size={size}>
        <Rate disabled defaultValue={value ? value : 0} allowHalf />
      </StyleRate>
    </>
  );
};

export default RateCustom;
