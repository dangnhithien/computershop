// import React, { useEffect, useState } from "react";
// const Test = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch("https://localhost:44311/v2/Cart")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);

//   return (
//     <>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>
//   );
// };
// export default Test;

/*
 * Simple editor component that takes placeholder text as a prop
 */
import { Button, Modal } from "antd";
import React, { useState } from "react";

const App = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal1Visible(true)}>
        Display a modal dialog at 20px to Top
      </Button>
      <Modal
        title="Chi tiết đơn hàng"
        style={{
          top: 20,
        }}
        width={1000}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
        bodyStyle={{ height: "80vh" }}
        footer={false}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default App;
