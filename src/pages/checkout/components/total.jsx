import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #f1f1f1;
  padding: 28px 30px 24px;
  margin-top: 20px;

  .group {
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid #f1f1f1;
    font-size: 1rem;
    word-break: break-word;
    margin-left: -30px;
    margin-right: -30px;
    min-height: 90px;
  }
  .border-none {
    border-bottom: none;
  }
  .title {
    width: 200px;
    font-size: 18px;
    color: #000000;
    flex: 1;
    font-weight: 500;
  }
  .payment-methods {
    font-size: 0.875rem;
    font-weight: 500;
    color: #929292;
    text-transform: capitalize;
    flex-shrink: 0;
  }
  .address {
    color: #05a;
    text-transform: uppercase;
    margin-left: 60px;
    cursor: pointer;
    margin-left: 30px;
    font-weight: 500;
  }
  .grid-right {
    margin-left: auto;
    display: flex;
    flex-direction: column;
  }
  .grid-row {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    min-width: 300px;
  }
  .order-btn {
    padding: 15px 50px;
    border-radius: 3px;
    background-color: #ea1c26;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #ee3f48;
    }
  }
`;

const Total = () => {
  return (
    <Container>
      <div className="group">
        <div className="title">Phương thức thanh toán</div>
        <div className="payment-methods">Thanh toán khi nhận hàng</div>
        <div className="address">Thay đổi</div>
      </div>
      <div className="group">
        <div className="grid-right">
          <div className="grid-row">
            <div>Tổng tiền hàng</div>
            <div>24000000</div>
          </div>
          <div className="grid-row">
            <div>Phí vận chuyển</div>
            <div>2400000</div>
          </div>
          <div className="grid-row">
            <div>Tổng thanh toán</div>
            <div>2400000000</div>
          </div>
        </div>
      </div>
      <div className="group border-none">
        <div className="grid-right">
          <button className="order-btn">Đặt Hàng</button>
        </div>
      </div>
    </Container>
  );
};

export default Total;
