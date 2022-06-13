import React, { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 250;
  }, []);
  return (
    <>
      {/* ...:::: Start Error Section :::... */}
      <div className="error-section">
        <div className="container">
          <div className="row pt-100">
            <div className="error_form">
              <h1 data-aos="fade-up" data-aos-delay="0">
                404
              </h1>
              <h4 data-aos="fade-up" data-aos-delay="200">
                Opps! PAGE NOT BE FOUND
              </h4>
              <p data-aos="fade-up" data-aos-delay="400">
                Sorry but the page you are looking for does not exist, have been
                <br /> removed, name changed or is temporarily unavailable.
              </p>
              <div className="row">
                <div className="col-10 offset-1 col-md-6 offset-md-3">
                  <div
                    className="default-search-style d-flex"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <input
                      className="default-search-style-input-box border-around border-right-none"
                      type="search"
                      placeholder="Search entire store here ..."
                      required
                    />
                    <button
                      className="default-search-style-input-btn"
                      type="submit"
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>
                  <a href="index.html" data-aos="fade-up" data-aos-delay="800">
                    Back to home page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* ...:::: End Error Section :::... */}
    </>
  );
};
export default ErrorPage;
