import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  .custom {
    margin-left: -12px;
    font-size: 16px;
    height: 40px;
    border-radius: 6px;
  }
  .ant-input {
    height: auto;
  }
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector {
    border-radius: 6px;
  }
`;

export default FilterStyled;
