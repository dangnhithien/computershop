import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import styled from "styled-components";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const StyleCarousel = styled.div`
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover,
  .ant-carousel .slick-prev:focus,
  .ant-carousel .slick-next:focus {
    font-size: inherit;
    color: currentColor !important;
  }

  .ant-carousel .slick-prev::before {
    color: currentColor !important;
  }

  .slick-arrow.slick-prev {
    font-size: 20px !important;
  }

  .ant-carousel .slick-next::before {
    color: currentColor !important;
  }

  .slick-arrow.slick-next {
    font-size: 20px !important;
  }
`;

const Suggest = () => {
  return (
    <>
      <StyleCarousel>
        <Carousel
          dots={false}
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </StyleCarousel>
    </>
  );
};

export default Suggest;
