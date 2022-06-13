import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/products_images/product2.jpg";
import SectionTitle from "../../../components/section-title";

const CategorySingle = () => {
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
        {/* Start Product Catagory Single */}
        <Link
          to="/product"
          className="product-catagory-single"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="product-catagory-img">
            <img src={img} alt="" />
          </div>
          <div className="product-catagory-content">
            <h5 className="product-catagory-title">Parts Box</h5>
          </div>
        </Link>
        {/* End Product Catagory Single */}
      </div>
    </>
  );
};

const Categories = () => {
  return (
    <>
      {/* ...:::: Start Product Catagory Section:::... */}
      <div className="product-catagory-section section-top-gap-100">
        {/* Start Section Content */}
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <SectionTitle content="Popular Categories" />
            </div>
          </div>
        </div>
        {/* End Section Content */}
        {/* Start Catagory Wrapper */}
        <div className="product-catagory-wrapper">
          <div className="container">
            <div className="row">
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
              <CategorySingle />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* ...:::: End Product Catagory Section:::... */}
    </>
  );
};

export default Categories;
