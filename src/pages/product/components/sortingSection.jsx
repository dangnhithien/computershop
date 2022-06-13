import React from "react";
import SelectOption from "../../../components/selectOption";

const PageAmount = () => {
  return (
    <>
      <div className="page-amount">
        <span>Showing 1–9 of 21 results</span>
      </div>
    </>
  );
};
const SortingSection = () => {
  return (
    <>
      {/* Start Shop Product Sorting Section */}
      <div className="shop-sort-section" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            {/* Start Sort Wrapper Box */}
            <div className="sort-box d-flex justify-content-between align-items-center flex-wrap">
              {/* Start Sort Select Option */}
              <SelectOption />
              {/* End Sort Select Option */}
              {/* Start Page Amount */}
              <PageAmount />
              {/* End Page Amount */}
            </div>{" "}
            {/* Start Sort Wrapper Box */}
          </div>
        </div>
      </div>{" "}
      {/* End Section Content */}
    </>
  );
};
export default SortingSection;
