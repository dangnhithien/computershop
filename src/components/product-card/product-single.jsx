import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

import RateCustom from "../modal-feed-back/rateCustom";

import { Modal, Button } from "antd";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import parseMoney from "../../utils/parseMoney";
import { PATH } from "../../utils/const";
import { StylePrice, StyleProduct, StyleView } from "./style/style";
import useStoreCart from "../../store/cart";
import useStoreUser from "../../store/personal";
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSGmO7Y4gMOqvdlR2B620ahMk667pCQOcvQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3R1nVV-o6ck3Es7PGkK9-H5aNA-EgD9ydA&usqp=CAU",
  "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  "https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png",
  "https://laptophainam.com/wp-content/uploads/2022/01/laptop-hp-elitebook-840-g2-i5-cu-600x550.jpg",
  "https://image-us.24h.com.vn/upload/2-2022/images/2022-04-24/3t8a9579-1650760764-42-width660height490.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2_extuFJaCIFBdvdnkyQMpVLTayNDQo-Lw&usqp=CAU",
  "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/matebook-14-amd-2021.JPG",
  "https://cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-021221-110854-600x600.jpg",
  "https://laptopdell.com.vn/wp-content/uploads/2022/05/HP-Spectre-x360-14-scaled.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSGmO7Y4gMOqvdlR2B620ahMk667pCQOcvQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3R1nVV-o6ck3Es7PGkK9-H5aNA-EgD9ydA&usqp=CAU",
  "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  "https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png",
  "https://laptophainam.com/wp-content/uploads/2022/01/laptop-hp-elitebook-840-g2-i5-cu-600x550.jpg",
  "https://image-us.24h.com.vn/upload/2-2022/images/2022-04-24/3t8a9579-1650760764-42-width660height490.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2_extuFJaCIFBdvdnkyQMpVLTayNDQo-Lw&usqp=CAU",
  "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/matebook-14-amd-2021.JPG",
  "https://cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-021221-110854-600x600.jpg",
  "https://laptopdell.com.vn/wp-content/uploads/2022/05/HP-Spectre-x360-14-scaled.jpg",
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
            // style={{ marginTop: 50 }}
            width={800}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            bodyStyle={{ minHeight: 430 }}
            footer={false}
          >
            <StyleView>
              <div className="card">
                <div className="photo">
                  <img src={images[index]} />
                </div>
                <div className="description">
                  <h2>{item.name}</h2>

                  <h1>{parseMoney(12000000)}vnđ</h1>

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
            <Link to={PATH.DETAIL(item.id)} className="image">
              <img src={images[index]} alt="" />
            </Link>

            <div className="content">
              <div className="product-review">
                <RateCustom value={item.rate} rates={item.countRate} />
              </div>

              <Link to={PATH.DETAIL(item.id)} className="title">
                {item.name}
              </Link>
            </div>
            <StylePrice>
              <div className="btn-cart" onClick={() => setModalVisible(true)}>
                <IoMdEye />
              </div>
              <div className="price">
                {item.productPrices && item.promotion
                  ? item.productPrices *
                    parseMoney(
                      (100 - item.promotion ? item.promotion : 0) / 100
                    )
                  : "12.000.000"}
                vnđ
              </div>
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
