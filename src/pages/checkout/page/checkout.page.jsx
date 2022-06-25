import { InputNumber, Table } from "antd";
import styled from "styled-components";

import { Avatar, Button } from "antd";

import { MdDelete } from "react-icons/md";
import Address from "../components/address";
import Total from "../components/total";

const TextAlign = styled.div`
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
    background: #40a9ff !important;
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

const Checkout = () => {
  const data = [
    {
      id: "",
      imageUrl: "",
      name: "thien thien thien",
      quantity: 10,
      amount: 12000,
      promotion: 30,
    },
  ];

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
            <p>{quantity}</p>
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
  ];
  return (
    <>
      <div className="container">
        <TextAlign>
          <div className="table-responsive pb-5">
            <TableStyle>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={false}
                className="ant-border-space"
              />
            </TableStyle>
            <Address />
            <Total />
          </div>
        </TextAlign>
      </div>
    </>
  );
};

export default Checkout;
