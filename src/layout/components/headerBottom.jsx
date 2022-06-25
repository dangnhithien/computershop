import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CATEGORIES from "../../api/categories";
import SUPPLIERS from "../../api/suppliers";
const HeaderBottom = (props) => {
  const [loading, setLoading] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [listSupplier, setListSupplier] = useState([]);

  useEffect(() => {
    actionGetAllCategories();
    actionGetAllSupplier();
  }, []);

  function actionGetAllCategories() {
    setLoading(true);
    CATEGORIES.search({ keyword: "", pageSize: 5 })
      .then((res) => {
        setListCategory(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function actionGetAllSupplier() {
    setLoading(true);
    SUPPLIERS.search({ keyword: "", pageSize: 5 })
      .then((res) => {
        setListSupplier(res.data.data);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  return (
    <>
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <Link className="active main-menu-link" to="/">
                        Trang chủ <i className="fa fa-angle-down"></i>
                      </Link>
                    </li>
                    <li className="has-dropdown has-megaitem">
                      <Link to="/mua-hang">
                        Mua hàng <i className="fa fa-angle-down"></i>
                      </Link>

                      <div className="mega-menu">
                        <ul className="mega-menu-inner">
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

                          <li className="mega-menu-item">
                            <Link to="#" className="mega-menu-item-title">
                              Danh mục
                            </Link>
                            <ul className="mega-menu-sub">
                              {listCategory.map((item, key) => {
                                return (
                                  <li key={key}>
                                    <Link to={"/" + item.slug}>
                                      {item.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                          <li className="mega-menu-item">
                            <Link to="#" className="mega-menu-item-title">
                              Nhãn hàng
                            </Link>
                            <ul className="mega-menu-sub">
                              {listSupplier.map((item, key) => {
                                return (
                                  <li key={key}>
                                    <Link to={"/" + item.slug}>
                                      {item.name}
                                    </Link>
                                  </li>
                                );
                              })}
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
                      <Link to="/thanh-toan">
                        Thanh toán<i className="fa fa-angle-down"></i>
                      </Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to="/phan-hoi">
                        Phản hồi<i className="fa fa-angle-down"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
