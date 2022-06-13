import React from "react";

export const SectionTitle = (props) => {
  return (
    <div className="section-content d-flex justify-content-center">
      <h3 className="section-title" data-aos="fade-up" data-aos-delay="50">
        {props.content}
      </h3>
    </div>
  );
};

export default SectionTitle;
