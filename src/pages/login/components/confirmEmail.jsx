import { Button, Form, InputNumber, Modal } from "antd";
import { stringify } from "rc-field-form/es/useWatch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGIN from "../../../api/login";
import { StyleView } from "../style/style";

const ConfirmEmail = ({ userId, modalVisible, setModalVisible }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  function validationCode() {
    setStatus("error");
  }
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };
  function actionConfirmEmail(code) {
    setLoading(true);
    // code = "123456";
    LOGIN.confirmEmail({ userId: userId, code: "codeRef" })
      .then((res) => {
        setLoading(false);
        navigate("");
      })
      .catch((error) => {
        validationCode();
        setLoading(false);
      });
  }
  return (
    <Modal
      // style={{ marginTop: 50 }}
      width={600}
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      bodyStyle={{ minHeight: 250 }}
      className="modalStyle"
      footer={false}
    >
      <StyleView>
        <div className="confirm-email">
          <h2 className="title">Kiểm tra email của bạn</h2>
          <div className="email">nhithien@gmail.com</div>

          <Form
            onFinish={(value) => {
              let code = "";
              Object.values(value).map((e) => {
                code += stringify(e);
              });
              actionConfirmEmail(code);
            }}
          >
            <div className="numbers" onFocus={() => setStatus("")}>
              {Array.from({ length: 6 }).map((_, key) => {
                return (
                  <Form.Item key={key} name={"number" + key}>
                    <InputNumber
                      controls={false}
                      min={0}
                      max={9}
                      className="number"
                      maxLength={1}
                      status={status}
                      onKeyDown={handleEnter}
                    />
                  </Form.Item>
                );
              })}
            </div>
            <Form.Item>
              <Button
                className="btn"
                onClick={actionConfirmEmail}
                loading={loading}
                htmlType="submit"
              >
                Xác nhận
              </Button>
            </Form.Item>
          </Form>
        </div>
      </StyleView>
    </Modal>
  );
};

export default ConfirmEmail;
