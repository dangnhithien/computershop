import { InputNumber } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import {
  Cookie,
  COOKIE_NAME,
  COOKIE_EXPIRES,
  COOKIE_PATH,
} from "../../../utils/cookie";
import { isEmpty } from "../../../utils/method";

const CartSingleItem = ({ refListProduct, update, reset, id, product }) => {
  const [stateDel, setStateDel] = useState(true);
  const deleted = useRef(false);
  const quantity = useRef(product.quantity);
  useEffect(() => {
    function addListProduct() {
      let item = {
        [id]: { quantity: quantity.current },
      };
      if (deleted.current) {
        refListProduct.current.deleted = {
          ...refListProduct.current.deleted,
          ...item,
        };
        return;
      }
      if (quantity.current !== product.quantity) {
        refListProduct.current.add = { ...refListProduct.current.add, ...item };
        return;
      }
    }
    addListProduct();
  }, [update]);

  useEffect(() => {
    deleted.current = false;
    setStateDel(true);
  }, [reset]);

  return (
    <>
      {stateDel ? (
        <>
          <td className="product_remove">
            <Link to="">
              <RiDeleteBin6Line
                onClick={() => {
                  deleted.current = true;
                  setStateDel(false);
                }}
              />
            </Link>
          </td>
          <td className="product_thumb">
            <a href="product-details-default.html">
              <img
                src="assets/images/products_images/aments_products_image_2.jpg"
                alt=""
              />
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
                  quantity.current = value;
                }}
              />
            </div>
          </td>
          <td className="product_total">$180.00</td>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const CartTable = () => {
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_NAME.CART]);
  const cookieCart = new Cookie(cookies);
  const listProduct = useRef({ add: {}, deleted: {} });
  const [update, setUpdate] = useState(1);
  const [reset, setRest] = useState(1);
  useEffect(() => {
    let objectAddEmpty = isEmpty(listProduct.current.add);
    let objectDeletedEmpty = isEmpty(listProduct.current.deleted);

    if (!objectAddEmpty || !objectDeletedEmpty) {
      let expires = new Date();
      expires.setTime(expires.getTime() + COOKIE_EXPIRES * 1000);

      if (!objectDeletedEmpty) {
        cookieCart.removeItem(listProduct.current.deleted);
      }
      if (!objectAddEmpty) {
        cookieCart.addItem(listProduct.current.add);
      }
      if (isEmpty(cookieCart.getCart())) removeCookie(COOKIE_NAME.CART);
      else {
        setCookie(COOKIE_NAME.CART, cookieCart.getCart(), {
          path: COOKIE_PATH,
          expires,
        });
      }
      listProduct.current.add = {};
      listProduct.current.deleted = {};
    }
  }, [update]);

  useEffect(() => {
    listProduct.current.add = {};
    listProduct.current.deleted = {};
  }, [reset]);

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
                        <th className="product_remove">Delete</th>
                        <th className="product_thumb">Image</th>
                        <th className="product_name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product_quantity">Quantity</th>
                        <th className="product_total">Total</th>
                      </tr>
                    </thead>
                    {/* End Cart Table Head */}
                    <tbody>
                      {/* Start Cart Single Item*/}
                      {Object.keys(cookieCart.getCart()).map((key) => {
                        return (
                          <tr key={key}>
                            <CartSingleItem
                              refListProduct={listProduct}
                              update={update}
                              reset={reset}
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
                <div className="cart_submit">
                  <button onClick={() => setUpdate(update * -1)}>Lưu</button>
                </div>
                <div className="cart_submit">
                  <button onClick={() => setRest(reset * -1)}>Quay lại</button>
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
