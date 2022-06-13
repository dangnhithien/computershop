import React from "react";

const Pagination = () => {
  return (
    <>
      {/* Start Pagination */}
      <div
        className="page-pagination text-center"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <ul>
          <li>
            <a href="#">Previous</a>
          </li>
          <li>
            <a className="active" href="#">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul>
      </div>{" "}
      {/* End Pagination */}
    </>
  );
};

export default Pagination;
