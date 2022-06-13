import React from "react";
import img from "../assets/images/products_images/product1.jpg";
import RateCustom from "./rateCustom";
import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";

import { Badge, Typography } from "antd";
import { Link } from "react-router-dom";

const { Paragraph } = Typography;

const Price = styled.div`
  position: relative;
  .btn-cart {
    position: absolute;
    left: 0px;
    bottom: -5px;
    font-size: 40px;
    color: #c1c1c1;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  .promotion-group {
    font-size: 14px;
    text-align: right;
    color: #929292;
    font-weight: 500;
  }
  .price-off {
    color: #929292;
  }
  .discount-price {
    margin-left: 5px;
  }
  .price {
    font-size: 22px;
    font-weight: 500px;
    color: #51c390;
    text-align: right;
  }
`;

const Content = styled.div`
  background-color: #f1f1f154;
  padding: 10px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;
const ContainerRibbon = styled.div`
  .ribbon-custom {
    font-size: 16px;
    font-weight: 500;
  }
  .ant-ribbon-text {
    padding: 5px;
  }
`;

const ProductSingle = ({ product }) => {
  const { price, discount, title, meta_title, detail, rate, reviews } = product;
  return (
    <>
      {/* Start Product Defautlt Single */}
      <div
        className="product-default-single "
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <ContainerRibbon>
          <Badge.Ribbon
            text={discount + "%"}
            color="red"
            className="ribbon-custom"
          >
            <div className="product-img-warp">
              <Link to="" className="product-default-img-link">
                <img
                  src={img}
                  alt=""
                  className="product-default-img img-fluid"
                />
              </Link>
            </div>
          </Badge.Ribbon>
          <Content>
            <div className="product-review">
              <RateCustom value={rate} rates={reviews} />
            </div>

            <Paragraph
              ellipsis={{
                rows: 2,
              }}
            >
              <h6 className="product-default-link">
                <Link to={"/" + meta_title}>{title}</Link>
              </h6>
            </Paragraph>

            <div className="product-default-detail">
              {detail ? (
                <ul>
                  <li>CPU: Intel Core i5 1135G7</li>

                  <li>RAM: 4GB</li>

                  <li>Ổ cứng: 256GB SSD</li>

                  <li>VGA: Onboard</li>

                  <li>Màn hình: 15.6 inch FHD</li>

                  <li>HĐH: Fedora</li>

                  <li>Màu: Đen</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <Price>
              <div className="promotion-group">
                Giá gốc :<del className="price-off">{price}₫</del>
              </div>
              <div className="price">{(price * (100 - discount)) / 100}₫</div>
              <div className="btn-cart">
                <GiShoppingCart />
              </div>
            </Price>
          </Content>
        </ContainerRibbon>
      </div>
      {/* End Product Defautlt Single */}
    </>
  );
};

export default ProductSingle;
