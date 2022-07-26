import { Col, Row } from "antd";
import CompareProduct from "../components/compare-product";
import SuggetProduct from "../components/sugget-product";
import { StyleCompare } from "../style/style";
const Compare = () => {
  return (
    <>
      <StyleCompare>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <SuggetProduct />
          </Col>
          <Col span={16}>
            <CompareProduct />
          </Col>
        </Row>
      </StyleCompare>
    </>
  );
};

export default Compare;
