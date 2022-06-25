import Slider from "react-slick";
import SectionTitle from "../section-title";
import { NextArrow, PrevArrow } from "./arrow";

import { useState } from "react";
import ProductSingle from "../product-single";

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

const Carousel = ({ data }) => {
  // const [data, setData] = useState([
  //   {
  //     id: "",
  //     slug: "",
  //     amount: 1000000,
  //     promotion: 10,
  //     name: "New Balance Fresh Foam Kaymin Car Purts ",
  //     deail: "new-balance-fresh-foam-kaymin-car-purts",
  //     rate: 4,
  //     countRate: 5,
  //     imageUrl: "",
  //   },
  // ]);
  return (
    <>
      <div className="product-tab-section section-top-gap-100">
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <SectionTitle content="Sản phẩm" />
            </div>
          </div>
        </div>

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
                      {data?.map((item, key) => {
                        return (
                          <>
                            <ProductSingle item={item} key={key} />
                          </>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
