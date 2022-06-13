import React from "react";

import img1 from "../../../assets/images/banner_images/banner-img770x496.jpg";

const SliderSingle = () => {
  return (
    <>
      {/* Start Hero Slider Single */}
      <div className="hero-area-single">
        <div className="hero-area-bg-2">
          <img className="hero-img-2" src={img1} alt="" />
        </div>
        <div className="hero-content hero-content-2">
          <div className="row">
            <div className="col-10 col-md-8 col-xl-6 offset-1">
              <h5>World Best Quality</h5>
              <h2>Car Parts</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet consectet</p>
              <a href="product-details-default.html" className="hero-button">
                Shopping Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Slider Single */}
    </>
  );
};

export default SliderSingle;
