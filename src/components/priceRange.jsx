import React, { useState } from "react";
import { Slider, InputNumber } from "antd";

const PriceRange = () => {
  const defaultValue = [1000, 10000];
  const [currentValue, setCurrentValue] = useState(defaultValue);
  return (
    <>
      <Slider
        range
        step={1000}
        min={1000}
        max={100000}
        defaultValue={defaultValue}
        onChange={(value) => {
          setCurrentValue(value);
        }}
        trackStyle={{
          backgroundColor: "#ea1c26",
        }}
        handleStyle={{
          backgroundColor: "#f6f6f6 ",
          border: "5px solid #ea1c26 ",
        }}
      />
      <div className="filter-type-price">
        <span>Price:</span>
        <span>
          {currentValue[0]} - {currentValue[1]}
        </span>
      </div>
    </>
  );
};

export default PriceRange;
