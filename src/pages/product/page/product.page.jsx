import React from "react";
import Carousel from "../../../components/carousel/carousel";

import GirdViewProduct from "../components/girdViewProduct";
import Sidebar from "../components/sidebar";

const Product = () => {
  return (
    <>
      {/* ...:::: Start Shop Section:::... */}
      <div className="shop-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row pt-20">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <GirdViewProduct />
            <Carousel />
          </div>
        </div>
      </div>{" "}
      {/* ...:::: End Shop Section:::... */}
    </>
  );
};

export default Product;
