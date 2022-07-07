import { UploadOutlined } from "@ant-design/icons";
import { Button, Cascader, Col, Form, Input, Row, Select, Upload } from "antd";

import React, { useEffect, useState } from "react";
import { AWARD } from "../../../utils/addresss/award";
import { DISTRICT } from "../../../utils/addresss/district";
import { PROVINCE } from "../../../utils/addresss/province";
import useStoreUser from "../../../store/personal.js";
import CUSTOMER from "../../../api/customer.js";
import { RiAdminFill } from "react-icons/ri";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 18,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};

const Info = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    province: null,
    district: null,
    award: null,
    addressInput: "",
  });

  const userProfile = useStoreUser((state) => state.profile);
  console.log("ddd", userProfile);
  useEffect(() => {
    if (!userProfile.id) {
      return;
    }

    setLoading(true);
    CUSTOMER.search({ userId: "b1e9c1c7-1f8c-4b0e-931f-12cb42e0dbce" })
      .then((res) => {
        setData(res.data.data[0]);
        setLoading(false);
        console.log(res.data.data[0]);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setAddress((address) => ({ ...address, district: null, award: null }));
  }, [address.province]);
  useEffect(() => {
    setAddress((address) => ({ ...address, award: null }));
  }, [address.district]);

  const onFinish = (values) => {
    setLoading(true);
    CUSTOMER.get({ ...values, address })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Row gutter={[24, 0]} className="main">
      <Col span={16}>
        <h5 className="title">Hồ sơ của tôi</h5>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item name="email" label="E-mail">
            <Input disabled={true} defaultValue="admin.root@gmail.com" />
          </Form.Item>

          <Form.Item
            name="userName"
            label="Họ tên"
            rules={[
              {
                required: true,
                message: "Hãy nhập tên của bạn!",
                whitespace: true,
              },
            ]}
          >
            <Input defaultValue={data.name} />
          </Form.Item>

          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                type: "array",
                // required: true,
                message: "Hãy nhập địa chỉ của bạn",
              },
            ]}
          >
            <Select
              value={address.province}
              style={{
                width: 150,
                marginRight: 8,
              }}
              placeholder="Chọn tỉnh"
              onChange={(value) => setAddress({ ...address, province: value })}
            >
              {PROVINCE.map((element, key) => {
                return (
                  <>
                    <Option key={key} value={element.province_id}>
                      {element.province_name}
                    </Option>
                  </>
                );
              })}
            </Select>
            {address.province ? (
              <Select
                value={address.district}
                style={{
                  width: 150,
                  marginRight: 8,
                }}
                placeholder="Chọn huyện"
                onChange={(value) =>
                  setAddress({ ...address, district: value })
                }
              >
                {DISTRICT.map((element, key) => {
                  if (element.province_id != address.province) return;
                  return (
                    <>
                      <Option key={key} value={element.district_id}>
                        {element.district_name}
                      </Option>
                    </>
                  );
                })}
              </Select>
            ) : (
              ""
            )}
            {address.district ? (
              <Select
                value={address.award}
                style={{
                  width: 150,
                }}
                placeholder="Chọn xã"
                onChange={(value) => setAddress({ ...address, award: value })}
              >
                {AWARD.map((element, key) => {
                  if (element.district_id != address.district) return;
                  return (
                    <>
                      <Option key={key} value={element.ward_id}>
                        {element.ward_name}
                      </Option>
                    </>
                  );
                })}
              </Select>
            ) : (
              ""
            )}
            <Input
              placeholder="tên đường/số nhà"
              defaultValue={address.addressInput}
              style={{ marginTop: 12 }}
              onChange={(value) => {
                setAddress({ ...address, addressInput: value.target.value });
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Hãy nhập số điện thoại của bạn!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="giới tính"
            rules={[
              {
                required: true,
                message: "Nhập giới tính của bạn!",
              },
            ]}
          >
            <Select placeholder="Chọn giới tính" style={{ width: 120 }}>
              <Option value="male">Nam </Option>
              <Option value="female">Nữ</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="btn-save">
              lưu
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col
        span={8}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row
          gutter={[24, 0]}
          style={{
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Col>
            <div className="image">
              <img src="https://picsum.photos/200/300?random=1" alt="" />
            </div>
          </Col>

          <Col className="upload-img">
            <Upload>
              <Button icon={<UploadOutlined />}>Chọn hình</Button>
            </Upload>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Info;
