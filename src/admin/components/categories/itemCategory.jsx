import {
  Input,
  InputNumber,
  notification,
  Popconfirm,
  Select,
  Tag,
  Typography,
} from "antd";
import { useRef, useState } from "react";

import { Avatar } from "antd";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import CATEGORIES from "../../../api/categories";

import { Col, Modal, Row } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const { Option } = Select;
const { Paragraph, Text } = Typography;
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
const Item = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  padding: 20px;
  font-size: 16px;
  align-items: center;
  height: 100%;
  .label {
    font-weight: 600;
  }
  .option {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    z-index: 100;
  }
  .content {
    width: 60%;
  }
  .active {
    width: 20%;
    .tag-active {
      font-size: 16px;
      width: 50px;
      height: 25px;
      line-height: 25px;
      text-align: center;
    }
  }
  .name {
    text-transform: capitalize;
    width: 180px;
  }
  .description {
    width: 180px;

    color: #585858;
  }
  .ant-row .action {
  }
  .icon {
    cursor: pointer;
    margin: 10px;
  }
  .delete {
    color: #972222cf;
    cursor:pointer &:hover {
      color: #d86363b8;
    }
  }
  .edit {
    cursor: pointer;
    color: #1890ff;
    &:hover {
      color: #137ee2cc;
    }
  }
  .save {
    color: #1890ff;
    margin-left: 40px;
    &:hover {
      color: #188fffa6;
    }
  }
  input.ant-input.name {
    margin-bottom: 5px;
  }
  .row-custom {
    margin-bottom: 10px;
  }
  .ant-typography p,
  div.ant-typography {
    margin-bottom: 0 !important;
  }
`;
const OptionStyle = styled.div`
  width: 85px;
  font-size: 25px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ItemCategory = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const data = useRef({
    id: item.id,
    name: "",
    description: "",
    slug: "thien",
    level: 0,
    order: 0,
    isShowed: true,
    parentId: "ca0b2930-52a3-4590-9964-08da5204363b",
  });

  function actionUpdateCategory() {
    setLoading(true);

    CATEGORIES.put(data.current)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
        setIsModalVisible(false);
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  function actionDeleteCategory() {
    setLoading(true);
    CATEGORIES.delete({ id: item.id })
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  return (
    <>
      <Item>
        <div className="option">
          <Row gutter={[24, 0]} className="action">
            <OptionStyle>
              <Popconfirm
                title="Bạn có muốn xóa ?"
                onConfirm={actionDeleteCategory}
                // onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <MdDelete
                  className="icon delete"
                  style={{ cursor: "pointer" }}
                />
              </Popconfirm>

              <MdOutlineModeEditOutline
                className="icon edit"
                onClick={showModal}
                style={{ cursor: "pointer" }}
              />
            </OptionStyle>
          </Row>
        </div>
        <Modal
          style={{
            top: 20,
          }}
          width={600}
          title={
            <div style={{ fontWeight: 600, fontSize: 18 }}>
              Thay đổi loại sản phẩm
            </div>
          }
          visible={isModalVisible}
          onCancel={handleCancel}
          onOk={actionUpdateCategory}
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
                    defaultValue={item.name}
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
                    defaultValue={item.description}
                    maxLength={1000}
                    style={{ height: "150px" }}
                    onChange={(element) =>
                      (data.current.description = element?.target.value)
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
                      size="large"
                      defaultValue={item.order}
                      ref={(element) =>
                        (data.current.order = parseInt(element?.value))
                      }
                    />
                  </div>
                </Group>
                <Group>
                  <div className="show">
                    <h6>Trạng thái</h6>
                    <Select
                      size="large"
                      style={{
                        width: 120,
                      }}
                      defaultValue={item.isShowed}
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
        <Row gutter={[24, 0]}>
          <Col>
            <Avatar.Group>
              <Avatar size={81} shape="square" src={item.imageUrl} />
            </Avatar.Group>
          </Col>
          <Col>
            <Row gutter={[24, 0]} className="row-custom">
              <span className="label">Thứ tự:</span>
              &nbsp;
              <span className="order">{item.order}</span>
            </Row>
            <Row gutter={[24, 0]} className="row-custom">
              <span className="label">Tên:</span>
              &nbsp;
              <span className="name">
                <Paragraph
                  ellipsis={{
                    rows: 2,
                    expandable: false,
                    tooltip: item.name,
                  }}
                >
                  {item.name}
                </Paragraph>
              </span>
            </Row>
            <Row gutter={[24, 0]} className="row-custom">
              <span className="label">Mô tả:</span>
              &nbsp;
              <span className="description">
                <Paragraph
                  ellipsis={{
                    rows: 2,
                    expandable: false,
                    tooltip: item.description,
                  }}
                >
                  {item.description}
                </Paragraph>
              </span>
            </Row>
            <Row gutter={[24, 0]} className="row-custom">
              <span className="label">Trạng thái:</span>
              &nbsp;
              <span className="active">
                {" "}
                <Tag
                  className="tag-active"
                  color={item.isShowed ? "blue" : "gold"}
                >
                  {item.isShowed ? "Hiên" : "Ẩn"}
                </Tag>
              </span>
            </Row>
          </Col>
        </Row>
      </Item>
    </>
  );
};

export default ItemCategory;
