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
      <div className="shop-sort-section" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            <div className="sort-box d-flex justify-content-between align-items-center flex-wrap">
              <SelectOption />

              <PageAmount />
            </div>{" "}
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default SortingSection;
