import React from "react";

import { Link } from "react-router-dom";
import { PATH } from "../../utils/const";
import { StyleBannerSingle } from "./style/style";

const BannerSingle = (props) => {
  //  props = {
  //     linkimg: "",
  //     nameProduct:"",
  //     promotionPrice:"",
  //     linkDetailPorduct:""
  // }
  return (
    <>
      <StyleBannerSingle>
        <div className="banner-single mb-30">
          <Link to={PATH.PRODUCT} className="banner-img-link">
            <img
              className="banner-img"
              src="https://picsum.photos/1200/300"
              alt=""
            />
          </Link>
          <div className="banner-content">
            <span className="banner-text-tiny">Car Wheel</span>
            <h3 className="banner-text-large">30% Off</h3>
            <Link to={PATH.PRODUCT} className="banner-link">
              Đến xem ngay
            </Link>
          </div>
        </div>
      </StyleBannerSingle>
    </>
  );
};

export default BannerSingle;
