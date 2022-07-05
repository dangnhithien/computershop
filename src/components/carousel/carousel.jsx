import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./arrow";

import { useState } from "react";
import ProductSingle from "../product-card/product-single";
import { Col, Row } from "antd";
import styled from "styled-components";
const StyleCarousel = styled.div`
  margin-top: 12px;

  h4 {
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ff6f3c;
    margin: 0;
    margin-left: 5px;
  }
  .arrow-carousel {
    font-size: 45px;
    display: block;
    z-index: 15;
    height: 60px;
    width: 60px;
    opacity: 1;
    color: #c1c1c1;
    position: absolute;
    cursor: pointer;
    top: 40%;
    &:hover {
      color: #ff6f3c;
    }
  }
`;
const settings = {
  adaptiveHeight: true,
  // autoplay: true,
  infinite: true,
  pauseOnFocus: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 3,
  variableWidth: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Carousel = ({ datas, title = "" }) => {
  const data = [
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
  ];
  return (
    <>
      <div className="container">
        <StyleCarousel>
          <Row gutter={[24, 0]}>
            <Col>
              <h4>{title}</h4>
            </Col>
            <Col span={24}>
              <Slider {...settings}>
                {data?.map((item, key) => {
                  return (
                    <>
                      <div style={{ margin: "5px 5px" }}>
                        <ProductSingle item={item} key={key} />
                      </div>
                    </>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </StyleCarousel>
      </div>
    </>
  );
};

export default Carousel;
