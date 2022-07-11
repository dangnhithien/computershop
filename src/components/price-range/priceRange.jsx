import { Button, Slider } from "antd";
import { useState } from "react";
import styled from "styled-components";
import parseMoney from "../../utils/parseMoney";
const StylePrice = styled.div`
  .btn {
    width: 100px;
    background: #ff6a3c;
    color: #fff;
    text-transform: uppercase;
    margin-top: 12px;
    margin-left: 50px;
  }
`;
const PriceRange = ({ request, setRequest }) => {
  const defaultValue = [1000000, 100000000];
  const [currentValue, setCurrentValue] = useState(defaultValue);
  function handlePrice() {
    setRequest({
      ...request,
      minPrice: currentValue[0],
      maxPrice: currentValue[1],
    });
  }
  return (
    <>
      <Slider
        range
        step={100000}
        min={1000000}
        max={100000000}
        defaultValue={defaultValue}
        onChange={(value) => {
          setCurrentValue(value);
        }}
        trackStyle={{
          backgroundColor: "#ff6a3c",
        }}
        handleStyle={{
          backgroundColor: "#f6f6f6 ",
          border: "5px solid #ff6a3c ",
        }}
      />
      <StylePrice>
        <p style={{ marginBottom: 8 }}>Giá bán</p>
        <span>
          {parseMoney(currentValue[0])}&nbsp;vnđ - {parseMoney(currentValue[1])}
          &nbsp;vnđ
        </span>
        <Button onClick={handlePrice} className="btn">
          lọc
        </Button>
      </StylePrice>
    </>
  );
};

export default PriceRange;
