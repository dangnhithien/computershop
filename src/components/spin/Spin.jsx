import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
const Style = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;
const SpinCustom = () => {
  return (
    <Style>
      <Spin size="large" indicator={<LoadingOutlined />} />
    </Style>
  );
};

export default SpinCustom;
