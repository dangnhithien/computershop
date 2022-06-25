import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useRef, useState } from "react";
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
const FormLogin = () => {
  const [loading, setLoading] = useState(false);

  function actionLogin(data) {
    setLoading(true);
    LOGIN.post(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
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
    <div className="col-lg-6 col-md-6 p-10">
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
            actionLogin(value);
          }}
        >
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
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
      </StyleForm>
    </div>
  );
};

export default FormLogin;
