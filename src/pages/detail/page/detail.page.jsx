import { Col, Row } from "antd";

import Comments from "components/modal-feed-back/comment";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import AddToCart from "../components/addToCart";
import Content from "../components/content";
import Gallery from "../components/gallery";
import ModalDetail from "../components/modal-detail";
import TagRelation from "../components/tag-relation";
import { StyleContainer, StyleTable } from "../style/style";

const Detail = () => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <div className="container">
        <StyleContainer>
          <Row gutter={[24, 0]}>
            <Col span={14}>
              <Gallery />
            </Col>
            <Col span={10}>
              <Content />
              <AddToCart />

              <TagRelation />
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
                      <td colSpan="2" className="table-title">
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
                        <p>Realtek High Definition Audio (Speaker : 2 x 2W)</p>
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
                          Type-C with DisplayPort, 1x HDMI 1.4, 1x Headset port,
                          1x DC-in Jack
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
                <div className="more" onClick={() => setModalVisible(true)}>
                  Xem thêm &nbsp;
                  <FaAngleDoubleDown />
                </div>
              </StyleTable>
              <ModalDetail
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            </Col>
          </Row>
        </StyleContainer>
      </div>
    </>
  );
};

export default Detail;
