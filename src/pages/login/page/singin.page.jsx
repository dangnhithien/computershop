import { useEffect, useState } from "react";
import FormLogin from "../components/form-login";
import { StyleLogin } from "../style/style";

const Singin = ({ showSingin }) => {
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
