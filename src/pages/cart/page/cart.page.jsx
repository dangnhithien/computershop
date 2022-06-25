import { Col, Empty, InputNumber, Row, Table } from "antd";
import styled from "styled-components";

import { Avatar, Button } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TextAlign = styled.div`
  min-height: 350px;
  padding-bottom: 20px;
  margin-top: 100px;
  .table-responsive table tbody tr td {
    text-align: left !important;
  }
  .ant-table-pagination-right {
    justify-content: center !important;
  }
`;
const TableStyle = styled.div`
  thead {
    background: #333333 !important;
    color: #fff !important;
  }
  thead tr th {
    font-size: 14px;
    color: #fff !important;
  }
  .ant-table-filter-trigger.active {
    color: red;
  }
`;
const StyleTitle = styled.div`
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  white-space: break-spaces;
  text-overflow: ellipsis;
  width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyleCheckout = styled.div`
  position: fixed;
  padding: 15px;
  bottom: 10px;
  right: 10px;
  background: #fff;
  color: #333333;
  width: 500px;
  min-height: 100px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &.position-unset {
    position: unset;
    box-shadow: none;
    margin-left: auto;
    border: 1px solid #f1f1f1;
    margin-top: 20px;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .voucher {
    text-align: right;
    padding: 10px;
    color: #0055bd;
  }
  .label {
    text-align: right;
  }

  .total {
    font-size: 24px;

    text-transform: capitalize;
  }
  .price {
    font-size: 18px;

    font-weight: 600;
  }
  .amount {
    color: #4fc383;
  }
  button.ant-btn.ant-btn-primary.btn-purchase {
    background: #ea1c26;
    width: 130px;
    font-size: 18px;
    border: none;
    &:hover {
      background-color: #ea1c26a9;
    }
  }
`;

const { confirm } = Modal;
const Cart = () => {
  const [offset, setOffset] = useState(0);
  const heightTable = useRef();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const data = [
    // {
    //   id: "",
    //   imageUrl: "",
    //   name: "thien thien thien",
    //   quantity: 10,
    //   amount: 12000,
    //   promotion: 30,
    // },
  ];
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Bạn chắc chắn muốn xóa",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa ",
      okType: "danger",
      cancelText: "Hủy",

      onOk() {
        // actionDeleteSingleProduct(id);
      },

      // onCancel() {
      //   console.log("Cancel");
      // },
    });
  };
  const columns = [
    {
      title: "sản phẩm",
      dataIndex: "name",
      key: "name",

      render: (_, { name, avatar }) => {
        return (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={64}
                src=""
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
        <TextAlign>
          {data.length > 0 ? (
            <div className="table-responsive pb-5">
              <TableStyle>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  scroll={false}
                  className="ant-border-space"
                  ref={heightTable}
                />

                <StyleCheckout
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
                    <Col span={6}>
                      <div class="amount">Giảm 90%</div>
                    </Col>
                    <Col span={12}>
                      <div className="voucher">Chọn mã giảm giá</div>
                    </Col>

                    <Col span={8}>
                      <div className="total">Tổng tiền :</div>
                    </Col>
                    <Col>
                      {" "}
                      <div className="price">12.000.000 vnđ</div>
                    </Col>
                    <Col>
                      {" "}
                      <Button type="primary" className="btn-purchase">
                        Mua hàng
                      </Button>
                    </Col>
                  </Row>
                </StyleCheckout>
              </TableStyle>
            </div>
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
                  <Link to="/mua-hang">Thêm ngay</Link>
                </Button>
              </Empty>
            </>
          )}
        </TextAlign>
      </div>
    </>
  );
};

export default Cart;
