import Slider from "react-slick";

import { Col, Row } from "antd";
import styled from "styled-components";
import ProductSingle from "../../components/product-card/product-single";
import { Typography } from "antd";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
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
    display: inline-block;
  }
  .arrow-carousel {
    /* visibility: hidden; */
    font-size: 20px;
    display: block;
    z-index: 15;
    height: 30px;
    width: 30px;
    opacity: 1;
    color: #c3c3c3;
    border: 1px solid;
    position: absolute;
    cursor: pointer;
    top: -12%;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #ff6a3c;
      color: #fff;
    }
  }
`;
const NextArrow = (props) => {
  const { className, style, onClick } = props;
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
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      id={props.id}
      style={{
        right: 35,
      }}
      className="arrow-carousel"
      onClick={onClick}
    >
      <MdOutlineArrowBackIos />
    </div>
  );
};
const settings = {
  adaptiveHeight: true,
  // autoplay: true,
  infinite: true,
  pauseOnFocus: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const CarouselPoster = ({ title = "Danh mục ưu thích" }) => {
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
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <img
                src="https://static.lenovo.com/id/in/merch/festive-sale/Festive-mob-banner.jpg?R"
                alt=""
                style={{ height: "100%" }}
              />
            </Col>
            <Col span={18}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Title level={3} className="title">
                    {title}
                  </Title>
                </Col>

                <Col span={24}>
                  <Slider {...settings}>
                    {data?.map((item, key) => {
                      return (
                        <>
                          <div key={key} style={{ margin: "5px 5px" }}>
                            <ProductSingle item={item} index={key} />
                          </div>
                        </>
                      );
                    })}
                  </Slider>
                </Col>
              </Row>
            </Col>
          </Row>
        </StyleCarousel>
      </div>
    </>
  );
};

export default CarouselPoster;
