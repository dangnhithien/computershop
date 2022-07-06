import { Button, Col, Form, Input, Row } from "antd";

import { StylePassword } from "../style/styleProfile";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const Password = () => {
  return (
    <Row gutter={[24, 0]} className="main">
      <Col span={14}>
        <h5 className="title">Thay đổi mật khẩu</h5>
      </Col>
      <Col span={14}>
        <StylePassword>
          <Form {...formItemLayout}>
            <Form.Item
              name="password"
              label="Mật khẩu mới"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại mật khẩu"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn-save">
                lưu
              </Button>
            </Form.Item>
          </Form>
        </StylePassword>
      </Col>
    </Row>
  );
};

export default Password;
