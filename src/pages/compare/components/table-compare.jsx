import { Col, Row, Typography } from "antd";
import DetailProduct from "./detail-product";

const { Title } = Typography;
const TableCompare = () => {
  return (
    <>
      <Title level={5}>Thông số sản phẩm</Title>
      <Row gutter={[0, 0]} className="wrap-box">
        <Col span={4}>
          <span className="box-square title">User Rating</span>
          <span className="box-square title">Storage</span>
          <span className="box-square title">Display</span>
          <span className="box-square title">Processor</span>
          <span className="box-square title">Performance</span>
          <span className="box-square title">Ram</span>
          <span className="box-square title">Price </span>
        </Col>
        <Col span={10}>
          <DetailProduct />
        </Col>
        <Col span={10}>
          <DetailProduct />
        </Col>
      </Row>
    </>
  );
};

export default TableCompare;
