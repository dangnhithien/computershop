import { useCallback, useEffect, useRef, useState } from "react";
import Gallery from "../components/gallery";
import RateCustom from "components/modal-feed-back/rateCustom";
import { BsTwitter } from "react-icons/bs";
import useStoreCart from "store/cart";
import useStoreUser from "store/personal";
import { PATH } from "utils/const";
import parseMoney from "utils/parseMoney";
import { StylePrice } from "../style/style";
import Comments from "components/modal-feed-back/comment";
import { Col, InputNumber, Row, Tabs, Button } from "antd";
import CATEGORIES from "api/categories";
import PRODUCT from "api/product";
import Compare from "components/compare/compare";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { MdCompare } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StyleContainer, StyleSocial, StyleTable } from "../style/style";

const { TabPane } = Tabs;

const Detail = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { productId } = useParams();
  let navigate = useNavigate();
  const setCart = useStoreCart((state) => state.setCart);
  const loading = useStoreCart((state) => state.loading);
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const quantity = useRef(1);
  useEffect(() => window.scrollTo(0, 0), []);
  function handleAddToCart() {
    const request = {
      productId: productId,
      userid: userProfile.id,
      quantity: quantity.current,
      price: data.price,
    };
    addToCart(request).then(() => {
      setCart(userProfile.id);
    });
  }

  const actionGetProduct = useCallback((data) => {
    PRODUCT.getSingle(data)
      .then((res) => {
        setData(res.data);
      })
      .catch((res) => {});
  }, []);

  const actionGetAllCategories = useCallback((keyword) => {
    CATEGORIES.search(keyword)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {});
  }, []);
  useEffect(() => {
    actionGetProduct({ id: productId });
  }, [actionGetProduct]);
  useEffect(() => {
    actionGetAllCategories({ keyword: "", pageSize: 7 });
  }, [actionGetAllCategories]);
  return (
    <>
      {!data ? (
        navigate(PATH.ERROR)
      ) : (
        <div className="container">
          <StyleContainer>
            <Row gutter={[24, 0]}>
              <Col span={12}>
                <Gallery />
                <StyleSocial>
                  <span>Chia sẻ: </span>
                  <FaFacebookMessenger className="icon-messenger icon-social" />
                  <FaFacebook className="icon-facebook icon-social" />
                  <BsTwitter className="icon-twitter icon-social" />
                </StyleSocial>
              </Col>
              <Col span={12}>
                <div className="product-details-text">
                  <h4 className="title">{data.name}</h4>

                  <div className="product-review">
                    <RateCustom
                      size="20"
                      value={data.rate}
                      rates={data.numberRate}
                    />
                  </div>

                  <StylePrice>
                    <span className="number">
                      {parseMoney(data.productPrice)}
                      &nbsp;vnđ
                    </span>

                    <del className="price">
                      {parseMoney(data.productPrice)}&nbsp;vnđ
                    </del>
                    <span class="stamp is-approved">30%</span>
                  </StylePrice>
                  <div>
                    <p>{data.description}</p>
                  </div>
                </div>

                <div className="add-to-cart">
                  <div className="quantity">
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      style={{ width: 70 }}
                    />
                  </div>
                  <Button
                    className="btn-add-to-cart"
                    onClick={handleAddToCart}
                    loading={loading}
                  >
                    <RiShoppingCartFill />
                    Thêm vào giỏ
                  </Button>
                  <Button
                    className="compare btn-add-to-cart"
                    onClick={() => setModalVisible(true)}
                  >
                    <MdCompare />
                    So Sánh
                  </Button>
                  <Compare
                    productCurrent={data}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                </div>
                <div className="tag-relation">
                  <span>Đề xuất</span>
                  <div className="tag">
                    {categories?.map((e, key) => {
                      return (
                        <Link to={PATH.PRODUCT}>
                          <span>{e.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
            <Tabs type="card">
              <TabPane tab="Thông số" key="1">
                <StyleTable>
                  <table>
                    <tbody>
                      <tr>
                        <td colspan="2">
                          <p>Mô tả chi tiết</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Hãng sản xuất</p>
                        </td>
                        <td>
                          <p>Dell</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Chủng loại</p>
                        </td>
                        <td>
                          <p>Inspiron 5406</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Part Number</p>
                        </td>
                        <td>
                          <p>3661SLV</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Mầu sắc</p>
                        </td>
                        <td>
                          <p>Xám</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Bộ vi xử lý</p>
                        </td>
                        <td>
                          <p>Intel Core i3 1115G4&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Chipset</p>
                        </td>
                        <td>
                          <p>Intel&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Bộ nhớ trong</p>
                        </td>
                        <td>
                          <p>8GB DDR4 3200MHz&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Số khe cắm</p>
                        </td>
                        <td>
                          <p>2</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Dung lượng tối đa</p>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <p>VGA</p>
                        </td>
                        <td>
                          <p>Intel UHD Graphics</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Ổ cứng</p>
                        </td>
                        <td>
                          <p>256GB M.2 PCIe NVMe SSD</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Ổ quang</p>
                        </td>
                        <td>
                          <p>No</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Card Reader</p>
                        </td>
                        <td>
                          <p>SD</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Bảo mật, công nghệ</p>
                        </td>
                        <td>
                          <p>Led Keyboard</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Màn hình&nbsp;</p>
                        </td>
                        <td>
                          <p>14.0-inch HD WVA LED-Backlit, Touch Screen</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Webcam</p>
                        </td>
                        <td>
                          <p>HD</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Audio</p>
                        </td>
                        <td>
                          <p>
                            Realtek High Definition Audio (Speaker : 2 x 2W)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Giao tiếp mạng</p>
                        </td>
                        <td>
                          <p>Gigabit</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Giao tiếp không dây</p>
                        </td>
                        <td>
                          <p>802.11ac ,Bluetooth 5.1</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Cổng giao tiếp</p>
                        </td>
                        <td>
                          <p>
                            2x&nbsp; USB 3.2 Gen 1 ports, 1x&nbsp; USB 3.2 Gen 2
                            Type-C with DisplayPort, 1x HDMI 1.4, 1x Headset
                            port, 1x DC-in Jack
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Pin</p>
                        </td>
                        <td>
                          <p>3 cell (40Whr)</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Kích thước&nbsp;</p>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <p>Cân nặng</p>
                        </td>
                        <td>
                          <p>1.72kg</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Hệ điều hành</p>
                        </td>
                        <td>
                          <p>Win 10&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Phụ kiện đi kèm</p>
                        </td>
                        <td>
                          <p>AC Adapter</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </StyleTable>
              </TabPane>

              <TabPane tab="Đánh giá" key="3">
                <Comments />
              </TabPane>
            </Tabs>
          </StyleContainer>
        </div>
      )}
    </>
  );
};

export default Detail;
