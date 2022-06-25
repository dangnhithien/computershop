import {
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  notification,
  Pagination,
  Row,
  Modal,
} from "antd";

import { useEffect, useRef, useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import styled from "styled-components";
import ItemCategory from "../components/categories/itemCategory";
import { Select } from "antd";
import CATEGORIES from "../../api/categories";
import SpinCustom from "../components/loading/spinCustom";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
const { TextArea } = Input;
const Group = styled.div`
  /* margin-bottom: 20px; */
  padding: 12px;
  h6 {
    font-weight: bold;
  }
  .btn-save {
    height: 50px;
    font-size: 16px;
  }
`;
const AddCategory = styled.div`
  box-shadow: rgb(193 193 193) 3px 3px 6px 0px inset,
    rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;
  min-height: 200px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  cursor: pointer;
  background: rgba(241, 241, 241, 0.397);
  color: rgb(24, 144, 255);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background: rgb(241, 241, 241);
    color: rgb(96, 166, 231);
  }
`;
const PaginationStyle = styled.div`
  display: flex;
  margin: 40px 0;
  justify-content: center;
`;

const Categories = () => {
  const [md, setMd] = useState(4);
  const [loading, setLoading] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const data = useRef({
    name: "",
    description: "",
    level: 0,
    order: 0,
    isShowed: true,
    parentId: "ca0b2930-52a3-4590-9964-08da5204363b",
  });

  useEffect(() => {
    actionGetAllCategories();
  }, []);

  function actionCreateSingleCategory() {
    setLoading(true);
    CATEGORIES.post(data.current)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
        setIsModalVisible(false);
        actionGetAllCategories();
      })
      .catch((res) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  function actionGetAllCategories() {
    setLoading(true);
    CATEGORIES.search({ keyword: "" })
      .then((res) => {
        setListCategory(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  function changeMd() {
    if (md == 4) {
      setMd(0);
      return;
    }
    setMd(4);
  }

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={24} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[
              <h5 className="font-semibold m-0">Danh sách loại sản phẩm</h5>,
            ]}
            bodyStyle={{ paddingTop: "0" }}
          >
            {loading ? (
              <SpinCustom />
            ) : (
              <>
                <Row gutter={[24, 24]}>
                  <Col span={8}>
                    <AddCategory onClick={showModal}>
                      <span>Thêm mới </span>&nbsp;
                      <PlusOutlined />
                    </AddCategory>
                    <Modal
                      style={{
                        top: 20,
                      }}
                      width={600}
                      title={
                        <div style={{ fontWeight: 600, fontSize: 18 }}>
                          Thêm loại sản phẩm
                        </div>
                      }
                      visible={isModalVisible}
                      onCancel={handleCancel}
                      onOk={actionCreateSingleCategory}
                      bodyStyle={{ height: 500 }}
                      okText="Lưu"
                      cancelText="Hủy"
                    >
                      <Row gutter={[24, 0]}>
                        <Col xs="24" xl={24}>
                          <Group>
                            <div className="title">
                              <h6>Loại sản phẩm</h6>
                              <Input
                                showCount
                                maxLength={256}
                                onChange={(element) =>
                                  (data.current.name = element?.target.value)
                                }
                              />
                            </div>
                          </Group>

                          <Group>
                            <div className="description">
                              <h6>Mô tả</h6>
                              <TextArea
                                showCount
                                maxLength={1000}
                                style={{ height: "150px" }}
                                onChange={(element) =>
                                  (data.current.description =
                                    element?.target.value)
                                }
                              />
                            </div>
                          </Group>
                          <Row>
                            <Group>
                              <div className="order">
                                <h6>Vị trí </h6>
                                <InputNumber
                                  min={1}
                                  max={50}
                                  defaultValue={3}
                                  size="large"
                                  ref={(element) =>
                                    (data.current.order = parseInt(
                                      element?.value
                                    ))
                                  }
                                />
                              </div>
                            </Group>
                            <Group>
                              <div className="show">
                                <h6>Trạng thái</h6>
                                <Select
                                  defaultValue={true}
                                  size="large"
                                  style={{
                                    width: 120,
                                  }}
                                  onChange={(value) => {
                                    data.current.isShowed = value;
                                  }}
                                >
                                  <Option value={true}>Hiện</Option>
                                  <Option value={false}>Ẩn</Option>
                                </Select>
                              </div>
                            </Group>
                          </Row>
                        </Col>
                      </Row>
                    </Modal>
                  </Col>
                  {listCategory.map((item, index) => {
                    return (
                      <Col span={8} key={index}>
                        <ItemCategory item={item} />
                      </Col>
                    );
                  })}
                </Row>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Categories;
