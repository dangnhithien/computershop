import { Button, Col, InputNumber, Modal, Row, Typography } from "antd";
import CATEGORIES from "api/categories";
import PRODUCT from "api/product";
import Compare from "components/compare/compare";
import Comments from "components/modal-feed-back/comment";
import RateCustom from "components/modal-feed-back/rateCustom";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdCompare, MdSell } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import useStoreCart from "store/cart";
import useStoreUser from "store/personal";
import { PATH } from "utils/const";
import parseMoney from "utils/parseMoney";
import Gallery from "../components/gallery";
import { StyleContainer, StylePrice, StyleTable } from "../style/style";
const { Title, Text } = Typography;

const Detail = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDetail, setModalVisibleDetail] = useState(false);
  const { productId } = useParams();
  let navigate = useNavigate();
  const setCart = useStoreCart((state) => state.setCart);
  const loading = useStoreCart((state) => state.loading);
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const quantity = useRef(1);
  useEffect(() => window.scrollTo(0, 0), [loading]);
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
              <Col span={14}>
                <Gallery />
              </Col>
              <Col span={10}>
                <div className="product-details-text">
                  <Title level={3} className="title">
                    {data.name ??
                      "Laptop Dell Inspiron N3511C (P112F001CBL) (i3 1115G4/4GBRAM/256GB SSD/15.6 inch FHD/Win11+OfficeHS21/Đen)"}
                  </Title>

                  <RateCustom
                    value={data.rate ?? 3.5}
                    rates={data.numberRate}
                  />

                  <StylePrice>
                    <Text italic delete className="price-delete">
                      &#8363;{parseMoney(data.productPrice ?? 15000000)}
                    </Text>
                    <Text type="danger" className="price-sale">
                      &#8363;{parseMoney(data.productPrice ?? 10500000)}
                    </Text>
                    {/* <Text class="discount">30%</Text> */}
                  </StylePrice>

                  <Text type="secondary">
                    {data.description ??
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor veritatis non maiores. Labore aperiam laboriosam reprehenderit, non blanditiis ipsum atque cum officiis at quam nostrum explicabo voluptates, natus earum quibusdam?"}
                  </Text>
                </div>

                <div className="add-to-cart">
                  <div className="quantity">
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      style={{ width: 70, height: 40, lineHeight: "40px" }}
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
                  <span>
                    <MdSell />
                    &nbsp; Đề xuất
                  </span>
                  <div className="tag">
                    {categories?.map((e, key) => {
                      return (
                        <Link
                          key={key}
                          to={PATH.PRODUCT}
                          state={{ categoryIds: [e.id] }}
                        >
                          <span>{e.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={16}>
                <Comments />
              </Col>
              <Col span={8}>
                <StyleTable>
                  <table>
                    <tbody>
                      <tr>
                        <td colspan="2" className="table-title">
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
                  <div
                    className="more"
                    onClick={() => setModalVisibleDetail(true)}
                  >
                    Xem thêm &nbsp;
                    <FaAngleDoubleDown />
                  </div>
                </StyleTable>
                <Modal
                  style={{ top: 5 }}
                  width={550}
                  visible={modalVisibleDetail}
                  onCancel={() => setModalVisibleDetail(false)}
                  bodyStyle={{ minHeight: 600 }}
                  footer={false}
                >
                  <StyleTable style={{ maxHeight: 10000 }}>
                    <table>
                      <tbody>
                        <tr>
                          <td colspan="2" className="table-title">
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
                              2x&nbsp; USB 3.2 Gen 1 ports, 1x&nbsp; USB 3.2 Gen
                              2 Type-C with DisplayPort, 1x HDMI 1.4, 1x Headset
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
                </Modal>
              </Col>
            </Row>
          </StyleContainer>
        </div>
      )}
    </>
  );
};

export default Detail;
