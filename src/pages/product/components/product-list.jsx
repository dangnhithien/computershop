import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import PRODUCT from "../../../api/product";

import ProductSingle from "../../../components/product-card/product-single";
import SpinCustom from "../../../components/spin/Spin";

import { StyleEmpty, StylePagination } from "../style/style";
import useProduct from "hooks/useProduct";

const ProductList = ({ request, setRequest }) => {
  const { products: data, isLoading } = useProduct(request);

  useEffect(
    () =>
      window.scrollTo({
        top: 400,
        left: 100,
        behavior: "smooth",
      }),
    [isLoading]
  );

  return (
    <Row gutter={[8, 8]}>
      {isLoading ? (
        <SpinCustom />
      ) : (
        <>
          {data.data.length > 0 ? (
            <>
              {data?.data.map((item, key) => {
                return (
                  <Col key={key} span={8}>
                    <ProductSingle key={key} item={item} index={key} />
                  </Col>
                );
              })}
              <Col span={24}>
                <StylePagination>
                  <Pagination
                    total={data?.totalCount}
                    // showSizeChanger
                    current={data?.currentPage}
                    showTotal={(total) => `Tổng số ${total} sản phẩm`}
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
            <StyleEmpty className="empty">Không tìm thấy sản phẩm</StyleEmpty>
          )}
        </>
      )}
    </Row>
  );
};

export default ProductList;
