import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CATEGORIES from "../../../api/categories";
import { PATH } from "../../../utils/const";
import { StyleCategory } from "../style/style";
const Title = styled.span`
  h4 {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    color: #155263;
    margin: 0;
    margin-left: 5px;
    margin-top: 12px;
    border-bottom: 2px solid #ff9a3c;
    display: inline-block;
  }
`;
const image = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbooMq6_OR9QLK5qHcbfhvGBYB8clt8Rg_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDF8uJ7GTJ_Ds5ReSnzHLTJGXlWdJHFBwMY518rtmRwVAUWwCmil3zgBmH9mA_h1ULWQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGpV4rEHYaTkxraKWclzjC9p65z01QCRMmg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJdc8DLFudG0EttHUI4K5K2HcqCT8WCWkjOUD8bH-EUXE8LPARpuxyjARGjn1wpXCi7s&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVz78A8wc7xIbvnB20AYkLXkbh2Q4oIfMb1Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7Nmr-Vwn07kVmJvuwGlVG1B7j_5lrQc9tkd7NxeDouT1jcHg1dLR-Ici5LJ8X1vpiX8&usqp=CAU",
];
const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const actionGetAllCategories = useCallback((keyword) => {
    setLoading(true);
    CATEGORIES.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    actionGetAllCategories({ keyword: "", pageSize: 6 });
  }, [actionGetAllCategories]);
  return (
    <>
      <div className="container">
        <Row gutter={[8, 0]}>
          <Col span={24}>
            <Title>
              <h4>Danh mục</h4>
            </Title>
          </Col>
          {data.map((item, key) => {
            return (
              <Col key={key} span={4} style={{ marginBottom: 24 }}>
                <StyleCategory>
                  <Link to={PATH.PRODUCT} className="containers">
                    <div className="top">
                      <img src={image[key]} />
                    </div>
                    <div className="bottom">
                      <div className="details">
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                  </Link>
                </StyleCategory>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Categories;
