import React, { useRef, useState } from "react";
import { InputNumber, Button, Modal } from "antd";
import { BiError } from "react-icons/bi";
import styled from "styled-components";
import LOGIN from "../../api/login";
const StyleView = styled.div`
  .confirm-email {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .ant-input-number.number {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin: 8px;
    border-radius: 6px;
    input {
      text-align: center;
      font-weight: bold;
    }
  }
  .title {
    color: #155263;
  }
  .btn {
    background: #ff6a3c;
    color: #fff;
    border: none;
    border-radius: 6px;
    width: 125px;
    height: 40px;
    margin-top: 8px;
    &:hover {
      background-color: #ff9a3c;
    }
  }
  .notification {
    color: red;
    font-size: 16px;
    transition: all 0.5s ease-in-out;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
  .hidden {
    visibility: hidden;
    height: 0;
  }
`;
const ConfirmEmail = ({ userId }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const codeRef = useRef(0);

  function validationCode() {
    codeRef.current = 0;
    setStatus("error");
  }
  function actionConfirmEmail() {
    console.log(codeRef);
    setLoading(true);
    // code = "123456";
    LOGIN.confirmEmail({ userId: userId, code: codeRef })
      .then((res) => {
        setLoading(false);
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
      visible={true}
      // onCancel={() => setModalVisible(false)}
      bodyStyle={{ minHeight: 250 }}
      className="modalStyle"
      footer={false}
    >
      <StyleView>
        <div className="confirm-email">
          <h2 className="title">Kiểm tra email của bạn</h2>
          <div className="email">nhithien@gmail.com</div>
          <div className="numbers" onFocus={() => setStatus("")}>
            <InputNumber
              controls={false}
              min={0}
              max={9}
              className="number"
              maxLength={1}
              status={status}
              onChange={(value) => {
                codeRef.current += value * 100000;
              }}
            />
            <InputNumber
              controls={false}
              min={0}
              max={9}
              className="number"
              maxLength={1}
              status={status}
              onChange={(value) => {
                codeRef.current += value * 10000;
              }}
            />
            <InputNumber
              controls={false}
              min={0}
              max={9}
              className="number"
              maxLength={1}
              status={status}
              onChange={(value) => {
                codeRef.current += value * 1000;
              }}
            />
            <InputNumber
              controls={false}
              min={0}
              max={9}
              className="number"
              maxLength={1}
              status={status}
              onChange={(value) => {
                codeRef.current += value * 100;
              }}
            />
            <InputNumber
              controls={false}
              min={0}
              max={9}
              className="number"
              maxLength={1}
              status={status}
              onChange={(value) => {
                codeRef.current += value * 10;
              }}
            />
            <InputNumber
              controls={false}
              min={0}
              max={9}
              className="number"
              maxLength={1}
              status={status}
              onChange={(value) => {
                codeRef.current += value;
              }}
            />
          </div>
          <span className={status === "error" ? "notification" : "hidden"}>
            <BiError />
            Mã sai
          </span>
          <Button
            className="btn"
            onClick={actionConfirmEmail}
            loading={loading}
          >
            Xác nhận
          </Button>
        </div>
      </StyleView>
    </Modal>
  );
};

export default ConfirmEmail;
