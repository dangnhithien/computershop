import Carousel from "../../../components/carousel/carousel";

import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import PRODUCT from "../../../api/product";
import BannerSingle from "../../../components/product-card/bannerSingle";

import ProductSingle from "../../../components/product-card/product-single";
import Sidebar from "../components/sidebar";

import axios from "axios";
import SpinCustom from "../../../components/spin/Spin";
import FilterTop from "../components/filterTop";
import Suggest from "../components/suggest-product";
import { StyleEmpty, StylePagination } from "../style/style";
import { useLocation } from "react-router-dom";
import ProductHorizon from "components/product-card/product-horizon";
export const initializationQuestion = {
  keyword: "",
  pageNumber: 1,
  pageSize: 12,
  // // orderBy: [],
  // categoryIds: [],
  // status: 1,
  // supplierId: null,
  // isSortRate: true,
  // minPrice: 0,
  // maxPrice: 100000000,
  // rate: 0,
};
const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [request, setRequest] = useState({
    ...initializationQuestion,
  });
  const location = useLocation();
  useEffect(() => {
    setRequest({ ...request, ...location.state });
  }, [location]);
  useEffect(
    () =>
      window.scrollTo({
        top: 400,
        left: 100,
        behavior: "smooth",
      }),
    [loading]
  );
  useEffect(() => {
    const source = axios.CancelToken.source();
    setLoading(true);
    PRODUCT.search(request)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(null);
        setLoading(false);
      });
    return () => source.cancel();
  }, [request]);

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
                <Row gutter={[8, 8]}>
                  {loading ? (
                    <SpinCustom />
                  ) : (
                    <>
                      {data?.data.length > 0 ? (
                        <>
                          {data?.data.map((item, key) => {
                            return (
                              <Col key={key} span={6}>
                                <ProductSingle
                                  key={key}
                                  item={item}
                                  index={key}
                                />
                              </Col>
                            );
                          })}
                          <Col span={24}>
                            <StylePagination>
                              <Pagination
                                total={data?.totalCount}
                                // showSizeChanger
                                current={data?.currentPage}
                                showTotal={(total) =>
                                  `Tổng số ${total} sản phẩm`
                                }
                                // pageSize={data?.pageSize ?? 0}
                                showSizeChanger={false}
                                onChange={(value) => {
                                  setRequest({ ...request, pageNumber: value });
                                }}
                              />
                            </StylePagination>
                          </Col>
                        </>
                      ) : (
                        <StyleEmpty className="empty">
                          Không tìm thấy sản phẩm
                        </StyleEmpty>
                      )}
                    </>
                  )}
                </Row>
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
        <Carousel
          key={3}
          title="Gợi ý cho bạn"
          requestBody={{
            keyword: "",
            pageSize: 10,
            pageNumber: 1,
          }}
        />
      </div>
    </>
  );
};

export default Product;
