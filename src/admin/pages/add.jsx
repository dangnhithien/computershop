import {
  Row,
  Col,
  Card,
  Typography,
  Input,
  InputNumber,
  Slider,
  Button,
} from "antd";
import { Select } from "antd";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReactQuill from "react-quill";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadImage = styled.div`
  .ant-upload.ant-upload-select-picture-card,
  .ant-upload-list-picture-card-container {
    width: 150px;
    height: 150px;
  }
`;
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
const Quill = styled.div`
  .quill {
    margin-bottom: 40px;
    height: 350px;
  }
`;
const { Option } = Select;
const { TextArea } = Input;

const { Title } = Typography;

const Add = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [inputValue, setInputValue] = useState(1);
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "color",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
  ];
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const onChangeValuePrice = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title={
              <Link to="/san-pham" style={{ color: "black" }}>
                <AiOutlineArrowLeft />
                <span style={{ marginLeft: 10 }}>Quay lại</span>
              </Link>
            }
          >
            {" "}
          </Card>
          <Card className="header-solid h-full" bordered={false}>
            <Row gutter={[24, 0]}>
              <Col xs="24" xl={24}>
                <Group>
                  <div className="title">
                    <h6>Tiêu đề</h6>
                    <Input showCount maxLength={256} />
                  </div>
                </Group>
                <Group>
                  <Row gutter={[24, 0]}>
                    <Col xs={24} md={4}>
                      <div className="categories ">
                        <h6>Loại sản phẩm</h6>
                        <Select
                          defaultValue="lucy"
                          style={{ width: 150 }}
                          size="large"
                          onChange={handleChange}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Laptop dell</Option>
                          <Option value="disabled" disabled>
                            Disabled
                          </Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </Col>
                    <Col xs={24} md={4}>
                      <div className="quantity">
                        <h6>Số lượng</h6>
                        <InputNumber
                          min={1}
                          max={100}
                          defaultValue={1}
                          size="large"
                          // onChange={setValue}
                        />
                      </div>
                    </Col>
                  </Row>
                </Group>
                <Group>
                  <div className="description">
                    <Row>
                      <Col span={10}>
                        <h6>Giá bán</h6>
                        <Slider
                          min={1}
                          max={20}
                          onChange={onChangeValuePrice}
                          value={
                            typeof inputValue === "number" ? inputValue : 0
                          }
                          style={{ marginTop: 22 }}
                        />
                      </Col>
                      <Col span={4}>
                        <InputNumber
                          min={1}
                          max={20}
                          style={{ marginLeft: 16, marginTop: 28 }}
                          value={inputValue}
                          onChange={onChangeValuePrice}
                          size="large"
                        />
                      </Col>
                      <Col span={4}>
                        <div className="promotion-price  ">
                          <h6>Giảm giá</h6>
                          <Select
                            defaultValue="0"
                            style={{ width: 120 }}
                            size="large"
                            onChange={handleChange}
                          >
                            <Option value="0">0%</Option>
                            <Option value="10">10%</Option>
                            <Option value="20">20%</Option>
                            <Option value="30">30%</Option>
                          </Select>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Group>
                <Group>
                  <div className="description">
                    <h6>Mô tả</h6>
                    <TextArea
                      showCount
                      maxLength={1000}
                      style={{ height: "200px" }}
                    />
                  </div>
                </Group>
                <Group>
                  <div className="posts">
                    <h6>Bài viết</h6>
                    <Quill>
                      <ReactQuill formats={formats} modules={modules} />
                    </Quill>
                  </div>
                </Group>
                <Group>
                  <div className="upload-image ">
                    <h6>Chọn hình ảnh</h6>
                    <div className="upload">
                      <UploadImage>
                        <Upload
                          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture-card"
                          // fileList={fileList}
                          onPreview={handlePreview}
                          onChange={handleChange}
                        >
                          {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal
                          visible={previewVisible}
                          title={previewTitle}
                          footer={null}
                          onCancel={handleCancel}
                        >
                          <img
                            alt="example"
                            style={{
                              width: "100%",
                            }}
                            src={previewImage}
                          />
                        </Modal>
                      </UploadImage>
                    </div>
                  </div>
                </Group>
                <Group>
                  <div className="save">
                    <Button type="primary" className="btn-save">
                      <span>Lưu sản phẩm</span>
                    </Button>
                  </div>
                </Group>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Add;
