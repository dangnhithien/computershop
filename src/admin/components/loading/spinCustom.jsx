import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
const Style = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 200px;
`;
const SpinCustom = () => {
  return (
    <Style>
      <Spin size="large" />
    </Style>
  );
};

export default SpinCustom;
