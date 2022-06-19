import React, { useEffect, useState } from "react";
import LOGIN from "../../api/login";
import axiosConfig from "../../utils/axiosConfig";
const Test = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosConfig.get("v1/dashboard");
  }, []);

  return <></>;
};
export default Test;
