import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LOGIN from "../../../api/login";
const StyleBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 5px;
  flex-wrap: wrap;
  a {
    margin: 0 8px;
  }
  span {
    display: block;
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
`;

const StyleForm = styled.div`
  .ant-input {
    border-radius: 0;
  }
  .btn {
    background: #fff;
    color: #333;
    border: 1px solid #c1c1c1;
    font-size: 16px;
    &:hover {
      background-color: #504c4c;
      color: #fff;
    }
  }
`;
const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  function actionRegister(data) {
    setLoading(true);
    LOGIN.register({ ...data, userName: data.email })
      .then((res) => {
        notification.success({
          message: "Đăng nhập không thành công",
          placement: "topRight",
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Đăng nhập không thành công",
          placement: "topRight",
        });
      });
  }
  return (
    <>
      <div className="col-lg-6 col-md-6  p-10">
        <StyleBtnLink>
          <span>Tạo tài khoản ngay nào!</span>
          <Link to="">
            <AiFillFacebook />
          </Link>
          <Link to="">
            <FcGoogle />
          </Link>
        </StyleBtnLink>
        <StyleForm>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(value) => {
              actionRegister(value);
            }}
          >
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your firstname!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 4px)",
              }}
            >
              <Input placeholder="Firstname" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your lastname!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 4px)",
                marginLeft: 8,
              }}
            >
              <Input placeholder="Lastname" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Password"
                size="small"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="confirmPassword"
                size="small"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">
                Đăng kí
              </Button>
            </Form.Item>
          </Form>
        </StyleForm>
      </div>
    </>
  );
};

export default FormRegister;
