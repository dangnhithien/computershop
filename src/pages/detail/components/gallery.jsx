import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import { NextArrow, PrevArrow } from "../../../components/carousel/arrow";
import img from "../../../assets/images/banner_images/banner-img2770x496.jpg";

const Gallery = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      <div
        className="product-details-gallery-area"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="product-large-image product-large-image-horaizontal">
          <Slider asNavFor={nav2} ref={(c) => setNav1(c)}>
            <div className="product-image-large-single zoom-image-hover">
              <img src={img} alt="" />
            </div>
            <div className="product-image-large-single zoom-image-hover">
              <img src={img} alt="" />
            </div>
            <div className="product-image-large-single zoom-image-hover">
              <img src={img} alt="" />
            </div>
            <div className="product-image-large-single zoom-image-hover">
              <img src={img} alt="" />
            </div>
            <div className="product-image-large-single zoom-image-hover">
              <img src={img} alt="" />
            </div>
            <div className="product-image-large-single zoom-image-hover">
              <img src={img} alt="" />
            </div>
          </Slider>
        </div>
        <div
          className="product-image-thumb product-image-thumb-horizontal pos-relative"
          id="hoverGallery"
        >
          <Slider
            asNavFor={nav1}
            ref={(c) => setNav2(c)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            nextArrow={<NextArrow id="arrowGallery" />}
            prevArrow={<PrevArrow id="arrowGallery" />}
          >
            <div className="zoom-active product-image-thumb-single">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="product-image-thumb-single">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="product-image-thumb-single">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="product-image-thumb-single">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="product-image-thumb-single">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="product-image-thumb-single">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Gallery;
