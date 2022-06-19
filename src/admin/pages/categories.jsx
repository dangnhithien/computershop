import {
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  notification,
  Pagination,
  Row,
} from "antd";

import { useEffect, useRef, useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import styled from "styled-components";
import ItemCategory from "../components/categories/itemCategory";
import { Select } from "antd";
import CATEGORIES from "../../api/categories";
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
const Item = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  padding: 15px 10px;

  align-items: center;
  .order {
    text-align: center;
    width: 40px;
    font-size: 18px;
    font-weight: 700;
    border-right: 1px dotted #e1dcdc;
    margin-right: 10px;
    height: 50px;
    line-height: 50px;
  }
  .content {
    width: 60%;
  }
  .active {
    width: 20%;
    .tag-active {
      width: 70px;
      height: 30px;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 10px;
    }
  }
  .name {
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
    color: #1890ff;
  }
  .description {
    color: #686868;
    font-size: 14px;
  }
  .action {
    font-size: 25px;
  }
  .icon {
    cursor: pointer;
    margin: 10px;
  }
  .delete {
    color: #cf0000;
    &:hover {
      color: #cf0000b9;
    }
  }
  .edit {
    color: #00e396;
    &:hover {
      color: #00e397a4;
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
`;
const PaginationStyle = styled.div`
  display: flex;
  margin: 40px 0;
  justify-content: center;
`;

const Categories = () => {
  const [md, setMd] = useState(4);
  const [loading, setLoading] = useState(false);

  const data = useRef({
    name: "",
    description: "",
    slug: "thien",
    level: 0,
    order: 0,
    isShowed: true,
    parentId: "936DA01F-9ABD-4d9d-80C7-02AF85C822A8",
  });

  useEffect(() => {});

  function actionPostData() {
    setLoading(true);
    console.log(data.current);
    CATEGORIES.post(data.current)
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

  function changeMd() {
    if (md == 4) {
      setMd(0);
      return;
    }
    setMd(4);
  }

  const information = [
    {
      name: "laptop dell",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "1",
    },
    {
      name: "laptop asus",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "2",
    },
    {
      name: "macbook",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "3",
    },
    {
      name: "macbook",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      order: "4",
    },
  ];

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={md} className="mb-24"></Col>
        <Col span={24} md={16} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[
              <h5 className="font-semibold m-0">Danh sách loại sản phẩm</h5>,
            ]}
            bodyStyle={{ paddingTop: "0" }}
            extra={
              md == 4
                ? [
                    <Button
                      className="custom"
                      onClick={changeMd}
                      style={{ fontSize: 16, border: "none" }}
                    >
                      Thêm
                      <MdDoubleArrow />
                    </Button>,
                  ]
                : ""
            }
          >
            <Row gutter={[24, 24]}>
              {information.map((e, index) => {
                return (
                  <Col span={24} key={index}>
                    <Item>
                      <ItemCategory item={e} />
                    </Item>
                  </Col>
                );
              })}
            </Row>
            <PaginationStyle>
              <Pagination
                total={85}
                showTotal={(total) => `Total ${total} items`}
                defaultPageSize={20}
                defaultCurrent={1}
              />
            </PaginationStyle>
          </Card>
        </Col>
        {md == 0 ? (
          <Col span={24} md={8} className="mb-24" style={{ maxHeight: 1000 }}>
            <Card
              bordered={false}
              bodyStyle={{ paddingTop: 0 }}
              className="header-solid h-full  ant-list-yes"
              title={<h5 className="font-semibold m-0">Thêm loại sản phẩm</h5>}
              extra={[
                <div
                  className="custom"
                  onClick={changeMd}
                  style={{ fontSize: 18, border: "none", cursor: "pointer" }}
                >
                  <FaTimes />
                </div>,
              ]}
            >
              <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                  <Group>
                    <div className="title">
                      <h6>Loại sản phẩm</h6>
                      <Input
                        showCount
                        maxLength={256}
                        ref={(element) =>
                          (data.current.name = element?.input?.value)
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
                        ref={(element) =>
                          (data.current.description =
                            element?.resizableTextArea?.textArea?.value)
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
                            (data.current.order = parseInt(element?.value))
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

              <div className="mt-5 ml-15 pb-15 ">
                <Button
                  type="primary"
                  style={{ width: 320 }}
                  loading={loading}
                  onClick={actionPostData}
                >
                  Lưu
                </Button>
              </div>
            </Card>
          </Col>
        ) : (
          <></>
        )}
      </Row>
    </>
  );
};

export default Categories;
