import styled from "styled-components";

const StyleMenuVertical = styled.div`
  position: fixed;
  top: 182px;
  right: 0px;
  font-size: 25px;
  z-index: 1000;

  padding: 12px;
  color: #f1f1f1;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  .border-icon {
    border: 1px solid #155263;

    cursor: pointer !important;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      border: 1px solid #ff9a3c;
      transition: all 250ms linear;
      .icon {
        color: #ff9a3c;
      }
    }
  }
  .icon {
    color: #155263;
    width: 23px;
    height: 23px;
  }
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  }
  .user {
    border-bottom: 1px solid #c1c1c1;
    padding-bottom: 20px;
    .border-round {
      border: 1px solid #c1c1c1;
      border-radius: 100%;
      background-color: #fff;
      overflow: hidden;
      width: 55px;
      height: 55px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const StyleSubContent = styled.div`
  padding: 15px 15px 0px 10px;
  width: 300px;
  min-width: 80px;
  .row-cart {
    margin-bottom: 20px;
    .title {
      font-size: 14px;
      font-weight: 600;
      margin-top: 12px;
      line-height: 1.5em;
      overflow: hidden;

      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .image {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    span.quantity {
      color: #979797;
    }
    span.price {
      color: #155263;
      text-align: right;
      display: block;
    }
  }
  a.link {
    text-align: center;
    display: block;
    margin-top: 18px;
  }
`;
const StyleSubContentUser = styled.div`
  width: 200px;
  padding: 20px;

  color: #333333;

  margin: -8px;
  border-radius: 6px;
  overflow: hidden;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #155263;
    width: 100%;
    height: 60px;
    z-index: 10;
  }
  .icon-sub {
    margin-right: 8px;
    font-size: 18px;
  }
  .row-sub {
    cursor: pointer;
    margin: 4px;
    display: flex;
    align-items: center;
    svg {
      color: #585858;
    }
    &:hover {
      color: #ff6a3c;
    }
  }

  .email {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 12px;
    border-bottom: 1px solid #f1f1f1;
  }
  .username {
    text-align: center;
  }
  .avatar-user {
    justify-content: center;
    margin: auto;

    z-index: 20;
    span {
      background-color: #fff;
      border: 1px solid #f1f1f1;
    }
  }
`;
export { StyleMenuVertical, StyleSubContent, StyleSubContentUser };
