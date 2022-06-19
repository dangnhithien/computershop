import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useRef, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import LOGIN from "../../../api/login";
const style = {
  color: "#fff",
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
  padding: " 22px",
  width: "calc((95% - 20px) / 2)",
  height: "40px",
  borderRadius: "10px",
  fontWeight: "700",
  boxShadow: "0 1px 5px 0px rgb(0 0 0 / 20%)",
};
const styleSize = {
  width: "30px",
  height: "30px",
};
const FormLogin = () => {
  const [loading, setLoading] = useState(false);

  const data = useRef({ email: "", password: "" });

  function actionLogin() {
    setLoading(true);
    console.log(data.current);
    LOGIN.post(data.current)
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
      <h3 className=" text-center ">Chào mừng bạn quay trở lại!</h3>
      <div className=" pb-5 justify-content-between d-flex container-fluid px-10">
        <Link to="" style={{ ...style, backgroundColor: "#3b5998" }}>
          <AiFillFacebook style={styleSize} />
          <span className="mx-1">FaceBook</span>
        </Link>
        <Link to="" style={{ ...style, color: "#555555" }}>
          <FcGoogle style={styleSize} />
          <span className="mx-1">Google</span>
        </Link>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Hãy nhập email" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{ height: "50px", fontSize: "16px" }}
            placeholder="email"
            ref={(el) => (data.current.email = el?.input.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Hãy nhập mật khẩu" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            style={{ height: "50px", fontSize: "16px" }}
            type="password"
            placeholder="mật khẩu"
            ref={(el) => (data.current.password = el?.input.value)}
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
            className="login-form-button"
            onClick={actionLogin}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
