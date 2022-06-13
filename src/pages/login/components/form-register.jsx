import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
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

const FormRegister = () => {
  return (
    <>
      <div className="col-lg-6 col-md-6  p-10">
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
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              style={{ height: "50px", fontSize: "16px" }}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ height: "50px", fontSize: "16px" }}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ height: "50px", fontSize: "16px" }}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormRegister;
