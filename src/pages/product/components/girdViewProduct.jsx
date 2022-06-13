import React from "react";
import ProductSingle from "../../../components/product-single";
import Pagination from "../../../components/pagination";
const product = {
  id: 1,
  price: 1000000,
  discount: 10,
  title: "New Balance Fresh Foam Kaymin Car Purts ",
  meta_title: "new-balance-fresh-foam-kaymin-car-purts",
  detail: true,
  rate: 5,
  reviews: 14000,
};
const GirdViewProduct = () => {
  return (
    <>
      <div className="col-lg-9 px-0">
        {/* Start Tab Wrapper */}
        <div className="sort-product-tab-wrapper">
          <div className="container px-0">
            <div className="row">
              <div className="col-12">
                <div className="tab-content tab-animate-zoom">
                  <div
                    className="tab-pane active show sort-layout-single"
                    id="layout-3-grid"
                  >
                    <div className="row mx-0 ">
                      <div className="col-xl-3 col-sm-6 col-12 px-0">
                        <ProductSingle product={product} />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Tab Wrapper */}
        <Pagination />
      </div>{" "}
    </>
  );
};

export default GirdViewProduct;
