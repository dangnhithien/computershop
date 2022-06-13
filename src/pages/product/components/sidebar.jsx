import React from "react";
import PriceRange from "../../../components/priceRange";

import FilterSelect from "./filterSelect";
import { Collapse } from "antd";
import styled from "styled-components";

const SingleWidget = styled.div`
  border-bottom: 3px solid #fff;
  margin-bottom: 10px;
  font-weight: 500;
  box-shadow: rgb(17 17 26 / 5%) 3px 3px 5px, rgb(17 17 26 / 10%) 0px 0px 10px;
`;

const SidebarSingleWidget = ({ title, children }) => {
  const { Panel } = Collapse;
  return (
    <>
      <SingleWidget>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <Panel header={title} key="1">
            {children}
          </Panel>
        </Collapse>
      </SingleWidget>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      {/* Start Sidebar Area */}
      <div className="siderbar-section" data-aos="fade-up" data-aos-delay="0">
        <SidebarSingleWidget title="Giá bán">
          <PriceRange />
        </SidebarSingleWidget>

        <SidebarSingleWidget title="chọn">
          <FilterSelect />
        </SidebarSingleWidget>
        <SidebarSingleWidget title="chọn">
          <FilterSelect />
        </SidebarSingleWidget>
        <SidebarSingleWidget title="chọn">
          <FilterSelect />
        </SidebarSingleWidget>
        <SidebarSingleWidget title="chọn">
          <FilterSelect />
        </SidebarSingleWidget>
        <SidebarSingleWidget title="chọn">
          <FilterSelect />
        </SidebarSingleWidget>
        <SidebarSingleWidget title="chọn">
          <FilterSelect />
        </SidebarSingleWidget>
      </div>{" "}
      {/* End Sidebar Area */}
    </>
  );
};

export default Sidebar;
