import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./arrow";

import { useState } from "react";
import ProductSingle from "../product-card/product-single";
import { Col, Row } from "antd";
import styled from "styled-components";
const StyleCarousel = styled.div`
  margin-top: 12px;
  &:hover .arrow-carousel {
    visibility: visible;
    transition: all 1s ease-in;
  }

  h4 {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    color: #155263;
    margin: 0;
    margin-left: 5px;
    border-bottom: 2px solid #ff9a3c;
  }
  .arrow-carousel {
    visibility: hidden;
    font-size: 30px;
    display: block;
    z-index: 15;
    height: 50px;
    width: 50px;
    opacity: 1;
    color: #ffc93c;
    position: absolute;
    cursor: pointer;
    top: 40%;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffc93c;
    &:hover {
      color: #ff6f3c;
    }
  }
`;
const settings = {
  adaptiveHeight: true,
  autoplay: true,
  infinite: true,
  pauseOnFocus: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 3,
  variableWidth: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const image = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSGmO7Y4gMOqvdlR2B620ahMk667pCQOcvQ&usqp=CAU",
];
const Carousel = ({ data, title = "" }) => {
  // const data = [
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     detail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "https://picsum.photos/300/600",
  //   },
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     detail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "https://picsum.photos/300/600",
  //   },
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     detail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "https://picsum.photos/300/600",
  //   },
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     detail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "https://picsum.photos/300/600",
  //   },
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     detail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "https://picsum.photos/300/600",
  //   },
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     detail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "https://picsum.photos/300/600",
  //   },
  // ];
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
                        <ProductSingle item={item} key={key} index={key} />
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
