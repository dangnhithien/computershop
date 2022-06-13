import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoHeart, IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BackTop } from "antd";
import CartIcon from "./cartIcon";

const FixedRight = () => {
  return (
    <>
      <div id="icon-fixed-right">
        <ul className="header-action-icon flex-md-column">
          <li className="icon-fixed-right">
            <Link to="/">
              <AiFillHome className="icon-size" />
            </Link>
          </li>
          <li className="icon-fixed-right">
            <CartIcon />
          </li>
          <li className="icon-fixed-right">
            <Link to="/" className="offcanvas-toggle">
              <IoHeart className="icon-size" />
              <span className="header-action-icon-item-count">999</span>
            </Link>
          </li>
          <li className="icon-fixed-right">
            <Link to="/" className="offcanvas-toggle">
              <IoNotificationsSharp className="icon-size" />
              <span className="header-action-icon-item-count">18</span>
            </Link>
          </li>
          <li className="icon-fixed-right">
            <BackTop style={{ position: "unset" }}>
              <Link
                to=""
                // onClick={() => {
                //   document.documentElement.scrollTop = 0;
                // }}
              >
                <BsArrowUpCircleFill
                  style={{ color: "#ea1c26", width: "28px", height: "28px" }}
                />
              </Link>
            </BackTop>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FixedRight;
