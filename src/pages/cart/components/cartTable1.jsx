import { InputNumber, message } from "antd";
import React from "react";
import { useCookies } from "react-cookie";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../../../assets/images/banner_images/banner-img770x496.jpg";

import {
  Cookie,
  COOKIE_NAME,
  COOKIE_EXPIRES,
  COOKIE_PATH,
} from "../../../utils/cookie";
import { isEmpty } from "../../../utils/method";
const mesDelete = () => {
  message.success({
    content: "This is a prompt message with custom className and style",
  });
};
const CartSingleItem = ({ id, product }) => {
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_NAME.CART]);
  const cookieCart = new Cookie(cookies);

  function deleteAction() {
    let item = {
      [id]: { quantity: 0 },
    };
    let expires = new Date();
    expires.setTime(expires.getTime() + COOKIE_EXPIRES * 1000);

    cookieCart.removeItem(item);

    if (isEmpty(cookieCart.getCart())) removeCookie(COOKIE_NAME.CART);
    else {
      setCookie(COOKIE_NAME.CART, cookieCart.getCart(), {
        path: COOKIE_PATH,
        expires,
      });
    }
  }
  function addAction(value) {
    let item = {
      [id]: { quantity: value },
    };
    let expires = new Date();
    expires.setTime(expires.getTime() + COOKIE_EXPIRES * 1000);

    cookieCart.addItem(item);

    setCookie(COOKIE_NAME.CART, cookieCart.getCart(), {
      path: COOKIE_PATH,
      expires,
    });
  }
  return (
    <>
      <td className="product_thumb">
        <a href="product-details-default.html">
          <img src={img} alt="" />
        </a>
      </td>
      <td className="product_name">
        <Link to="">Handbags justo</Link>
      </td>
      <td className="product-price">$90.00</td>
      <td className="product_quantity">
        <div className="inputNumber">
          <InputNumber
            bordered={false}
            min={1}
            max={10}
            defaultValue={product.quantity}
            onChange={(value) => {
              addAction(value);
            }}
          />
        </div>
      </td>
      <td className="product_total">$180.00</td>
      <td className="product_remove">
        <Link to="">
          <MdDeleteForever
            onClick={() => {
              deleteAction();
              mesDelete();
            }}
          />
        </Link>
      </td>
    </>
  );
};

const CartTable = () => {
  const [cookies] = useCookies([COOKIE_NAME.CART]);
  const cookieCart = new Cookie(cookies);

  return (
    <>
      {/* Start Cart Table */}
      <div
        className="cart-table-wrapper pt-100"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table_desc">
                <div className="table_page table-responsive">
                  <table>
                    {/* Start Cart Table Head */}
                    <thead>
                      <tr>
                        <th className="product_thumb">Image</th>
                        <th className="product_name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product_quantity">Quantity</th>
                        <th className="product_total">Total</th>
                        <th className="product_remove">Delete</th>
                      </tr>
                    </thead>
                    {/* End Cart Table Head */}
                    <tbody>
                      {/* Start Cart Single Item*/}
                      {Object.keys(cookieCart.getCart()).map((key) => {
                        return (
                          <tr key={key}>
                            <CartSingleItem
                              id={parseInt(key)}
                              product={cookies.cart[key]}
                            />
                          </tr>
                        );
                      })}
                    </tbody>
                    {/* End Cart Single Item*/}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Cart Table */}
    </>
  );
};

export default CartTable;
