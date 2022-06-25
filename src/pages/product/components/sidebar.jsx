import React, { useState } from "react";
import PriceRange from "../../../components/priceRange";
import {
  Collapse,
  Row,
  Col,
  Checkbox,
  Rate,
  Radio,
  Space,
  notification,
} from "antd";
import styled from "styled-components";
import CATEGORIES from "../../../api/categories";

const { Panel } = Collapse;
const SingleWidget = styled.div`
  border-bottom: 3px solid #fff;
  margin-bottom: 10px;
  font-weight: 500;
  box-shadow: rgb(17 17 26 / 5%) 3px 3px 5px, rgb(17 17 26 / 10%) 0px 0px 10px;
`;

const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];
const SidebarSingleWidget = ({ title, children }) => {
  const [price, setPrice] = useState({ min: "", nax: "" });
  const [categories, setCategories] = useState([]);
  const [suplier, setSuplier] = useState();
  const [rate, setRate] = useState();
  const [loading, setLoading] = useState(false);

  const filter = useState({
    price: [0, 10000],
    categoryId: [],
    suplier: "",
    rate: 0,
  });

  function actionGetAllCategory(keyword) {
    setLoading(true);
    CATEGORIES.search(keyword)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  return (
    <>
      <SingleWidget>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="end"
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
      <div className="siderbar-section" data-aos="fade-up" data-aos-delay="0">
        <Row gutter={[24, 0]}>
          <Col span={24}>
            <SidebarSingleWidget title="Giá bán">
              <PriceRange />
            </SidebarSingleWidget>
          </Col>

          <Col span={24}>
            <SidebarSingleWidget title="Loại sản phẩm">
              <Checkbox.Group
                options={options}
                style={{ display: "flex", flexDirection: "column" }}
                onChange={(value) => console.log(value)}
              />
            </SidebarSingleWidget>
          </Col>
          <Col span={24}>
            <SidebarSingleWidget title="Nhãn hàng">
              <Radio.Group value={1} buttonStyle="solid">
                <Space direction="vertical">
                  <Radio value={1}>Option A</Radio>
                  <Radio value={2}>Option B</Radio>
                  <Radio value={3}>Option C</Radio>
                </Space>
              </Radio.Group>
            </SidebarSingleWidget>
          </Col>
          <Col span={24}>
            <SidebarSingleWidget title="Đánh giá">
              <Rate allowHalf defaultValue={2.5} />
              &nbsp;
              <span>2.5 sao trở lên</span>
            </SidebarSingleWidget>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Sidebar;
