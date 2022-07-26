import { BackTop } from "antd";
import { TiArrowUpThick } from "react-icons/ti";

const BackTopCustom = () => {
  return (
    <div className="back-top">
      <BackTop style={{ position: "unset", width: 50, height: 50 }}>
        <div className="border-icon">
          <TiArrowUpThick className="icon" />
        </div>
      </BackTop>
    </div>
  );
};

export default BackTopCustom;
