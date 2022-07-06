import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

import RateCustom from "../modal-feed-back/rateCustom";

import { Modal } from "antd";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import parseMoney from "../../utils/parseMoney";
import { PATH } from "../../utils/const";
import { StylePrice, StyleProduct, StyleView } from "./style/style";
import useStoreCart from "../../store/cart";
import useStoreUser from "../../store/personal";

const ProductSingle = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const setCart = useStoreCart((state) => state.setCart);

  function handleAddToCart() {
    console.log(userProfile);
    const request = {
      productId: "5ABAC941-AC2B-4D77-2170-08DA5EB982B6",
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
                  <img src="https://picsum.photos/300/600" />
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
                  <button onClick={handleAddToCart}>
                    <HiShoppingCart />
                    &nbsp;Thêm vào giỏ
                  </button>
                </div>
              </div>
            </StyleView>
          </Modal>

          <StyleProduct>
            <div className="ribbon">
              <span>30%</span>
            </div>
            <Link to={PATH.DETAIL(item.id)} className="image">
              <img src="https://picsum.photos/200/300?random=1" alt="" />
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
