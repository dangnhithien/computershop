import React from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import BtnSearch from "../../components/search/btn-search";

const HeaderCenter = () => {
  return (
    <>
      {/* Start Header Center Area */}
      <div className="header-center">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-3">
              {/* Logo Header */}
              <div className="header-logo">
                <a href="index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-5">
              <BtnSearch />
            </div>
            <div className="col-4 text-end">
              {/* Start Header Action Icon */}
              <ul className="header-action-icon">
                <li>
                  <Link to="/singup" className="offcanvas-toggle">
                    <span className="header-action-item">Đăng kí</span>
                  </Link>
                </li>
                <li>
                  <Link to="/singin" className="offcanvas-toggle">
                    <span className="header-action-item header-login">
                      Đăng nhập
                    </span>
                  </Link>
                </li>
              </ul>
              {/* End Header Action Icon */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCenter;
