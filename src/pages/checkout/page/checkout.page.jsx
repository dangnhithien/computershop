import React from "react";
import { Table } from "antd";
import img from "../../../assets/images/banner_images/banner-img770x496.jpg";
import Address from "../components/address";
import Total from "../components/total";

const dataSource = [
  {
    id: "1",
    image: img,
    productName: "laptop dell ",
    price: 1000,
    quantity: 5,
    total: 5000,
  },
  {
    id: "1",
    image: img,
    productName: "laptop dell ",
    price: 1000,
    quantity: 5,
    total: 5000,
  },
  {
    id: "1",
    image: img,
    productName: "laptop dell ",
    price: 1000,
    quantity: 5,
    total: 5000,
  },
  {
    id: "1",
    image: img,
    productName: "laptop dell ",
    price: 1000,
    quantity: 5,
    total: 5000,
  },
  {
    id: "1",
    image: img,
    productName: "laptop dell ",
    price: 1000,
    quantity: 5,
    total: 5000,
  },
];
const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
    width: 120,
    render: (text, image) => {
      return (
        <img
          src={`${image.image}`}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
    },
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "productName",
    key: "productName",
    width: "60%",
  },
  {
    title: "Đơn giá",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Thành tiền",
    dataIndex: "total",
    key: "total",
  },
];

const Checkout = () => {
  return (
    <>
      {/* ...:::: Start Checkout Section:::... */}
      <div className="checkout_section">
        <div className="container pt-50">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowClassName={() => "rowClassName1"}
            bordered
          />
          <Address />
          <Total />
        </div>
      </div>
      {/* ...:::: End Checkout Section:::... */}
    </>
  );
};

export default Checkout;
