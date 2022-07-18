import styled from "styled-components";

const StyleTopProduct = styled.div`
  border: 1px solid #f1f1f1;
  height: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  span {
    color: #c1c1c1;
    font-size: 16px;
    width: 25%;
    line-height: 40px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    &.borderx {
      border-left: 1px solid #ff6a3c;
      border-right: 1px solid #ff6a3c;
    }
    &.active {
      background: #ff6a3c;
      color: #fff;
    }
  }
`;
const StyleContent = styled.div`
  padding-left: 15px;
  overflow-y: auto;
  max-height: 200px;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;
const StyleFilterPanel = styled.div`
  font-weight: 500;
  color: #333333;
  border-radius: 6px;
  overflow: hidden;

  .ant-collapse-header {
    color: black;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .ant-radio-inner {
    border: 2px solid #ff9a3c;
  }
  .ant-radio-inner:after {
    background-color: #ff9a3c !important;
  }

  input {
    width: auto !important;
  }
  .list {
    margin-bottom: 0;
  }

  .list__item {
    padding: 0;
    display: flex;
    align-items: center;
  }

  .label--checkbox {
    position: relative;
    margin: 0.5rem;
    font-family: Arial, sans-serif;
    line-height: 135%;
    cursor: pointer;
    text-transform: capitalize;
    margin-left: 0;
  }

  .checkbox {
    position: relative;
    top: 0%;
    margin: 0 1rem 0 0;
    cursor: pointer;
  }
  .checkbox:before {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 1rem;
    height: 1rem;
    border: 2px solid #ff9a3c;
  }
  .checkbox:checked:before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: 0.5rem;
    border-color: #ff9a3c;
    border-top-style: none;
    border-right-style: none;
  }
  .checkbox:after {
    content: "";
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1.1rem;
    height: 1.1rem;
    background: #fff;
    cursor: pointer;
  }

  .button--round {
    -webkit-transition: 0.3s background ease-in-out;
    -moz-transition: 0.3s background ease-in-out;
    transition: 0.3s background ease-in-out;
    width: 2rem;
    height: 2rem;
    background: #ff9a3c;
    border-radius: 50%;
    box-shadow: 0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.25);
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
  .button--round i {
    font-size: 1rem;
    line-height: 220%;
    vertical-align: middle;
  }
  .button--round:hover {
    background: #ff9a3c;
  }

  .button--sticky {
    position: fixed;
    right: 2rem;
    top: 16rem;
  }

  .content {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: slideUp;
    animation-name: slideUp;
    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @-webkit-keyframes slideUp {
    0% {
      -webkit-transform: translateY(6.25rem);
      transform: translateY(6.25rem);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(6.25rem);
      transform: translateY(6.25rem);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  label {
    display: block;
    line-height: 20px;
  }
  .option-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: relative;
    top: 13.33333px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 40px;
    transition: all 0.15s ease-out 0s;
    background: #cbd1d8;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 1000;
  }
  .option-input:hover {
    background: #9faab7;
  }
  .option-input:checked {
    background: #ff9a3c;
  }
  .option-input:checked::before {
    width: 40px;
    height: 40px;
    display: flex;
    content: "\f00c";
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    align-items: center;
    justify-content: center;
    font-family: "Font Awesome 5 Free";
  }
  .option-input:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: #ff9a3c;
    content: "";
    display: block;
    position: relative;
    z-index: 100;
  }
  .option-input.radio {
    border-radius: 50%;
  }
  .option-input.radio::after {
    border-radius: 50%;
  }

  @keyframes click-wave {
    0% {
      height: 40px;
      width: 40px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 200px;
      width: 200px;
      margin-left: -80px;
      margin-top: -80px;
      opacity: 0;
    }
  }
`;
const StyleSidebar = styled.div`
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding-top: 12px;
  padding-bottom: 8px;
  border-radius: 4px;
  .title {
    border-bottom: 1px solid #f1f1f1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 8px;
    h6 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 0 !important;
    }
  }
`;
const StyleEmpty = styled.div`
  width: 100%;
  background: #fff;
  height: 360px;
  margin-top: 12px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StylePagination = styled.div`
  text-align: center;
  margin: 16px;
  .ant-pagination-item {
    border: none;
  }
  .ant-pagination-next .ant-pagination-item-link,
  .ant-pagination-prev .ant-pagination-item-link {
    border: none;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
  }
  .ant-pagination-item-active a {
    color: #fff;
    background: #ff6a3c;
    border-radius: 50%;
  }
`;
export {
  StyleSidebar,
  StyleTopProduct,
  StyleFilterPanel,
  StyleEmpty,
  StyleContent,
  StylePagination,
};
