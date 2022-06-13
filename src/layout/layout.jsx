import React from "react";
import FixedRight from "../components/fixed-right/fixedRight";
import Footer from "./components/footer";
import Header from "./components/header";

const LayoutClient = ({ children }) => {
  return (
    <>
      <FixedRight />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutClient;
