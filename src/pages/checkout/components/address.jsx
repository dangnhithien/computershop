import React from "react";
import styled from "styled-components";
const Container = styled.div`
  border: 1px solid #f1f1f1;
  padding: 28px 30px 24px;
  margin-top: 20px;
`;
const Title = styled.div`
  font-size: 24px;
  color: #ea1c26;
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  word-break: break-word;
`;
const NameUser = styled.div`
  font-weight: 700;
  color: #222;
`;
const AddressUser = styled.div`
  margin-left: 20px;
  word-break: break-word;
`;
const Type = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #929292;
  margin-left: 30px;
  text-transform: capitalize;
  flex-shrink: 0;
`;
const Diversification = styled.div`
  color: #05a;
  text-transform: uppercase;
  margin-left: 60px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 30px;
`;
const Address = () => {
  return (
    <Container>
      <Title>Địa chỉ nhận hàng</Title>
      <Wrapper>
        <NameUser>Đặng Nhị Thiên (+84) 326834079</NameUser>
        <AddressUser>
          134/8 Tch 18, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh
        </AddressUser>
        <Type>Mặc định</Type>
        <Diversification>Thay đổi</Diversification>
      </Wrapper>
    </Container>
  );
};

export default Address;
