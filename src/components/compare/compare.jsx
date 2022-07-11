import { Col, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import SearchBar from "../search/searchBar";
import parseMoney from "../../utils/parseMoney";
import { StyleView } from "./style/style";
import PRODUCT from "../../api/product";
import SpinCustom from "../spin/Spin";

const Compare = ({ modalVisible, setModalVisible, productCurrent = null }) => {
  const [listRecommend, setListRecommend] = useState([]);
  const [listRemove, setListRemove] = useState([]);
  const [showProduct, setShowProduct] = useState({
    left: productCurrent,
    right: listRecommend[1],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (listRemove.length > 0) {
      actionGetProduct({ keyword: "", pageSize: listRemove.length + 8 });
    } else {
      actionGetProduct({ keyword: "", pageSize: 8 });
    }
  }, [listRemove]);

  function handleCloseShowProduct(key) {
    setShowProduct({ ...showProduct, [key]: "" });
  }
  function handleRemoveRecommend(id) {
    setListRemove([...listRemove, id]);
  }
  function chooseProductShow(data) {
    if (!showProduct.left) setShowProduct({ ...showProduct, left: data });
    else if (!showProduct.right)
      setShowProduct({ ...showProduct, right: data });
    else setShowProduct({ ...showProduct, right: data });
  }
  function actionGetProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setListRecommend(
          res.data.data.filter((e) => !listRemove.includes(e.id))
        );
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  }

  return (
    <Modal
      style={{ top: 5 }}
      width={1200}
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      bodyStyle={{ minHeight: 590 }}
      footer={false}
      className="modalStyle"
    >
      <StyleView>
        <Row>
          {loading ? (
            <SpinCustom />
          ) : (
            <Col span={24}>
              <div className="top">
                {listRecommend.map((element) => {
                  if (
                    element.id === showProduct.left?.id ||
                    element.id === showProduct.right?.id
                  )
                    return;
                  return (
                    <div className="parent">
                      <span
                        className="cancel"
                        onClick={() => handleRemoveRecommend(element.id)}
                      >
                        <FaTimes />
                      </span>
                      <div
                        className="item"
                        onClick={() => chooseProductShow(element)}
                      >
                        <img src="https://picsum.photos/300/600" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          )}
          <Col span={12}>
            {showProduct.left ? (
              <div className="card">
                <span
                  className="cancel"
                  onClick={() => handleCloseShowProduct("left")}
                >
                  <FaTimes />
                </span>
                <div className="photo">
                  <img src="https://picsum.photos/300/600" />
                </div>
                <div className="description">
                  <h2>{showProduct.left.name}</h2>

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
                  <button>
                    <HiShoppingCart />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="card">
                  <div className="empty">
                    <SearchBar
                      isRedict={false}
                      setSelectItem={(item) =>
                        setShowProduct({ ...showProduct, left: item })
                      }
                    />
                  </div>
                </div>
              </>
            )}
          </Col>
          <Col span={12}>
            {showProduct.right ? (
              <div className="card ">
                <span
                  className="cancel"
                  onClick={() => handleCloseShowProduct("right")}
                >
                  <FaTimes />
                </span>
                <div className="photo">
                  <img src="https://picsum.photos/300/600" />
                </div>
                <div className="description">
                  <h2>{showProduct.right.name}</h2>

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
                  <button>
                    <HiShoppingCart />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="card">
                  <div className="empty">
                    <SearchBar
                      isRedict={false}
                      setSelectItem={(item) =>
                        setShowProduct({ ...showProduct, right: item })
                      }
                    />
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </StyleView>
    </Modal>
  );
};

export default Compare;
