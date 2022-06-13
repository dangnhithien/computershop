import React from "react";

import Slider from "react-slick";
import BannerSingle from "./bannerSingle";
import SliderSingle from "./sliderSingle";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  autoplay: true,
};
const Banner = () => {
  return (
    <>
      {/* ...:::: Start Banner & Hero Area Section:::... */}
      <div className="banner-and-hero-area-section ">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-4">
              <div className="banner-sidebar mt-30">
                <BannerSingle />
                <BannerSingle />
              </div>
            </div>
            <div className="col-lg-8">
              {/* ...:::: Start Hero Area Section:::... */}
              <div className="hero-area-wrapper hero-slider-dots fix-slider-dots">
                <Slider {...settings}>
                  <SliderSingle />
                  <SliderSingle />
                  <SliderSingle />
                </Slider>
              </div>
              {/* ...:::: End Hero Area Section:::... */}
            </div>
          </div>
        </div>
      </div>
      {/* ...:::: End Banner & Hero Area Section:::... */}
    </>
  );
};

export default Banner;
