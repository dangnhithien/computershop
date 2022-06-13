import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
const HeaderBottom = (props) => {
  // const [scroll, setScroll] = useState(0);
  // const { y: pageYOffset } = useWindowScroll();

  // const STICKY = "sticky";
  // const changeClassname = (pos) => {
  //   if (pos >= props.height) return STICKY;
  //   else return "";
  // };
  // useEffect(() => {
  //   setScroll(pageYOffset);
  // }, [pageYOffset]);

  {
    /*${changeClassname(scroll)} */
  }
  return (
    <>
      {/* Start Bottom Area */}
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Header Main Menu */}
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <a className="active main-menu-link" href="index.html">
                        Home <i className="fa fa-angle-down"></i>
                      </a>
                    </li>
                    <li className="has-dropdown has-megaitem">
                      <a href="product-details-default.html">
                        Shop <i className="fa fa-angle-down"></i>
                      </a>
                      {/* Mega Menu */}
                      <div className="mega-menu">
                        <ul className="mega-menu-inner">
                          {/* Mega Menu Sub Link */}
                          <li className="mega-menu-item">
                            <a href="#" className="mega-menu-item-title">
                              Shop Layouts
                            </a>
                            <ul className="mega-menu-sub">
                              <li>
                                <a href="shop-grid-sidebar-left.html">
                                  Grid Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-sidebar-right.html">
                                  Grid Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-full-width.html">Full Width</a>
                              </li>
                              <li>
                                <a href="shop-list-sidebar-left.html">
                                  List Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-sidebar-right.html">
                                  List Right Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* Mega Menu Sub Link */}
                          <li className="mega-menu-item">
                            <a href="#" className="mega-menu-item-title">
                              Other Pages
                            </a>
                            <ul className="mega-menu-sub">
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="compare.html">Compare</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                            </ul>
                          </li>
                          {/* Mega Menu Sub Link */}
                          <li className="mega-menu-item">
                            <a href="#" className="mega-menu-item-title">
                              Product Types
                            </a>
                            <ul className="mega-menu-sub">
                              <li>
                                <a href="product-details-default.html">
                                  Product Default
                                </a>
                              </li>
                              <li>
                                <a href="product-details-variable.html">
                                  Product Variable
                                </a>
                              </li>
                              <li>
                                <a href="product-details-affiliate.html">
                                  Product Referral
                                </a>
                              </li>
                              <li>
                                <a href="product-details-group.html">
                                  Product Group
                                </a>
                              </li>
                              <li>
                                <a href="product-details-single-slide.html">
                                  Product Slider
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* Mega Menu Sub Link */}
                          <li className="mega-menu-item">
                            <a href="#" className="mega-menu-item-title">
                              Product Types
                            </a>
                            <ul className="mega-menu-sub">
                              <li>
                                <a href="product-details-tab-left.html">
                                  Product Tab Left
                                </a>
                              </li>
                              <li>
                                <a href="product-details-tab-right.html">
                                  Product Tab Right
                                </a>
                              </li>
                              <li>
                                <a href="product-details-gallery-left.html">
                                  Product Gallery Left
                                </a>
                              </li>
                              <li>
                                <a href="product-details-gallery-right.html">
                                  Product Gallery Right
                                </a>
                              </li>
                              <li>
                                <a href="product-details-sticky-left.html">
                                  Product Sticky Left
                                </a>
                              </li>
                              <li>
                                <a href="product-details-sticky-right.html">
                                  Product Sticky right
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="menu-banner">
                          <a href="" className="menu-banner-link">
                            <img
                              className="menu-banner-img"
                              src="assets/images/banner/menu-banner.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="has-dropdown">
                      <a href="blog-single-sidebar-left.html">
                        Blog <i className="fa fa-angle-down"></i>
                      </a>
                      {/* Sub Menu */}
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-grid-sidebar-left.html">
                            Blog Grid Sidebar left
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar-right.html">
                            Blog Grid Sidebar Right
                          </a>
                        </li>
                        <li>
                          <a href="blog-full-width.html">Blog Full Width</a>
                        </li>
                        <li>
                          <a href="blog-single-sidebar-left.html">
                            Blog Single Sidebar left
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-sidebar-right.html">
                            Blog Single Sidebar Right
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">
                        Pages <i className="fa fa-angle-down"></i>
                      </a>
                      {/* Sub Menu */}
                      <ul className="sub-menu">
                        <li>
                          <a href="service.html">Service</a>
                        </li>
                        <li>
                          <a href="faq.html">Frequently Questions</a>
                        </li>
                        <li>
                          <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Header Main Menu Start */}
            </div>
          </div>
        </div>
      </div>
      {/* End Bottom Area */}
    </>
  );
};

export default HeaderBottom;
