import styled from "styled-components";

export const StyleCompare = styled.div`
  .wrap-box {
    border: 1px solid #ececec;
  }
  .box-image {
    position: relative;
    border: 1px solid #ececec;
    padding: 16px;
    cursor: pointer;
    &:hover {
      span.ant-typography.name-product {
        color: #ff6a3c !important;
      }
    }
    .cancel {
      position: absolute;
      top: 0px;
      right: 5px;
      font-size: 25px;
      color: #cecece;
      &:hover {
        color: #ff6a3c;
        z-index: 1;
      }
    }
  }
  .box-empty {
    height: 100%;
  }
  .vs {
    border: 1px solid #cecece;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: block;
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    color: black;
  }
  .title {
    font-weight: 600;
    color: #000;
  }
  .box-square {
    display: block;
    padding: 16px;
    border: 1px solid #ececec;
    margin: 1px;
    .rate {
      background: #ff6a3c;
      color: white;
      border-radius: 16px;
      padding: 0px 8px;
    }
  }
`;
