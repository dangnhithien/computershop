import { Button } from "antd";
import React from "react";
import { GoNoNewline } from "react-icons/go";

const Reset = ({ setRequest }) => {
  function handleReset() {
    setRequest({
      keyword: "",
      pageNumber: 1,
      pageSize: 12,
    });
  }
  return (
    <Button
      onClick={handleReset}
      style={{
        width: 120,
        background: "#ff6a3c",
        color: "#fff",
        border: "none",
        textTransform: "capitalize",
      }}
    >
      reset
    </Button>
  );
};

export default Reset;
