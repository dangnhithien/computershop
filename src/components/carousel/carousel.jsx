import Slider from "react-slick";

import { Col, Row, Typography } from "antd";
import useProduct from "hooks/useProduct";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import styled from "styled-components";
import ProductSingle from "../product-card/product-single";
const { Title } = Typography;
const StyleCarousel = styled.div`
  margin-top: 12px;
  &:hover .arrow-carousel {
    visibility: visible;
    transition: all 1s ease-in;
  }
  .title {
    padding-bottom: 7px;
    border-bottom: 2px solid #ff6a3c;
    font-size: 20px;
    font-weight: 500;
  }
  .arrow-carousel {
    visibility: hidden;
    font-size: 25px;
    display: block;
    z-index: 15;
    height: 50px;
    width: 50px;
    opacity: 1;
    color: #ffc93c;
    position: absolute;
    cursor: pointer;
    top: 40%;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #ff6f3c;
    }
  }
`;
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      id={props.id}
      style={{
        right: 0,
      }}
      className="arrow-carousel"
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      id={props.id}
      style={{
        left: 0,
      }}
      className="arrow-carousel"
      onClick={onClick}
    >
      <MdOutlineArrowBackIos />
    </div>
  );
}

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
const Carousel = ({ requestBody, title = "" }) => {
  const {
    products: { data },
  } = useProduct(requestBody);
  return (
    data.length > 0 && (
      <div className="container">
        <StyleCarousel>
          <Row gutter={[24, 0]}>
            <Col>
              <Title level={3} className="title">
                git
                {title}
              </Title>
            </Col>
            <Col span={24}>
              <Slider {...settings}>
                {data.map((item, key) => {
                  return (
                    <>
                      <ProductSingle
                        item={item}
                        index={key}
                        key={key + "abc"}
                        style={{ margin: "5px 5px" }}
                      />
                    </>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </StyleCarousel>
      </div>
    )
  );
};

export default Carousel;
