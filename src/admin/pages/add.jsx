import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
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
  Upload,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CATEGORIES from "../../api/categories";
import CATEGORIES_PRODUCT from "../../api/categories-product";
import PRODUCT from "../../api/product";
import PRODUCT_PRICE from "../../api/product-price";
import SUPPLIERS from "../../api/suppliers";
import { PATH_ADIM } from "../../utils/const";

const { TextArea } = Input;
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
    height: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    min-width: 120px;
  }
  .btn-save {
    height: 50px;
    font-size: 16px;
  }
`;
const Created = styled.div`
  font-size: 24px;
  font-weight: bold;

  color: #1890ff;
`;
const IconStep = styled.div`
  margin: 50px;
  .anticon svg {
    margin-bottom: 10px;
  }
`;

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
  const productId = useRef({ id: "" });
  const categories = useRef({
    categoryId: "",
  });
  const nameCategories = useRef([]);
  const price = useRef({
    amount: 0,
  });
  const image = useRef({
    imagePath: "string",
    fileSize: 0,
    type: 0,
    description: "string",
  });

  const onChangeStep = (value) => {
    setStepCurrent(value);
  };
  function displayStep() {
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
          categories={categories}
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
              <Link to={PATH_ADIM.PRODUCT} style={{ color: "black" }}>
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

const ChooseTitle = ({ setStepCurrent, product }) => {
  const inintInput = {
    status: "",
    playholder: "Nhập tên sản phẩm",
  };
  const [validateInput, setValidateInput] = useState(inintInput);

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
                setValidateInput(inintInput);
                product.current.name = element?.target.value;
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
  const [disabled, setDisabled] = useState();
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
              open={disabled}
              showArrow
              tagRender={tagRender}
              style={{
                width: "100%",
                height: 50,
              }}
              onChange={(value, option) => {
                categories.current.categoryId = option.map((item) => item.id);
                categories.current.categoryId.length >= 3
                  ? setDisabled(false)
                  : setDisabled(undefined);
                nameCategories.current = value;
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
                // if (categories.current.categoryId.length == 0) {
                //   setValidateInput({
                //     status: "warning",
                //     playholder: "Không được bỏ trống",
                //   });

                //   return;
                // }
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
  categories,
  nameCategories,
}) => {
  const [inputValue, setInputValue] = useState(1);
  const [valueStatus, setValueStatus] = useState(1);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [listSupplier, setListSupplier] = useState([]);
  useEffect(() => {
    SUPPLIERS.search({ keyword: "" })
      .then((res) => {
        setListSupplier(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onChangeValuePrice = (value) => {
    setInputValue(value);
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

  function actionUploadData() {
    PRODUCT.create(product.current)
      .then((res) => {
        console.log("res", res);
        PRODUCT_PRICE.post({ ...price.current, productId: res.data })
          .then((res) => {
            console.log("price");
          })
          .catch((error) => {
            console.log(error);
          });
        CATEGORIES_PRODUCT.post({
          categoryId: "51720e12-6050-4af6-32b6-08da50664531",
          productId: res.data,
        })
          .then((res) => {
            console.log("price");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Card className="header-solid mb-10" bordered={false}>
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Group>
            <Created>{product.current.name}</Created>
          </Group>

          <Group>
            <Row>
              <Col span={12}>
                <Row gutter={[24, 0]}>
                  <Col>
                    <h6>Thể loại</h6>
                  </Col>
                  <Col>
                    {nameCategories.current?.map((tag) => (
                      <Tag color="#f50">{tag}</Tag>
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row gutter={[24, 0]}>
                  <Col>
                    <h6>Giá bán</h6>
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
                      value={inputValue}
                      onChange={onChangeValuePrice}
                      size="middle"
                      ref={(element) =>
                        (price.current.amount = parseInt(element?.value))
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Group>

          <Group>
            <Row gutter={[24, 0]}>
              <Col span={12}>
                <Row gutter={[24, 0]}>
                  <Col>
                    <h6>Trạng thái</h6>
                  </Col>
                  <Col>
                    <Radio.Group
                      onChange={(e) => {
                        product.current.status = e?.target.value;
                        setValueStatus(e.target.value);
                      }}
                      value={valueStatus}
                    >
                      <Radio value={1}>public</Radio>
                      <Radio value={0}>private</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
              </Col>
              <Row gutter={[24, 0]}>
                <Col>
                  <h6>Số lượng</h6>
                </Col>
                <Col>
                  <InputNumber
                    defaultValue={0}
                    min={0}
                    max={10000}
                    size="middle"
                    onchange={(value) =>
                      (product.current.quantity = parseInt(value))
                    }
                  />
                </Col>
              </Row>
            </Row>
          </Group>

          <Group>
            <Row gutter={[24, 0]}>
              <Col span={3}>
                <h6>Nhãn hàng</h6>
              </Col>
              <Col span={4}>
                <Select
                  placeholder="Nhãn hàng"
                  style={{
                    width: 120,
                  }}
                  onChange={(value) => {
                    product.current.supplierId = value;
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
                {fileList.length >= 7 && uploadButton}
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
              actionUploadData();
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
