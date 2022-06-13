import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./arrow";
import ProductSingle from "../product-single";
import SectionTitle from "../section-title";

const settings = {
  adaptiveHeight: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 3,
  variableWidth: false,
  nextArrow: <NextArrow id="arrowCarousel" />,
  prevArrow: <PrevArrow id="arrowCarousel" />,
};
const product = [
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
  {
    id_product: 1,
    price: 1000000,
    discount: 10,
    title: "New Balance Fresh Foam Kaymin Car Purts ",
    meta_title: "new-balance-fresh-foam-kaymin-car-purts",
    detail: true,
    rate: 5,
    reviews: 14000,
  },
];
const TabWrapper = () => {
  return (
    <>
      {/* Start Tab Wrapper */}
      <div
        className="product-tab-wrapper"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content tab-animate-zoom">
                <div
                  className="product-default-slider product-default-slider-4grids-1row"
                  id="hoverCarousel"
                >
                  <Slider {...settings}>
                    {product.map((element, key) => {
                      return <ProductSingle key={key} product={element} />;
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Catagory Wrapper */}
    </>
  );
};

const Carousel = () => {
  return (
    <>
      {/* ...:::: Start Product Tab Section:::... */}
      <div className="product-tab-section section-top-gap-100">
        {/* Start Section Content */}
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <SectionTitle content="Sản phẩm" />
            </div>
          </div>
        </div>
        {/* End Section Content */}
        {/* Start Tab Wrapper */}
        <TabWrapper />
        {/* End Catagory Wrapper */}
      </div>
      {/* ...:::: End Product Tab Section:::... */}
    </>
  );
};

export default Carousel;
