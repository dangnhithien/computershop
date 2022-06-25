import React, { useState } from "react";
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
  background-color: #fff;
  padding: 10px;
`;
const ContainerRibbon = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  .ribbon-custom {
    font-size: 16px;
    font-weight: 500;
  }
  .ant-ribbon-text {
    padding: 5px;
  }

  .title {
    min-height: 65px;
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: black;
    padding: 10px 0;
  }
`;

const ProductSingle = ({ item }) => {
  // const item = {
  //   id: "",
  //   slug: "",
  //   amount: 1000000,
  //   promotion: 10,
  //   name: "New Balance Fresh Foam Kaymin Car Purts ",
  //   detail: "new-balance-fresh-foam-kaymin-car-purts",
  //   rate: 4,
  //   countRate: 5,
  //   imageUrl: "",
  // };
  return (
    <>
      {item ? (
        <div
          className="product-default-single "
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <ContainerRibbon>
            <Badge.Ribbon
              text={item.promotion + "%"}
              color="red"
              className="ribbon-custom"
            >
              <div className="product-img-warp">
                <Link to="" className="product-default-img-link">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="product-default-img img-fluid"
                  />
                </Link>
              </div>
            </Badge.Ribbon>
            <Content>
              <div className="product-review">
                <RateCustom value={item.rate} rates={item.countRate} />
              </div>

              <Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: false,
                }}
              >
                <Link to={"/" + item.slug} className="title">
                  {item.name}
                </Link>
              </Paragraph>

              <div
                className="product-default-detail"
                style={{ marginTop: "-15px" }}
              >
                <ul>
                  <li>CPU: Intel Core i5 1135G7</li>

                  <li>RAM: 4GB</li>

                  <li>Ổ cứng: 256GB SSD</li>
                </ul>
              </div>
              <Price>
                <div className="promotion-group">
                  Giá gốc :
                  <del className="price-off">{item.productPrices}₫</del>
                </div>
                <div className="price">
                  {item.productPrices && item.promotion
                    ? (item.productPrices *
                        (100 - item.promotion ? item.promotion : 0)) /
                      100
                    : "null"}
                  ₫
                </div>
                <div className="btn-cart">
                  <GiShoppingCart />
                </div>
              </Price>
            </Content>
          </ContainerRibbon>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductSingle;
