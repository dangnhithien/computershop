import { Modal } from "antd";
import styled from "styled-components";

const Style = styled.div`
  position: relative;
  text-align: center;
  line-height: 80px;

  .white {
    position: absolute;
    top: -8px;
    right: -7px;
    width: 20px;
    height: 20px;
    background: #fff;
    z-index: 1000;
  }
  a {
    &:hover {
      color: #ff6a3c;
      text-decoration: underline;
    }
  }
`;

const Success = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      // style={{ marginTop: 50 }}
      width={600}
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      className="modalStyle"
      footer={false}
    >
      <Style>
        <span className="white"></span>
        <span>
          Kiểm tra email của bạn!{" "}
          <a
            target="_blank"
            href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"
          >
            TẠI ĐÂY
          </a>
        </span>
      </Style>
    </Modal>
  );
};

export default Success;
