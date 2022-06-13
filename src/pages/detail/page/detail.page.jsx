import React from "react";
import Gallery from "../components/gallery";
import Quantity from "../components/quantity";
import {
  Cookie,
  COOKIE_NAME,
  COOKIE_PATH,
  COOKIE_EXPIRES,
} from "../../../utils/cookie";
import { useCookies } from "react-cookie";

import Comments from "../../../components/comment";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import { FaFacebookMessenger, FaFacebook } from "react-icons/fa";
import RateCustom from "../../../components/rateCustom";

const Price = styled.div`
  .price {
    font-size: 14px;
    margin-top: 20px;
    color: #8a8a8a;
  }
  .number {
    color: #51c390;
    font-size: 25px;
    font-weight: 500;
    margin-left: 10px;
  }
  .promotion {
    color: #757575;
    display: flex;
    align-items: center;
  }

  .promotion-price {
    padding: 10px 10px 10px 0;
    background-color: #f5f6ff;
    display: flex;
    align-items: center;
  }
  .discount-price {
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .zizag {
    color: #fff;
    background-color: red;
    position: relative;
    padding: 2px 15px;
    font-size: 18px;
    font-weight: 700;
    &:before {
      background: linear-gradient(-137deg, #ff0000 6px, transparent 0) 0 5px,
        linear-gradient(320deg, #ff0000 5px, #fff 0) 0 5px;
      background-position: left bottom;
      background-repeat: repeat-y;
      background-size: 8px 8px;
      content: " ";
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
    &:after {
      background: linear-gradient(49deg, #ff0000 6px, transparent 0) 0 5px,
        linear-gradient(142deg, #ff0000 5px, #fff 0) 0 5px;
      background-position: right bottom;
      background-repeat: repeat-y;
      background-size: 8px 8px;
      content: " ";
      display: block;
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 100%;
      height: 100%;
    }
  }
`;
const IconHeart = styled.div`
  display: inline-block;
  color: red;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100px;
  .icon-heart {
    font-size: 25px;
  }
  .text {
    margin-left: 5px;
  }
  &:hover {
    color: #51c390;
  }
`;
const Social = styled.div`
  display: inline-block;
  font-size: 25px;
  .social {
  }
  .icon-social {
    margin-left: 10px;
  }
  .icon-facebook {
    color: #3b5999;
  }
  .icon-messenger {
    color: #0384ff;
  }
  .icon-twitter {
    color: #10c2ff;
  }
`;
const PRODUCT = {
  1: {
    quantity: 1,
  },
  2: {
    quantity: 1,
  },
  3: {
    quantity: 1,
  },
  4: {
    quantity: 1,
  },
  5: {
    quantity: 1,
  },
  6: {
    quantity: 1,
  },
  7: {
    quantity: 1,
  },
  8: {
    quantity: 1,
  },
};

const Detail = () => {
  const [cookies, setCookie] = useCookies([COOKIE_NAME.CART]);

  function revieceProduct(product) {
    let expires = new Date();
    expires.setTime(expires.getTime() + COOKIE_EXPIRES * 1000);
    const cartCookie = new Cookie(cookies);
    cartCookie.addItem(product);

    setCookie(COOKIE_NAME.CART, cartCookie.getCart(), {
      path: COOKIE_PATH,
      expires,
    });
  }

  return (
    <>
      {/* Start Product Details Section */}
      <div className="product-details-section">
        <div className="container">
          <div className="row pt-100">
            <div className="col-md-6">
              <Gallery />
            </div>
            <div className="col-md-6">
              <div
                className="product-details-content-area"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Start  Product Details Text Area*/}
                <div className="product-details-text">
                  <h4 className="title">
                    Laptop Dell Latitude 3420 (L3420I3SSD) chính hãng{" "}
                  </h4>
                  <div className=" align-items-center">
                    <div className="product-review">
                      <RateCustom size="20" value={4.5} rates={13567} />
                    </div>
                  </div>
                  <Price>
                    <div className="price">
                      <p>
                        Giá gốc: <del>10.000.000 đ</del>
                      </p>

                      <div className="promotion">
                        <div className=" promotion-price">
                          <span className="number">9.000.000 đ</span>
                        </div>
                        <div className="discount-price">
                          <div>
                            Ưu đãi:
                            <span className="number zizag ">10%</span>
                          </div>
                          <div>
                            Tiết kiệm đến:
                            <span className="number">1 triệu </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Price>
                  <div>
                    <p>
                      Laptop Dell Latitude 3420 được thiết kế với kiểu dáng đơn
                      giản, cứng cáp, sản phẩm có trọng lượng tương đối nhẹ để
                      bạn dễ dàng mang theo bên mình Được trang bị bộ vi xử lý
                      Intel Core i3 1115G4, RAM 8GB mang đến cho doanh nghiệp
                      hiệu suất, khả năng quản lý, các tính năng bảo mật tích
                      hợp sẵn. Ổ cứng có dung lượng lớn để bạn lưu trữ được các
                      dữ liệu cần thiết hoặc SSD sẽ giúp khởi động máy nhanh
                      chóng
                    </p>

                    <strong>Thông số sản phẩm</strong>
                    <ul>
                      <li> CPU: Intel Core i3 1115G4 </li>
                      <li>RAM: 8GB</li>
                      <li>Ổ cứng: 256GB SSD</li>
                      <li>VGA: Onboard</li>
                      <li>Màn hình: 14.0 inch HD</li>
                      <li>HĐH: Fedora</li>
                      <li>Màu: Đen</li>
                    </ul>
                  </div>
                </div>{" "}
                {/* End  Product Details Text Area*/}
                <Quantity handleCookie={revieceProduct} data={PRODUCT} />
                <IconHeart>
                  <AiOutlineHeart className="icon-heart" />
                  <span className="text">Yêu thích</span>
                </IconHeart>
                <Social>
                  <FaFacebookMessenger className="icon-messenger icon-social" />
                  <FaFacebook className="icon-facebook icon-social" />
                  <BsTwitter className="icon-twitter icon-social" />
                </Social>
                <div></div>
              </div>
            </div>
          </div>
          <Comments />
        </div>
      </div>{" "}
      {/* End Product Details Section */}
    </>
  );
};

export default Detail;
