import React, { useEffect, useRef, useState } from "react";

import HeaderBottom from "./headerBottom";
import HeaderCenter from "./headerCenter";

const Header = () => {
  // const listRef = useRef(null);
  // const [clientHeight, setClientHeight] = useState(0);

  // useEffect(() => {
  //   setClientHeight(listRef.current.clientHeight);
  // });
  return (
    <>
      {/* ...:::: Start Header Section:::... */}
      <header className="header-section d-lg-block d-none">
        <HeaderCenter />

        <HeaderBottom />
        {/* height={clientHeight} */}
      </header>
      {/* ...:::: End Header Section:::... */}
    </>
  );
};

export default Header;
