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

import Carousel from "../../../components/carousel/carousel";
import { PATH } from "../../../utils/const";
import Checkout from "../components/checkout";
import useStoreCart from "../../../store/cart";
import parseMoney from "../../../utils/parseMoney";
import {
  StyleBoxFixed,
  StyleTable,
  StyleTextAlign,
  StyleTitle,
} from "../style/style";

const { confirm } = Modal;
const Cart = () => {
  const [offset, setOffset] = useState(0);
  const heightTable = useRef();

  const [selectedRowId, setselectedRowId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  // const dataCart = useStoreCart((state) => state.cart);
  const dataCart = [
    {
      id: 1,
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      imageUrl: "https://picsum.photos/300/600",
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
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

  const item = [
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
    {
      id: "",
      slug: "",
      amount: 1000000,
      promotion: 10,
      name: "New Balance Fresh Foam Kaymin Car Purts ",
      detail: "new-balance-fresh-foam-kaymin-car-purts",
      rate: 4,
      countRate: 5,
      imageUrl: "https://picsum.photos/300/600",
    },
  ];
  const onSelectChange = (newselectedRowId) => {
    setselectedRowId(newselectedRowId);
  };

  const rowSelection = {
    selectedRowId,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "sản phẩm",
      dataIndex: "name",
      key: "id",

      render: (_, { name, imageUrl }) => {
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
                <StyleTitle>{name}</StyleTitle>
              </div>
            </Avatar.Group>
          </>
        );
      },
    },

    {
      title: "Đơn giá",
      key: "amount",
      dataIndex: "amount",
      render: (_, { amount }) => {
        return <p>{amount}</p>;
      },
    },
    {
      title: "Số lượng",
      key: "quantity",
      dataIndex: "quantity",

      render: (_, { quantity }) => {
        return (
          <>
            <InputNumber min={1} max={10} defaultValue={quantity} />
          </>
        );
      },
    },
    {
      title: "Tổng tiền",
      key: "price",
      dataIndex: "price",

      render: (_, { quantity, amount, promotion }) => {
        return (
          <>
            <p>{(promotion * amount * quantity) / 100}</p>
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
                <Row
                  gutter={[24, 0]}
                  style={{ alignItems: "center", justifyContent: "end" }}
                >
                  <Col span={6}>
                    <div className="label">Áp dụng: </div>
                  </Col>
                  <Col span={10}>
                    <div className="amount">Giảm 90%</div>
                  </Col>
                  <Col span={8}>
                    <div className="voucher">Chọn mã giảm giá</div>
                  </Col>

                  <Col span={11}>
                    <div className="total">
                      Tổng tiền <span>({selectedRowId.length} sản phẩm) </span>:
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div className="price">{parseMoney(24000000)}vnđ</div>
                  </Col>
                  <Col>
                    {" "}
                    <Button
                      type="primary"
                      className="btn-purchase"
                      onClick={showDrawer}
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
                      <Checkout />
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
        <Carousel data={item} />
      </div>
    </>
  );
};

export default Cart;
