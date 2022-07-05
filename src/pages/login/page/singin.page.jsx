import { Row } from "antd";
import { useEffect, useState } from "react";
import FormLogin from "../components/form-login";
import FormRegister from "../components/form-register";
import { StyleLogin } from "../style/style";

const Singin = ({ showSingin }) => {
  const [showSinginForm, setShowSinginForm] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 100;
    setShowSinginForm(showSingin);
  }, [showSingin]);

  return (
    <>
      <StyleLogin>
        <div className="wrapper">
          <FormLogin />
        </div>
      </StyleLogin>
    </>
  );
};

export default Singin;
