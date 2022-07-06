import { useEffect, useRef, useState } from "react";
import Gallery from "../components/gallery";

import { AiOutlineHeart } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import Comments from "../../../components/modal-feed-back/comment";

import { Button, Col, InputNumber, Row, Tabs } from "antd";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PRODUCT from "../../../api/product";
import RateCustom from "../../../components/modal-feed-back/rateCustom";
import parseMoney from "../../../utils/parseMoney";
import { PATH } from "../../../utils/const";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdCompare } from "react-icons/md";
import Compare from "../../../components/compare/compare";
import {
  StyleContainer,
  StylePrice,
  StyleSocial,
  StyleTable,
} from "../style/style";
const { TabPane } = Tabs;

const Detail = () => {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { productId } = useParams();
  let navigate = useNavigate();
  const [number, setNumber] = useState(1);
  useEffect(() => window.scrollTo(0, 0), []);
  const newItemCart = useRef({
    productId: "798db27f-04d8-4b12-3b9c-08da51f02e26",
    customerId: "655a5696-6886-48c9-89da-3700cc3bbcd2",
    quantity: 1,
    price: 12,
  });
  // useEffect(() => {
  //   actionGetProduct({ id: productId });
  // }, []);
  // function actionGetProduct(data) {
  //   setLoading(true);
  //   PRODUCT.getSingle(data)
  //     .then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //     })
  //     .catch((res) => {
  //       setLoading(false);
  //     });
  // }

  const data = {
    id: 1,
    slug: "",
    name: "Laptop Dell Latitude 3420 (L3420I3SSD) chính hãng",
    amount: 12000000,
    promotion: 10,
    description: (
      <p>
        Laptop Dell Latitude 3420 được thiết kế với kiểu dáng đơn giản, cứng
        cáp, sản phẩm có trọng lượng tương đối nhẹ để bạn dễ dàng mang theo bên
        mình Được trang bị bộ vi xử lý Intel Core i3 1115G4, RAM 8GB mang đến
        cho doanh nghiệp hiệu suất, khả năng quản lý, các tính năng bảo mật tích
        hợp sẵn. Ổ cứng có dung lượng lớn để bạn lưu trữ được các dữ liệu cần
        thiết hoặc SSD sẽ giúp khởi động máy nhanh chóng
      </p>
    ),
    detail: "",
    rate: 4,
    numberRate: 12000,
    imgUrl: [],
  };
  return (
    <>
      {data === undefined || data === null ? (
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
                      {parseMoney((data.amount * (100 - data.promotion)) / 100)}
                      &nbsp;vnđ
                    </span>

                    <del className="price">
                      {parseMoney(data.amount)}&nbsp;vnđ
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
                      value={number}
                      defaultValue={1}
                      style={{ width: 70 }}
                    />
                  </div>
                  <div className="btn-add-to-cart">
                    <RiShoppingCartFill />
                    Thêm vào giỏ
                  </div>
                  <div
                    className="compare btn-add-to-cart"
                    onClick={() => setModalVisible(true)}
                  >
                    <MdCompare />
                    So Sánh
                  </div>
                  <Compare
                    productCurrent={data}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                </div>
                <div className="tag-relation">
                  <span>Đề xuất</span>
                  <div className="tag">
                    <span>Laptop dell</span>
                    <span>Laptop dell</span>
                    <span>Laptop dell</span>
                    <span>Laptop dell</span>
                    <span>Laptop dell</span>
                    <span>Laptop dell</span>
                    <span>Laptop dell</span>
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
