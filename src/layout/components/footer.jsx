import React from "react";

const Footer = () => {
  return (
    <>
      {/* ...:::: Start Footer Section:::... */}
      <footer className="footer-section section-top-gap-100">
        {/* Start Footer Top Area */}
        <div className="footer-top section-inner-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-5">
                <div
                  className="footer-widget footer-widget-contact"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="footer-contact">
                    <p>
                      We are a team of designers and developers that create high
                      quality Magento, Prestashop, Opencart...
                    </p>
                    <div className="customer-support">
                      <div className="customer-support-icon">
                        <img src="assets/images/icon/support-icon.png" alt="" />
                      </div>
                      <div className="customer-support-text">
                        <span>Customer Support</span>
                        <a
                          className="customer-support-text-phone"
                          href="tel:(08)123456789"
                        >
                          (08) 123 456 789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-7">
                <div
                  className="footer-widget footer-widget-subscribe"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 className="footer-widget-title">
                    Subscribe newsletter to get updated
                  </h3>
                  <form action="#" method="post">
                    <div className="footer-subscribe-box default-search-style d-flex">
                      <input
                        className="default-search-style-input-box border-around border-right-none subscribe-form"
                        type="email"
                        placeholder="Search entire store here ..."
                        required
                      />
                      <button
                        className="default-search-style-input-btn"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <p className="footer-widget-subscribe-note">
                    We’ll never share your email address <br /> with a
                    third-party.
                  </p>
                  <ul className="footer-social">
                    <li>
                      <a href="" className="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="youtube">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="pinterest">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="instagram">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div
                  className="footer-widget footer-widget-menu"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h3 className="footer-widget-title">Information</h3>
                  <div className="footer-menu">
                    <ul className="footer-menu-nav">
                      <li>
                        <a href="">Delivery</a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact us</a>
                      </li>
                      <li>
                        <a href="">Stores</a>
                      </li>
                    </ul>
                    <ul className="footer-menu-nav">
                      <li>
                        <a href="">Legal Notice</a>
                      </li>
                      <li>
                        <a href="">Secure payment</a>
                      </li>
                      <li>
                        <a href="">Sitemap</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Footer Top Area */}
        {/* Start Footer Bottom Area */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-area">
                  <p className="copyright-area-text">
                    Copyright &copy; 2021{" "}
                    <a className="copyright-link" href="https://hasthemes.com/">
                      Hasthemes
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer-payment">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="assets/images/icon/payment-icon.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Footer Bottom Area */}
      </footer>{" "}
      {/* ...:::: End Footer Section:::... */}
    </>
  );
};

export default Footer;
