import React from "react";
import Banner from "../components/banner";
import Carousel from "../../../components/carousel/carousel";
import Category from "../components/categories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSingle from "../components/bannerSingle";
const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Carousel />
      {/* ...:::: Start Product Catagory Section:::... */}
      <div className="banner-section section-top-gap-100">
        {/* Start Banner Wrapper */}
        <div className="banner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <BannerSingle />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Banner Wrapper */}
      </div>{" "}
      {/* ...:::: End Product Catagory Section:::... */}
      {/* ...:::: End Banner Section:::... */}
      <Carousel />
    </>
  );
};
export default Home;
