import { Modal, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { StyleFeedback } from "./style/style";

const Feedback = ({ modalVisible, setModalVisible }) => {
  const [active, setActive] = useState(0);
  function handle(value) {
    setActive(value);
  }
  return (
    <Modal
      width={400}
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      bodyStyle={{ minHeight: 400 }}
      footer={false}
      className="modalStyle"
      style={{ borderRadius: 14 }}
    >
      <StyleFeedback>
        <div className="title">Đánh giá của bạn về chúng tôi? </div>
        <div className="emoji">
          <Tooltip placement="top" title="Hơi buồn">
            <span
              className={active == 1 ? "active icon" : "icon"}
              onClick={() => handle(1)}
            >
              😭
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Bình thường">
            <span
              className={active == 2 ? "active icon" : "icon"}
              onClick={() => handle(2)}
            >
              🙁
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Khá tốt">
            <span
              className={active == 4 ? "active icon" : "icon"}
              onClick={() => handle(4)}
            >
              😀
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Rất tốt">
            <span
              className={active == 3 ? "active icon" : "icon"}
              onClick={() => handle(3)}
            >
              😄
            </span>
          </Tooltip>

          <Tooltip placement="top" title="Tuyệt vời">
            <span
              className={active == 5 ? "active icon" : "icon"}
              onClick={() => handle(5)}
            >
              😍
            </span>
          </Tooltip>
        </div>
        <div className="content">
          <label>Trải nghiệm của bạn</label>
          <TextArea
            placeholder="Điều bạn muốn nói"
            autoSize={{
              minRows: 7,
              maxRows: 7,
            }}
            style={{ height: 160 }}
          />
        </div>
        <div className="send">
          <FaLocationArrow />
        </div>
      </StyleFeedback>
    </Modal>
  );
};

export default Feedback;
