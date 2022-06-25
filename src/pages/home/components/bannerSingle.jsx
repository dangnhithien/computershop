import React from "react";
import img2 from "../../../assets/images/banner_images/banner-img2770x496.jpg";
import { Link } from "react-router-dom";

const BannerSingle = (props) => {
  //  props = {
  //     linkimg: "",
  //     nameProduct:"",
  //     promotionPrice:"",
  //     linkDetailPorduct:""
  // }
  return (
    <>
      <div
        className="banner-single mb-30"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <Link to="product" className="banner-img-link">
          <img className="banner-img" src={img2} alt="" />
        </Link>
        <div className="banner-content">
          <span className="banner-text-tiny">Car Wheel</span>
          <h3 className="banner-text-large">30% Off</h3>
          <Link to="product" className="banner-link">
            Mua ngay
          </Link>
        </div>
      </div>
    </>
  );
};

export default BannerSingle;
