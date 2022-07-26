import { useEffect, useState } from "react";

import FormRegister from "../components/form-register";
import { StyleLogin } from "../style/style";

const Singup = ({ showSingin }) => {
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
