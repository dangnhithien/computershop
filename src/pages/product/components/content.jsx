import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom";
import FilterTop from "../components/filterTop";
import ProductList from "../components/product-list";
import Suggest from "../components/suggest-product";
const Content = () => {
  const [request, setRequest] = useState({
    keyword: "",
    pageNumber: 1,
    pageSize: 12,
  });
  const location = useLocation();
  useEffect(() => {
    setRequest((request) => ({ ...request, ...location.state }));
  }, [location]);
  return (
    <Row gutter={[8, 0]}>
      <Col span={18}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <FilterTop />
          </Col>
          <Col span={24}>
            <ProductList request={request} setRequest={setRequest} />
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Sidebar request={request} setRequest={setRequest} />
          </Col>
          <Col span={24}>
            <Suggest />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Content;
