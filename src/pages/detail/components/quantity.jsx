import React from "react";
import { InputNumber } from "antd";

const Quantity = ({ handleCookie, data }) => {
  const setValue = (value) => {
    data[Object.keys(data).at(0)].quantity = value;
  };
  return (
    <>
      {/* Product Variable Single Item */}
      <div className="d-flex align-items-center">
        <div className="variable-single-item ">
          <span>Quantity</span>
          <InputNumber min={1} max={10} defaultValue={1} onChange={setValue} />
        </div>
        <div className="product-add-to-cart-btn">
          <button
            to="#"
            onClick={() => {
              handleCookie(data);
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
};

export default Quantity;
