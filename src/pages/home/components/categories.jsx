import { Avatar, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CATEGORIES from "../../../api/categories";

import SectionTitle from "../../../components/section-title";
const StyleListCategory = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border-radius: 6px;
  background: #fff;
  height: 230px;
  position: relative;
  &:hover {
    img {
      transform: scale(1.2) rotate(8deg);
    }
    h5 {
      color: #4acbdf;
      font-size: 18px !important;
    }
  }
  &::before {
    position: absolute;
    width: 100%;
    height: 80%;
    content: "";

    top: 0;
    left: 0;
    background: repeating-linear-gradient(180deg, #00eaff12, transparent 100px);
    z-index: 0;
  }

  a.category {
    text-align: center;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 10px;
    height: 100%;
  }
  .catagory-img {
    border-radius: 50%;
    overflow: hidden;
    width: 100px;
    height: 100px;

    margin-bottom: 15px;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.4s ease;
      object-fit: cover;
    }
  }

  h5.catagory-title {
    font-size: 16px;

    margin-top: 10px;
    font-weight: 700;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.5em;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    actionGetAllCategories({ keyword: "", noti: "cate" });
  }, []);
  function actionGetAllCategories(keyword) {
    setLoading(true);
    CATEGORIES.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  return (
    <>
      <div className="product-catagory-section section-top-gap-100">
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <SectionTitle content="Danh mục" />
            </div>
          </div>
        </div>

        <div className="product-catagory-wrapper">
          <div className="container">
            <Row gutter={[24, 0]}>
              {data.map((item, key) => {
                return (
                  <Col key={key} span={6} style={{ marginBottom: 24 }}>
                    <StyleListCategory>
                      <Link to="/product" className="category">
                        <div className="catagory-img">
                          <img src="https://phucanhcdn.com/media/product/37381_laptop_microsoft_laptop_3_ryzen_7_1_1.jpg" />
                        </div>

                        <h5 className="catagory-title">{item.name}</h5>
                      </Link>
                    </StyleListCategory>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
