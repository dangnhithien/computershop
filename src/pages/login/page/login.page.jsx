import React, { useState, useEffect } from "react";
import FormLogin from "../components/form-login";
import FormRegister from "../components/form-register";

const Login = ({ showSingin }) => {
  const [showSinginForm, setShowSinginForm] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 250;
    setShowSinginForm(showSingin);
  }, [showSingin]);

  return (
    <>
      {/* ...:::: Start Customer Login Section :::... */}
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
      {/* ...:::: End Customer Login Section :::... */}
    </>
  );
};

export default Login;
