import { Button, Col, Form, Input, notification } from "antd";
import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LOGIN from "../../../api/login";
import { useNavigate } from "react-router-dom";
import { StyleBtnLink, StyleForm } from "../style/style";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  function actionRegister(data) {
    setLoading(true);
    LOGIN.register({
      ...data,
      userName: data.email,
      lastName: "xyz",
      firstName: "xyz",
    })
      .then((res) => {
        setLoading(false);
        navigate("");
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
      <StyleForm>
        <div className="logo">totostore</div>
        <p>Đăng kí</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={(value) => {
            actionRegister(value);
          }}
        >
          <span className="text-small">Email</span>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Hãy nhập email" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              style={{ height: "50px", fontSize: "16px" }}
              placeholder="email"
              // ref={(el) => (data.current.email = el?.input.value)}
            />
          </Form.Item>
          <span className="text-small">Mật khẩu</span>
          <Form.Item
            name="passWord"
            rules={[{ required: true, message: "Hãy nhập mật khẩu" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ height: "50px", fontSize: "16px" }}
              type="password"
              placeholder="mật khẩu"
              // ref={(el) => (data.current.password = el?.input.value)}
            />
          </Form.Item>

          <span className="text-small">Nhập lại mật khẩu</span>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ height: "50px", fontSize: "16px" }}
              placeholder="confirmPassword"
              size="small"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn"
              loading={loading}
            >
              Đăng kí
            </Button>
          </Form.Item>
          <div className="socical">
            <span>hoặc đăng nhập với</span>
            <Link to="">
              <AiFillFacebook />
            </Link>
            <Link to="">
              <FcGoogle />
            </Link>
          </div>
          <Link to="/dang-nhap" className="text">
            Đăng nhập
          </Link>
        </Form>
      </StyleForm>
    </>
  );
};

export default FormRegister;
