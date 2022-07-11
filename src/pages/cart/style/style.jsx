import styled from "styled-components";

const StyleCheckout = styled.div`
  padding: 15px 20px 24px;

  .box {
    width: 100px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #c1c1c1;
    text-align: center;
    color: #c1c1c1;
    font-size: 16px;
    margin: 8px;
    cursor: pointer;
    border-radius: 5px;
  }
  .name {
    font-size: 18px;
    font-weight: 600;
  }
  .title {
    font-size: 24px;
    color: #ff6a3c;
    margin-bottom: 10px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    font-size: 1rem;
    word-break: break-word;
    span {
      font-size: 0.875rem;
      font-weight: 500;
      color: #929292;
      margin-left: 30px;
      text-transform: capitalize;
      flex-shrink: 0;
    }
  }
  .address {
    word-break: break-word;
  }
  .choose-address {
    margin-top: 0px;
    color: #1890ff;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
  }
  .total {
    font-size: 16px;
    padding: 8px;
    .total-pay {
      font-size: 20px;
      color: #ff6a3c;
      font-weight: 700;
    }
  }
  h6 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
  }
  .active {
    color: #1890ff;
    border: 1px solid;
  }
  .btn-checkout {
    width: 100%;
    line-height: 45px;
    height: 45px;
  }
`;
const StyleTextAlign = styled.div`
  min-height: 530px;
  padding-bottom: 20px;
  .table-responsive table tbody tr td {
    text-align: left !important;
  }
  .ant-table-pagination-right {
    justify-content: center !important;
  }
`;
const StyleTable = styled.div`
  .ant-table {
    box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
      rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  }
  .ant-checkbox {
    margin-left: 15px;
  }
  thead th {
    background: #155263 !important;
    color: #fff !important;
    text-transform: capitalize;
  }
  thead tr th {
    font-size: 14px;
    color: #fff !important;
  }
  .ant-table-filter-trigger.active {
    color: #ff6a3c;
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: #f1f1f1 !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #ff6a3c !important;
    border-color: #f1f1f1;
    width: 20px;
    height: 20px;
  }
  .delete-all {
    width: 230px;
    height: 100px;
    font-size: 40px;
    color: #ff6a3c;
    float: left;
    margin-top: 20px;
    display: flex;
    align-items: center;
    &:hover {
      color: #ff9a3c;
    }
    svg {
      cursor: pointer;
    }
    span {
      font-size: 16px;
      color: #333333;
    }
  }
`;
const StyleTitle = styled.div`
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  white-space: break-spaces;
  text-overflow: ellipsis;
  width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  text-transform: capitalize;
`;

const StyleBoxFixed = styled.div`
  position: fixed;
  padding: 15px;
  bottom: 10px;
  right: 90px;
  background: #fff;
  color: #333333;
  width: 575px;
  min-height: 100px;
  font-size: 16px;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  border-radius: 4px;
  &.position-unset {
    position: unset;
    box-shadow: none;
    margin-left: auto;
    border: 1px solid #f1f1f1;
    margin-top: 20px;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .voucher {
    text-align: right;
    color: #ff9a3c;
  }
  .label {
    text-align: right;
  }

  .total {
    font-size: 18px;

    text-transform: capitalize;
  }
  .price {
    font-size: 18px;
    text-align: center;
    font-weight: 600;
  }
  .amount {
    color: #4fc383;
  }
  button.ant-btn.ant-btn-primary.btn-purchase {
    background: #ff6a3c;
    width: 130px;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #ff9a3c;
    }
  }
`;
export { StyleBoxFixed, StyleCheckout, StyleTextAlign, StyleTitle, StyleTable };
