import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

const Row = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;
const FilterSelect = (props) => {
  return (
    <ul>
      <Row>
        <Checkbox>Agree to terms and Conditions</Checkbox>
      </Row>
      <Row>
        <Checkbox>Agree to terms and Conditions</Checkbox>
      </Row>
      <Row>
        <Checkbox>Agree to terms and Conditions</Checkbox>
      </Row>
      <Row>
        <Checkbox>Agree to terms and Conditions</Checkbox>
      </Row>
    </ul>
  );
};

export default FilterSelect;
