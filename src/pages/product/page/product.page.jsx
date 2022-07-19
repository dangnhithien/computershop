import Carousel from "../../../components/carousel/carousel";

import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import BannerSingle from "../../../components/product-card/bannerSingle";

import Sidebar from "../components/sidebar";

import ProductHorizon from "components/product-card/product-horizon";
import { useLocation } from "react-router-dom";
import FilterTop from "../components/filterTop";
import ProductList from "../components/product-list";
import Suggest from "../components/suggest-product";

const carousels = {
  title: "Gợi ý cho bạn",
  requestBody: {
    keyword: "",
    pageSize: 10,
    pageNumber: 1,
  },
};
const Product = () => {
  const [request, setRequest] = useState({
    keyword: "",
    pageNumber: 1,
    pageSize: 12,
  });
  const location = useLocation();
  useEffect(() => {
    setRequest({ ...request, ...location.state });
  }, [location]);

  return (
    <>
      <div className="container">
        <BannerSingle />

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
        <BannerSingle />

        <ProductHorizon />
        <Carousel key={3} {...carousels} />
      </div>
    </>
  );
};

export default Product;
