import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Slider,
  Steps,
  Tag,
  Typography,
  Upload,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CATEGORIES from "../../api/categories";
import PRODUCT from "../../api/product";

const { Step } = Steps;
const { Option } = Select;

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
const Created = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 12px;
  color: #1890ff;
`;
const IconStep = styled.div`
  margin: 50px;
  .anticon svg {
    margin-bottom: 10px;
  }
`;
const { TextArea } = Input;

const Add = () => {
  const [current, setStepCurrent] = useState(0);

  const product = useRef({
    name: "",
    slug: "string",
    description: "string",
    rate: 1,
    quantity: 0,
    status: 0,
    supplierId: "string",
  });
  const categories = useRef({
    productId: "",
    categoryId: [],
  });
  const nameCategories = useRef([]);
  const price = useRef({
    productId: "string",
    amount: 0,
  });
  const image = useRef({
    productId: "string",
    imagePath: "string",
    fileSize: 0,
    type: 0,
    description: "string",
  });

  const onChangeStep = (value) => {
    setStepCurrent(value);
  };
  function displayStep() {
    console.log(product);
    if (current == 0) {
      return <ChooseTitle setStepCurrent={setStepCurrent} product={product} />;
    }
    if (current == 1) {
      return (
        <ChooseCategory
          setStepCurrent={setStepCurrent}
          categories={categories}
          nameCategories={nameCategories}
        />
      );
    }
    if (current == 2) {
      return (
        <ChooseContent
          setStepCurrent={setStepCurrent}
          product={product}
          image={image}
          price={price}
          nameCategories={nameCategories}
        />
      );
    }
  }

  return (
    <>
      <Row gutter={[24, 0]} className="mb-24">
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
          />
          <IconStep>
            <Steps current={current}>
              <Step title="" description="Tên sản phẩm" />
              <Step title="" description="Loại sản phẩm" />
              <Step title="" description="Thông tin " />
            </Steps>
          </IconStep>
          {displayStep()}
        </Col>
      </Row>
    </>
  );
};

const ChooseTitle = ({ setStepCurrent, setIdProduct, product }) => {
  const inintInput = {
    status: "",
    playholder: "Nhập tên sản phẩm",
  };
  const [validateInput, setValidateInput] = useState(inintInput);
  function actionCreateTitle() {
    PRODUCT.create(product)
      .then((res) => {
        setIdProduct(res.data.data);
      })
      .catch((error) => {
        console.log("lỗi");
      });
  }

  return (
    <>
      <Card className="header-solid mb-10" bordered={false}>
        <Group>
          <div className="title">
            <h6>Tiêu đề</h6>
            <Input
              showCount
              status={validateInput.status}
              placeholder={validateInput.playholder}
              prefix={validateInput.prefix ? <ImWarning /> : ""}
              maxLength={256}
              onChange={(element) => {
                setValidateInput(inintInput)(
                  (product.current.name = element?.target.value)
                );
              }}
            />
          </div>
        </Group>
        <Row gutter={[24, 0]}>
          <Col span={24} className="my-5 text-end">
            <Button
              type="primary"
              onClick={() => {
                if (product.current.name == "") {
                  setValidateInput({
                    status: "warning",
                    playholder: "Không được bỏ trống",
                  });

                  return;
                }
                setStepCurrent(1);
              }}
            >
              Tiếp theo
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};

const ChooseCategory = ({ setStepCurrent, categories, nameCategories }) => {
  const [listCategory, setListCategory] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const inintInput = {
    status: "",
    playholder: "Nhập tên sản phẩm",
  };
  const [validateInput, setValidateInput] = useState(inintInput);

  function actionSearch(keyword) {
    CATEGORIES.search(keyword)
      .then((res) => {
        setListCategory(res.data.data);
      })
      .catch((error) => {
        console.log("lỗi");
      });
  }
  useEffect(() => {
    actionSearch({ keyword: "" });
  }, []);
  return (
    <>
      <Card className="header-solid mb-10" bordered={false}>
        <Group>
          <div className="title">
            <h6>Thể loại</h6>
            <Select
              status={validateInput.status}
              placeholder={validateInput.playholder}
              size="large"
              mode="multiple"
              showArrow
              tagRender={tagRender}
              disabled={disabled}
              style={{
                width: "100%",
                height: 50,
              }}
              onChange={(value, option) => {
                categories.current.categoryId = option.map((item) => item.id);
                nameCategories.current = value;
                if (categories.current.categoryId.length == 3)
                  setDisabled(true);
              }}
            >
              {listCategory?.map((element, key) => {
                return (
                  <Option key={key} value={element.name} id={element.id}>
                    {element.name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Group>
        <Row gutter={[24, 0]}>
          <Col span={12} className="my-5 text-start">
            <Button type="primary" onClick={() => setStepCurrent(0)}>
              Trước đó
            </Button>
          </Col>
          <Col span={12} className="my-5 text-end">
            <Button
              type="primary"
              onClick={() => {
                if (categories.current.categoryId.length == 0) {
                  setValidateInput({
                    status: "warning",
                    playholder: "Không được bỏ trống",
                  });

                  return;
                }
                setStepCurrent(2);
              }}
            >
              Tiếp theo
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
const ChooseContent = ({
  setStepCurrent,
  image,
  product,
  price,
  nameCategories,
}) => {
  const [inputValue, setInputValue] = useState(1);
  const onChangeValuePrice = (value) => {
    setInputValue(value);
  };

  const [valueStatus, setValueStatus] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
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
  return (
    <Card className="header-solid mb-10" bordered={false}>
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <div className="title">
            <Created>Lap top dell</Created>
          </div>
          <Row>
            <Col span={12}>
              <div>
                <h6
                  style={{
                    fontSize: 17,
                    marginRight: 20,
                    fontWeight: "bold",
                    paddingLeft: 12,
                    display: "inline-block",
                  }}
                >
                  Thể loại
                </h6>
                {nameCategories.current?.map((tag) => (
                  <Tag color="#f50">{tag}</Tag>
                ))}
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Row gutter={[24, 0]}>
                  <Col>
                    <h6
                      style={{
                        display: "inline",
                        fontSize: "17px",
                        fontWeight: "bold",
                      }}
                    >
                      Giá bán
                    </h6>
                  </Col>
                  <Col span={10}>
                    <Slider
                      min={1}
                      max={20}
                      onChange={onChangeValuePrice}
                      value={typeof inputValue === "number" ? inputValue : 0}
                      style={{ marginTop: 5 }}
                    />
                  </Col>
                  <Col span={2}>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ marginLeft: 16, marginTop: "-2px" }}
                      value={inputValue}
                      onChange={onChangeValuePrice}
                      size="middle"
                      ref={(element) =>
                        (price.current.quantity = parseInt(element?.value))
                      }
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Group>
            <Row>
              <Col span={12}>
                <div className="status">
                  <Row gutter={[24, 0]} style={{ marginLeft: 0 }}>
                    <h6 style={{ marginRight: 20 }}>Trạng thái</h6>
                    <Radio.Group
                      onChange={(e) => {
                        product.current.status = e?.target.value;
                        setValueStatus(e.target.value);
                      }}
                      value={valueStatus}
                    >
                      <Radio value={true}>public</Radio>
                      <Radio value={false}>private</Radio>
                    </Radio.Group>
                  </Row>
                </div>
              </Col>
              <Col span={2}>
                <h6>Số lượng</h6>
              </Col>
              <Col span={8} style={{ marginLeft: "-27px", marginTop: "-6px" }}>
                <InputNumber
                  min={1}
                  max={20}
                  style={{ marginLeft: 16, marginTop: "-2px" }}
                  size="middle"
                  ref={(element) =>
                    (product.current.quantity = parseInt(element?.value))
                  }
                />
              </Col>
            </Row>
          </Group>

          <Group>
            <div className="description">
              <h6>Mô tả</h6>
              <TextArea
                showCount
                maxLength={1000}
                style={{ height: "200px" }}
                ref={(element) =>
                  (product.current.description =
                    element?.resizableTextArea?.textArea?.value)
                }
              />
            </div>
          </Group>
        </Col>
      </Row>
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
                {fileList.length >= 7 ? null : uploadButton}
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
      <Row gutter={[24, 0]}>
        <Col span={12} className="my-5 text-start">
          <Button
            type="primary"
            onClick={() => {
              setStepCurrent(1);
            }}
          >
            Trước đó
          </Button>
        </Col>
        <Col span={12} className="my-5 text-end">
          <Button
            type="primary"
            onClick={() => {
              console.log("product", product);
              console.log("price", price);
              console.log("image", fileList);
            }}
          >
            Hoàn thành
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

const options = [
  {
    value: "gold",
  },
  {
    value: "lime",
  },
  {
    value: "green",
  },
  {
    value: "cyan",
  },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color="orange"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        margin: 3,
        fontSize: 18,
        lineHeight: "30px",
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
export default Add;
