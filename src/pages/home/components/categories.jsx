import { Col, Row, Typography } from "antd";
import useCategory from "hooks/useCategory";
import { Link } from "react-router-dom";

import { PATH } from "../../../utils/const";
import { StyleCategory } from "../style/style";
const { Title } = Typography;

const image = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbooMq6_OR9QLK5qHcbfhvGBYB8clt8Rg_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDF8uJ7GTJ_Ds5ReSnzHLTJGXlWdJHFBwMY518rtmRwVAUWwCmil3zgBmH9mA_h1ULWQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGpV4rEHYaTkxraKWclzjC9p65z01QCRMmg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJdc8DLFudG0EttHUI4K5K2HcqCT8WCWkjOUD8bH-EUXE8LPARpuxyjARGjn1wpXCi7s&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVz78A8wc7xIbvnB20AYkLXkbh2Q4oIfMb1Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7Nmr-Vwn07kVmJvuwGlVG1B7j_5lrQc9tkd7NxeDouT1jcHg1dLR-Ici5LJ8X1vpiX8&usqp=CAU",
];
const requestBody = { keyword: "" };
const CategoryList = ({ requestBody, title }) => {
  const { categories } = useCategory(requestBody);
  console.log("nnnn", categories);
  return (
    <>
      {categories.length === 0 ? (
        <></>
      ) : (
        <Row gutter={[8, 0]}>
          <Col span={24}>
            <Title
              level={3}
              style={{
                marginTop: 12,
                paddingBottom: 7,
                borderBottom: "2px solid #ff6a3c",
                fontSize: 20,
                fontWeight: 500,
                display: "inline",
              }}
            >
              {title}
            </Title>
          </Col>
          {categories.map((item, key) => {
            return (
              <Col key={key} span={4} style={{ marginBottom: 24 }}>
                <StyleCategory>
                  <Link
                    to={PATH.PRODUCT}
                    state={{ categoryIds: item.id }}
                    className="containers"
                  >
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
      )}
    </>
  );
};

export default CategoryList;
