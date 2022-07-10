import { Button, Col, Input, notification, Row, Select } from "antd";
import CUSTOMER from "api/customer.js";
import PERSONAL from "api/personal";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { StylePassword } from "../style/styleProfile";
const Password = () => {
  const { register, handleSubmit, control, watch, reset, setValue } = useForm({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const actionchangePassword = (value) => {
    setLoading(true);
    PERSONAL.changePassword(value)
      .then((res) => {
        setLoading(false);
        notification.success({
          message: "Cập nhật mật khẩu thành công",
          placement: "topRight",
        });
      })
      .catch((error) => {
        notification.error({
          message: "Xảy ra lỗi",
          placement: "topRight",
        });
        setLoading(false);
      });
  };

  return (
    <Row gutter={[24, 0]} className="main">
      <Col span={14}>
        <h5 className="title">Thay đổi mật khẩu</h5>
      </Col>
      <Col span={14}>
        <StylePassword>
          <form onSubmit={handleSubmit(actionchangePassword)}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <span className="label">Mật khẩu</span>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <Input.Password {...field} />}
                ></Controller>
              </Col>
              <Col span={24}>
                <span className="label">Mật khẩu mới</span>
                <Controller
                  name="newPassword"
                  control={control}
                  render={({ field }) => <Input.Password {...field} />}
                ></Controller>
              </Col>
              <Col span={24}>
                <span className="label">Nhập lại mật khẩu mới</span>
                <Controller
                  name="confirmNewPassword"
                  control={control}
                  render={({ field }) => <Input.Password {...field} />}
                ></Controller>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn-save"
                  loading={loading}
                >
                  lưu
                </Button>
              </Col>
            </Row>
          </form>
        </StylePassword>
      </Col>
    </Row>
  );
};

export default Password;
