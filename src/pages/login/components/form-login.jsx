import { LockOutlined, UserOutlined, YoutubeFilled } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, notification } from "antd";
import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import LOGIN from "../../../api/login";
import { PATH } from "../../../utils/const";
import { KEY } from "../../../utils/localStorage";
import { StyleBtnLink, StyleForm } from "../style/style";

const FormLogin = () => {
  const [loading, setLoading] = useState(false);

  function actionLogin(data) {
    setLoading(true);
    LOGIN.post(data)
      .then((res) => {
        localStorage.setItem(KEY.TOKEN, res.data.token);

        setLoading(false);
        window.location.href = PATH.HOME;
        // navigate(PATH.HOME);
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
    <StyleForm>
      <div className="logo">totostore</div>
      <p>Đăng nhập</p>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={(value) => {
          actionLogin(value);
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
        <Form.Item>
          <Link className="login-form-forgot text-small" to="">
            Quên mật khẩu?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            className="btn"
            htmlType="submit"
            // onClick={actionLogin}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <div className="socical">
        <span>hoặc đăng nhập với</span>
        <Link to="">
          <AiFillFacebook />
        </Link>
        <Link to="">
          <FcGoogle />
        </Link>
      </div>
      <Link to="/dang-ki" className="text">
        Đăng kí
      </Link>
    </StyleForm>
  );
};

export default FormLogin;
