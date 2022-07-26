import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { StyleFilterPanel } from "../style/style";
const { Panel } = Collapse;

const CollapseContent = ({ title, children }) => {
  return (
    <StyleFilterPanel>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        expandIconPosition="end"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Panel header={title} key="1">
          {children}
        </Panel>
      </Collapse>
    </StyleFilterPanel>
  );
};

export default CollapseContent;
