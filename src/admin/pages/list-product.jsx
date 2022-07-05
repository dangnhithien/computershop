import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  notification,
  Popconfirm,
  Radio,
  Row,
  Tag,
} from "antd";

import styled from "styled-components";

import { Modal, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { MdDelete, MdFilterListAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import CATEGORIES from "../../api/categories";
import PRODUCT from "../../api/product";
import SUPPLIERS from "../../api/suppliers";
import face2 from "../assets/images/face-2.jpg";
import DetailProduct from "../components/detail/detailProduct";
import SpinCustom from "../components/loading/spinCustom";
import TableCustom from "../components/table/table";
import { PATH_ADIM } from "../../utils/const";

const { Option } = Select;
const { confirm } = Modal;

const Custom = styled.div`
  display: flex;
  .custom {
    font-size: 16px;
    height: 40px;
    margin-left: 10px;
  }
  .ant-input {
    height: auto;
  }
  .ant-input-group-addon {
    background-color: #1890ff;
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
// const data = [
//   {
//     key: "1",
//     avatar: "http",
//     name: "laptop dell prison",
//     status: "public",
//     categories: " laptop dell",
//     provider: "Công ty abc",
//     purchased: 1000,
//   },
//   {
//     key: "2",
//     avatar: "http2",
//     name: "laptop dell prison",
//     status: "public",
//     categories: " laptop dell",
//     provider: "Công ty abc",
//     purchased: 1000,
//   },
// ];

const ListProduct = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    data: [],
  });
  const [data, setData] = useState(null);
  const [valueStatus, setValueStatus] = useState(2);
  const [listCategory, setListCategory] = useState([]);
  const [listSupplier, setListSupplier] = useState([]);

  const filter = useRef({
    advancedSearch: {
      fields: [""],
      keyword: "",
    },
    keyword: "",
    pageNumber: 0,
    pageSize: 0,
    orderBy: [""],
    supplierId: "",
    minimumRate: 1,
    maximumRate: 5,
  });
  useEffect(() => {
    actionGetAllProduct({ keyword: "" });
    actionGetAllCategories();
    actionGetAllSuppliers();
  }, []);

  function actionGetAllProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function actionDeleteSingleProduct(id) {
    setLoading(true);
    PRODUCT.delete({ id: id })
      .then((res) => {
        setLoading(false);
        notification.success({
          message: "Xóa thành công !",
          placement: "topRight",
        });
        actionGetAllProduct();
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Xóa không thành công !",
          placement: "topRight",
        });
      });
  }
  function actionGetAllCategories() {
    CATEGORIES.search({ keyword: "" })
      .then((res) => {
        setListCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function actionGetAllSuppliers() {
    SUPPLIERS.search({ keyword: "" })
      .then((res) => {
        setListSupplier(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Bạn chắc chắn muốn xóa",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa ",
      okType: "danger",
      cancelText: "Hủy",

      onOk() {
        actionDeleteSingleProduct(id);
      },

      // onCancel() {
      //   console.log("Cancel");
      // },
    });
  };

  const columns = [
    {
      title: "Tên",
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
                src={face2}
              ></Avatar>
              <div className="avatar-info">
                <StyleTitle>{name}</StyleTitle>
              </div>
            </Avatar.Group>
          </>
        );
      },
      width: "10%",
    },

    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = status === 1 ? "#2db7f5" : "#f50";
        return (
          <Tag
            color={color}
            style={{ height: "40px", fontSize: "14px", padding: "10px 20px" }}
          >
            {status === 1 ? "public" : "private"}
          </Tag>
        );
      },
    },
    {
      title: "Loại sản phẩm",
      key: "categories",
      dataIndex: "categories",

      render: (_, { categories }) => {
        return (
          <>
            <p>{categories}</p>
          </>
        );
      },
    },
    {
      title: "Nhãn hàng",
      key: "supplierName",
      dataIndex: "supplierName",

      render: (_, { supplierName }) => {
        return (
          <>
            <p>{supplierName}</p>
          </>
        );
      },
    },
    // {
    //   title: "Đánh giá",
    //   key: "rate",
    //   dataIndex: "rate",

    //   render: (_, { rate }) => {
    //     return (
    //       <>
    //         <p>{rate}/5 sao </p>
    //       </>
    //     );
    //   },
    // },
    {
      title: "Số lượng",
      key: "quantity",
      dataIndex: "quantity",
      render: (_, item) => {
        return (
          <>
            <div className="ant-employed">
              <span
                style={{ width: "50px", textAlign: "center", marginRight: 50 }}
              >
                {item.quantity}
              </span>
              <div className="col-action">
                <Button
                  type="link"
                  danger
                  style={{ fontSize: 25 }}
                  onClick={() => showDeleteConfirm(item.id)}
                >
                  <MdDelete />
                </Button>

                <Button
                  type="link"
                  className="darkbtn"
                  style={{ fontSize: 25 }}
                >
                  <AiFillEye
                    onClick={() =>
                      setModalVisible({
                        visible: true,
                        data: item,
                      })
                    }
                  />
                </Button>
              </div>
            </div>
          </>
        );
      },
      with: "30%",
    },
  ];
  return (
    <>
      <DetailProduct
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Danh sách sản phẩm"
              style={{ minHeight: 500 }}
              extra={[
                <Custom>
                  <Input
                    size="large"
                    prefix={<SearchOutlined />}
                    addonAfter={
                      <Popconfirm
                        placement="bottom"
                        title={
                          <>
                            <Row gutter={[24, 0]} style={{ width: 400 }}>
                              <Col span={24}>
                                <Row
                                  gutter={[24, 0]}
                                  style={{ marginBottom: 5 }}
                                >
                                  <Col span={8}>
                                    <p>Trạng thái</p>
                                  </Col>
                                  <Col span={16}>
                                    <Row>
                                      <Radio.Group
                                        onChange={(e) =>
                                          setValueStatus(e.target.value)
                                        }
                                        value={valueStatus}
                                      >
                                        <Radio value={2}>All</Radio>
                                        <Radio value={1}>Public</Radio>
                                        <Radio value={0}>Private</Radio>
                                      </Radio.Group>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row
                                  gutter={[24, 0]}
                                  style={{ marginBottom: 5 }}
                                >
                                  <Col span={8}>
                                    <p>Loại sản phẩm</p>
                                  </Col>
                                  <Col span={16}>
                                    <Select
                                      size="large"
                                      mode="multiple"
                                      showArrow
                                      tagRender={tagRender}
                                      style={{
                                        width: "100%",
                                        marginTop: "-10px",
                                      }}
                                      // onChange={(value, option) => {
                                      //   console.log();
                                      // }}
                                    >
                                      {listCategory?.map((element, key) => {
                                        return (
                                          <Option key={key} value={element.id}>
                                            {element.name}
                                          </Option>
                                        );
                                      })}
                                    </Select>
                                  </Col>
                                </Row>
                                <Row
                                  gutter={[24, 0]}
                                  style={{ marginBottom: 5 }}
                                >
                                  <Col span={8}>
                                    <p>Nhãn hàng</p>
                                  </Col>
                                  <Col span={16}>
                                    <Select
                                      placeholder="nhãn hàng"
                                      style={{
                                        width: 120,
                                      }}
                                    >
                                      {listSupplier.map((item, key) => {
                                        return (
                                          <Option key={key} value={item.id}>
                                            {item.name}
                                          </Option>
                                        );
                                      })}
                                    </Select>
                                  </Col>
                                </Row>
                                {/* <Row>
                                  <Col span={8}>
                                    <p>Đánh giá</p>
                                  </Col>
                                  <Col span={16}>
                                    <div>
                                      <span
                                        style={{
                                          marginRight: 10,
                                          width: 30,
                                          display: "inline-block",
                                        }}
                                      >
                                        Từ:
                                      </span>
                                      <Rate allowHalf defaultValue={0} />
                                    </div>
                                    <div
                                      style={{
                                        textAlign: "center",
                                        fontSize: 21,
                                        marginLeft: "-40px",
                                      }}
                                    >
                                      <BsArrowDownShort />
                                    </div>
                                    <div>
                                      <span
                                        style={{
                                          marginRight: 10,
                                          width: 30,
                                          display: "inline-block",
                                        }}
                                      >
                                        Đến:
                                      </span>
                                      <Rate allowHalf defaultValue={5} />
                                    </div>
                                  </Col>
                                </Row> */}
                              </Col>
                            </Row>
                          </>
                        }
                        icon={<></>}
                        okText="Lọc"
                        cancelText="Hủy"
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            width: 50,
                            fontSize: 16,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#1890ff",
                            color: "#fff",
                          }}
                        >
                          Lọc
                          <MdFilterListAlt style={{ marginLeft: 10 }} />
                        </div>
                      </Popconfirm>
                    }
                    placeholder="Tìm kiếm..."
                    width={230}
                    onChange={(element) => {
                      actionGetAllProduct({ keyword: element?.target.value });
                    }}
                  />
                  <Button type="primary" className="custom">
                    <Link to={PATH_ADIM.AAD_PRODUCT}>Thêm sản phẩm</Link>
                  </Button>
                </Custom>,
              ]}
            >
              {loading ? (
                <SpinCustom />
              ) : (
                <TableCustom data={data} columns={columns} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
const tagRender = (props) => {
  const { label, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color="#f50"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        margin: 3,
        fontSize: 14,
        lineHeight: "20px",
        minWidth: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textTransform: "capitalize",
      }}
    >
      {label}
    </Tag>
  );
};
export default ListProduct;
