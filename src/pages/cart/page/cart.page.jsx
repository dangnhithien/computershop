import {
  Col,
  Drawer,
  Empty,
  InputNumber,
  notification,
  Row,
  Table,
} from "antd";
import styled from "styled-components";

import { Avatar, Button } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import { PATH } from "utils/const";
import Checkout from "../components/checkout";
import useStoreCart from "store/cart";
import parseMoney from "utils/parseMoney";
import {
  StyleBoxFixed,
  StyleTable,
  StyleTextAlign,
  StyleTitle,
} from "../style/style";
import CART from "api/cart";
import useStoreUser from "store/personal";
import Coupon from "../components/coupon";

const { confirm } = Modal;
const Cart = () => {
  const [offset, setOffset] = useState(0);
  const heightTable = useRef();

  const [selectedRowId, setselectedRowId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [couponApplied, setCouponApplied] = useState(null);
  const [data, setData] = useState([]);
  const dataCart = useStoreCart((state) => state.cart);
  const setCart = useStoreCart((state) => state.setCart);

  const userProfile = useStoreUser((state) => state.profile);
  const [totalPrice, setTotalPrice] = useState(0);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showDeleteConfirm = (id) => {
    confirm({
      title: "Bạn chắc chắn muốn xóa",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa ",
      okType: "danger",
      cancelText: "Hủy",
    });
  };

  const onSelectChange = (newselectedRowId) => {
    setTotalPrice(
      dataCart
        .filter((item) => newselectedRowId.includes(item.id))
        .reduce((total, current) => {
          return (total += current.price * current.quantity);
        }, 0)
    );
    setselectedRowId(newselectedRowId);
  };
  function actionPutCart(item) {
    setLoading(true);
    CART.put(item)
      .then((res) => {
        setLoading(false);
        setCart(userProfile.id);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  const rowSelection = {
    selectedRowId,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "sản phẩm",
      dataIndex: "productName",
      key: "id",

      render: (_, { productName, imageUrl }) => {
        return (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={64}
                src={imageUrl}
              ></Avatar>
              <div className="avatar-info">
                <StyleTitle>{productName}</StyleTitle>
              </div>
            </Avatar.Group>
          </>
        );
      },
    },

    {
      title: "Đơn giá",
      key: "price",
      dataIndex: "price",
      render: (_, { price }) => {
        return <p>{price}</p>;
      },
    },
    {
      title: "Số lượng",
      key: "quantity",
      dataIndex: "quantity",

      render: (_, data) => {
        return (
          <>
            <InputNumber
              min={1}
              max={20}
              value={data.quantity}
              onChange={(value) => {
                actionPutCart({
                  ...data,
                  quantity: value,
                  userid: userProfile.id,
                });
              }}
            />
          </>
        );
      },
    },
    {
      title: "Tổng tiền",
      key: "price",
      dataIndex: "price",

      render: (_, { quantity, price }) => {
        return (
          <>
            <p>{price * quantity}</p>
          </>
        );
      },
    },
    // {

    {
      title: "",
      key: "quantity",
      dataIndex: "quantity",
      render: (_, item) => {
        return (
          <>
            <div className="ant-employed">
              <div className="col-action">
                <Button
                  type="link"
                  danger
                  style={{ fontSize: 25 }}
                  onClick={() => showDeleteConfirm(item.id)}
                >
                  <MdDelete />
                </Button>
              </div>
            </div>
          </>
        );
      },
      width: "100px",
    },
  ];
  return (
    <>
      <Coupon
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setCouponApplied={setCouponApplied}
      />
      <div className="container">
        <StyleTextAlign>
          {dataCart.length > 0 ? (
            <StyleTable>
              <Table
                loading={loading}
                columns={columns}
                rowKey="id"
                rowSelection={{ ...rowSelection }}
                dataSource={dataCart}
                pagination={false}
                scroll={false}
                className="ant-border-space"
                ref={heightTable}
              />
              <div className="delete-all">
                <MdDelete onClick={showDeleteConfirm} />
                <span>Xóa đã chọn ({selectedRowId.length} sản phẩm)</span>
              </div>
              <StyleBoxFixed
                className={
                  offset > heightTable.current?.clientHeight - 290
                    ? "position-unset"
                    : ""
                }
              >
                <Row gutter={[8, 8]} justify="end" align="middle">
                  <Col span={6}>
                    <div className="label">Áp dụng: </div>
                  </Col>
                  <Col span={10}>
                    <div className="amount">
                      {couponApplied ? couponApplied.name : "Thêm ưu đãi"}
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      className="voucher"
                      style={{ cursor: "pointer" }}
                      onClick={() => setModalVisible(true)}
                    >
                      Chọn mã giảm giá
                    </div>
                  </Col>

                  <Col span={10}>
                    <div className="total">
                      Tổng tiền <span>({selectedRowId.length} sản phẩm) </span>:
                    </div>
                  </Col>
                  <Col span={8}>
                    {" "}
                    <div className="price">&#8363;{parseMoney(totalPrice)}</div>
                  </Col>
                  <Col span={6}>
                    {" "}
                    <Button
                      type="primary"
                      className="btn-purchase"
                      onClick={showDrawer}
                      disabled={selectedRowId.length === 0}
                    >
                      Mua hàng
                    </Button>
                    <Drawer
                      title="Thanh toán"
                      placement="right"
                      // size="large"
                      width={450}
                      onClose={onClose}
                      visible={visible}
                    >
                      <Checkout
                        total={totalPrice}
                        setTotalPrice={setTotalPrice}
                      />
                    </Drawer>
                  </Col>
                </Row>
              </StyleBoxFixed>
            </StyleTable>
          ) : (
            <>
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                  height: 60,
                }}
                description="Chưa có sản phẩm trong giỏ"
              >
                <Button type="primary">
                  <Link to={PATH.PRODUCT}>Thêm ngay</Link>
                </Button>
              </Empty>
            </>
          )}
        </StyleTextAlign>
      </div>
    </>
  );
};

export default Cart;
