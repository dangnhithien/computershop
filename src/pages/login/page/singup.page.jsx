import { Row } from "antd";
import { useEffect, useState } from "react";

import FormRegister from "../components/form-register";
import { StyleLogin } from "../style/style";

const Singup = ({ showSingin }) => {
  const [showSinginForm, setShowSinginForm] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 100;
    setShowSinginForm(showSingin);
  }, [showSingin]);

  return (
    <>
      <StyleLogin>
        <div className="wrapper">
          <FormRegister />
        </div>
      </StyleLogin>
    </>
  );
};

export default Singup;
