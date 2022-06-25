import React, { useEffect } from "react";
import FixedRight from "../components/fixed-right/fixedRight";
import useStore from "../store/personal";
import Footer from "./components/footer";
import Header from "./components/header";

const LayoutClient = ({ children }) => {
  const setUserProfile = useStore((state) => state.getUser);

  useEffect(setUserProfile, [setUserProfile]);

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
