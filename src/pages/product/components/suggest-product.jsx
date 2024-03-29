import { Col, Row, Typography } from "antd";
import ProductSmall from "components/product-card/product-small";
import useProduct from "hooks/useProduct";
import styled from "styled-components";

const StyleCarousel = styled.div`
  .wrap {
    border: 1px solid #f1f1f1;
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  .image {
    height: 400px;
    img {
      object-fit: cover;
      max-width: 100%;
      height: 100%;
    }
  }
`;
const requestBody = { keyword: "", pageSize: 7 };

const Suggest = () => {
  const {
    products: { data },
  } = useProduct(requestBody);

  return (
    data.length > 0 && (
      <StyleCarousel>
        <Row className="wrap">
          <Col>
            <Typography.Title
              level={3}
              style={{
                marginTop: 12,
                paddingBottom: 7,
                borderBottom: "2px solid #ff6a3c",
                fontSize: 20,
                fontWeight: 500,
                display: "inline-block",
              }}
            >
              Bán chạy
            </Typography.Title>
          </Col>
          <Row gutter={[12, 12]}>
            {data?.map((e, key) => {
              return (
                <Col span={24} key={key}>
                  <ProductSmall item={e} index={key} />
                </Col>
              );
            })}
          </Row>
        </Row>
        <div className="image">
          <img
            src="https://static.lenovo.com/id/in/merch/festive-sale/Festive-mob-banner.jpg?R"
            alt=""
          />
        </div>
      </StyleCarousel>
    )
  );
};

export default Suggest;
