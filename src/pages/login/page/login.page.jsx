import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillFacebook, AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import FormLogin from "../components/form-login";
import FormRegister from "../components/form-register";
import { TiUser } from "react-icons/ti";
const StyleFormLogin = styled.div`
  margin-top: 100px;

  border: 1px solid;
  padding: 12px;
  background: #fff;
  h6.title {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
  .icon {
    font-size: 36px;
    cursor: pointer;
    text-align: center;
  }
  svg.site-form-item-icon {
    font-size: 20px;
  }
  .ant-input {
    border-radius: 0;
  }
`;

const Login = ({ showSingin }) => {
  const [showSinginForm, setShowSinginForm] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 250;
    setShowSinginForm(showSingin);
  }, [showSingin]);

  return (
    <>
      <div className="customer_login">
        <div className="container">
          <div className=" pt-100 ">
            <div className="account_form row border">
              {showSinginForm ? (
                <div className="account_form-style singup_form ">
                  <h2 className="text-title">Bạn có tài khoản chưa ? </h2>
                  <h4 className="text-title">Tạo ngay một tài khoản</h4>
                  <button
                    className="account_form-btn"
                    onClick={() => setShowSinginForm(false)}
                  >
                    Đăng kí
                  </button>
                </div>
              ) : (
                <div className=" account_form-style singin_form">
                  <h2 className="text-title">Chào mừng bạn quay trở lại</h2>
                  <h4 className="text-title">Đăng nhập ngay đi nào!</h4>
                  <button
                    className="account_form-btn"
                    onClick={() => setShowSinginForm(true)}
                  >
                    Đăng nhập
                  </button>
                </div>
              )}
              <FormLogin />
              <FormRegister />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
