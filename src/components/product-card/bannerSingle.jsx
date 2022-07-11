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
              src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/31/637528312545554606_F-C1_1200x300.png"
              alt=""
            />
          </Link>
          {/* <div className="banner-content">
            <h3 className="banner-text-large">30% Off</h3>
            <Link to={PATH.PRODUCT} className="banner-link">
              Đến xem ngay
            </Link>
          </div> */}
        </div>
      </StyleBannerSingle>
    </>
  );
};

export default BannerSingle;
