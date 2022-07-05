import React from "react";

const ConfirmEmail = () => {
  return (
    <Modal
      // style={{ marginTop: 50 }}
      width={800}
      visible={true}
      onCancel={() => setModalVisible(false)}
      bodyStyle={{ minHeight: 430 }}
      footer={false}
    >
      <StyleView></StyleView>
    </Modal>
  );
};

export default ConfirmEmail;
