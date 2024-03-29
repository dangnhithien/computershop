import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../../../utils/const";
const Style = styled.div`
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
  }

  .four_zero_four_bg h3 {
    font-size: 80px;
  }

  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #ff6a3c;
    margin: 20px 0;
    display: inline-block;
  }
  .contant_box_404 {
    margin-top: -50px;
  }
`;
const ErrorPage = () => {
  return (
    <Style>
      <section className="page_404">
        <div className="container">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Không tìm thấy</h3>

                <p>Không tìm thấy trang này!</p>

                <Link to={PATH.HOME} className="link_404">
                  Về trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
};
export default ErrorPage;
