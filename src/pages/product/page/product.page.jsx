import Carousel from "../../../components/carousel/carousel";

import { Col, notification, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import PRODUCT from "../../../api/product";
import BannerSingle from "../../../components/product-card/bannerSingle";

import ProductSingle from "../../../components/product-card/product-single";
import Sidebar from "../components/sidebar";

import FilterTop from "../components/filterTop";
import SpinCustom from "../../../components/spin/Spin";
import { StyleEmpty } from "../style/style";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => window.scrollTo(0, 0), []);

  // useEffect(() => {
  //   actionGetAllProduct({ keyword: "", pageSize: 10 });
  // }, []);

  // function actionGetAllProduct(keyword) {
  //   setLoading(true);
  //   PRODUCT.search(keyword)
  //     .then((res) => {
  //       setData(res.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //     });
  // }

  const item = [
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
  ];
  return (
    <>
      <div className="container">
        <BannerSingle />

        <Row gutter={[24, 0]}>
          <Col span={6}>
            <Sidebar setData={setData} setLoading={setLoading} />
          </Col>
          <Col span={18}>
            <Row gutter={[24, 0]}>
              <Col span={24} style={{ paddingLeft: 0 }}>
                <FilterTop />
              </Col>
              <Col span={24}>
                <Row gutter={[24, 0]}>
                  {loading ? (
                    <SpinCustom />
                  ) : (
                    <>
                      {data.length > 0 ? (
                        data.map((item, key) => {
                          return (
                            <Col span={6} style={{ paddingLeft: 0 }}>
                              <ProductSingle
                                key={key}
                                item={item}
                                index={key}
                              />
                            </Col>
                          );
                        })
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
        </Row>
        <Carousel key={3} data={data} title="gợi ý cho bạn" />
      </div>
    </>
  );
};

export default Product;
