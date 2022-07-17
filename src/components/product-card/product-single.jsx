import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

import RateCustom from "../modal-feed-back/rateCustom";

import { Button, Col, Modal, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import useStoreCart from "../../store/cart";
import useStoreUser from "../../store/personal";
import { PATH } from "../../utils/const";
import parseMoney from "../../utils/parseMoney";
import ImageGallery from "react-image-gallery";
import { StylePrice, StyleProduct, StyleView } from "./style/style";
const { Text, Title } = Typography;
const images1 = [
  {
    original:
      "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
    thumbnail:
      "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  },
  {
    original:
      "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
    thumbnail:
      "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  },
  {
    original:
      "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
    thumbnail:
      "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  },
];
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3R1nVV-o6ck3Es7PGkK9-H5aNA-EgD9ydA&usqp=CAU",
  "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  "https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png",
  "https://laptophainam.com/wp-content/uploads/2022/01/laptop-hp-elitebook-840-g2-i5-cu-600x550.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2_extuFJaCIFBdvdnkyQMpVLTayNDQo-Lw&usqp=CAU",
  "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/matebook-14-amd-2021.JPG",
  "https://cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-021221-110854-600x600.jpg",
  "https://laptopdell.com.vn/wp-content/uploads/2022/05/HP-Spectre-x360-14-scaled.jpg",
  "https://cdn.nguyenkimmall.com/images/detailed/809/10052608-laptop-hp-15s-fq5104tu-i7-1255u-6k7e4pa-1.jpg",
  "https://cdn.mediamart.vn/images/product/laptop-asus-vivobook-14-a415ea-eb1474w-den_2dc20efd.jpg",
  "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588805_1__2.png",
  "https://imtc.qccdn.fr/test/ultrabook/zoom/hp-notebook-14s-dq1004nf_001.jpg",
  "https://img-trendyol.mncdn.com/mnresize/400/-/ty292/product/media/images/20220110/14/24434972/355659437/1/1_org_zoom.jpg",
  "https://img-trendyol.mncdn.com/mnresize/400/-/ty428/product/media/images/20220510/17/109156679/476813292/1/1_org_zoom.jpg",
];
const ProductSingle = ({ item, index }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const setCart = useStoreCart((state) => state.setCart);
  const loading = useStoreCart((state) => state.loading);

  function handleAddToCart() {
    const request = {
      productId: item.id,
      userid: userProfile.id,
      quantity: 1,
      price: 5000,
    };
    addToCart(request).then(() => {
      setCart(userProfile.id);
    });
  }

  return (
    <>
      {item ? (
        <>
          <Modal
            style={{ top: 15 }}
            width={1000}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            bodyStyle={{ minHeight: 500 }}
            footer={false}
          >
            <StyleView>
              <div className="card">
                <div className="photo">
                  <ImageGallery
                    items={images1}
                    showNav={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    slideInterval={10000}
                    slideDuration={1000}
                  />
                </div>
                <div className="description">
                  <Title
                    strong
                    style={{ textTransform: "capitalize" }}
                    level={3}
                  >
                    {item.name}
                  </Title>
                  <Row gutter={[8, 8]} align="middle">
                    <Col>
                      <Title type="danger" level={3} style={{ marginTop: 0 }}>
                        &#8363; {parseMoney(12000000)}
                      </Title>
                    </Col>
                    <Col>
                      <Title disabled delete level={4} style={{ marginTop: 0 }}>
                        &#8363; {parseMoney(12000000)}
                      </Title>
                    </Col>
                  </Row>

                  <div>
                    <h4>Thông số sản phẩm</h4>

                    <ul>
                      <li>CPU: Intel Core i3 1115G4</li>

                      <li>RAM: 8GB</li>

                      <li>Ổ cứng: 256GB SSD</li>

                      <li>VGA: Onboard</li>

                      <li>Màn hình: 15.6 inch FHD Cảm ứng</li>

                      <li>HĐH: Win10</li>

                      <li>Màu: Đen</li>
                    </ul>
                  </div>
                  <Button onClick={handleAddToCart} loading={loading}>
                    <HiShoppingCart />
                    &nbsp;Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </StyleView>
          </Modal>

          <StyleProduct>
            <div className="ribbon">
              <span>30%</span>
            </div>
            <Link to={PATH.DETAIL(item.id, item.slug)} className="image">
              <img src={images[index]} alt="images" />
            </Link>

            <div className="content">
              <div className="product-review">
                <RateCustom value={item.rate} rates={item.countRate} />
              </div>

              <Link to={PATH.DETAIL(item.id, item.slug)} className="title">
                {item.name}
              </Link>
            </div>
            <StylePrice>
              <div className="btn-cart" onClick={() => setModalVisible(true)}>
                Xem nhanh
              </div>
              <Text type="danger" strong style={{ marginRight: 8 }}>
                &#8363;{" "}
                {item.productPrices && item.promotion
                  ? item.productPrices *
                    parseMoney(
                      (100 - item.promotion ? item.promotion : 0) / 100
                    )
                  : "12.000.000"}
              </Text>
            </StylePrice>
          </StyleProduct>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductSingle;
