import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <>
      <div className="coupon_area">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-lg-6 col-md-6 ">
              <div
                className="coupon_code right"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Cart Totals</h3>
                <div className="coupon_inner">
                  <div className="cart_subtotal">
                    <p>Tổng tiền hàng</p>
                    <p className="cart_amount">10.000.000 đ</p>
                  </div>
                  <div className="cart_subtotal ">
                    <p>Phí vận chuyển</p>
                    <p className="cart_amount">
                      <span>50.000 đ</span>
                    </p>
                  </div>

                  <div className="cart_subtotal">
                    <p>Tổng thanh toán</p>
                    <p className="cart_amount">10.050.000 đ</p>
                  </div>
                  <div className="checkout_btn">
                    <Link to="/checkout">Tới thanh toán</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
