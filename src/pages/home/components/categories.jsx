import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CATEGORIES from "../../../api/categories";
import { StyleCategory } from "../style/style";

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
      <div className="container">
        <Row gutter={[24, 0]}>
          {data.map((item, key) => {
            return (
              <Col key={key} span={4} style={{ marginBottom: 24 }}>
                <StyleCategory>
                  <Link to="" className="containers">
                    <div className="top">
                      <img src="https://picsum.photos/1200/300" />
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
