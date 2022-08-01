import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

import { Button, Col, Modal, Row, Typography } from "antd";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import useStoreCart from "../../store/cart";
import useStoreUser from "../../store/personal";
import { PATH } from "../../utils/const";
import parseMoney from "../../utils/parseMoney";
import { StyleView } from "./style/style";
const { Title } = Typography;
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
const ModalProduct = () => {
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
    <Modal
      style={{ top: 15 }}
      width={800}
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
            <Title strong style={{ textTransform: "capitalize" }} level={4}>
              {name}
            </Title>
            <Row gutter={[8, 8]} align="middle">
              <Col>
                <Title type="danger" level={4} style={{ marginTop: 0 }}>
                  &#8363; {parseMoney(12000000)}
                </Title>
              </Col>
              <Col>
                <Title disabled delete level={5} style={{ marginTop: 0 }}>
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
            {!userProfile.id ? (
              <>
                <Button>
                  <Link to={PATH.SINGIN}>
                    <HiShoppingCart />
                    &nbsp;Thêm vào giỏ
                  </Link>
                </Button>
              </>
            ) : (
              <Button onClick={handleAddToCart} loading={loading}>
                <HiShoppingCart />
                &nbsp;Thêm vào giỏ
              </Button>
            )}
          </div>
        </div>
      </StyleView>
    </Modal>
  );
};

export default ModalProduct;
