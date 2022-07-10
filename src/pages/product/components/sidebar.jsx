import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Radio, Rate, Row, Space } from "antd";

import { useCallback, useEffect, useState } from "react";
import CATEGORIES from "../../../api/categories";
import SUPPLIERS from "../../../api/suppliers";

import PriceRange from "../../../components/price-range/priceRange";
import { initializationQuestion } from "../page/product.page";
import { StyleContent, StyleFilterPanel, StyleSidebar } from "../style/style";

const { Panel } = Collapse;

const SidebarSingleWidget = ({ title, children }) => {
  return (
    <>
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
    </>
  );
};

const Sidebar = ({ request, setRequest }) => {
  const { rate, supplierId } = request;
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const actionGetCategoties = useCallback(() => {
    CATEGORIES.search({ keyword: "" })
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((res) => {});
  }, []);
  const actionGetSuppliers = useCallback(() => {
    SUPPLIERS.search({ keyword: "" })
      .then((res) => {
        setSuppliers(res.data.data);
      })
      .catch((res) => {});
  }, []);
  useEffect(actionGetCategoties, [actionGetCategoties]);
  useEffect(actionGetSuppliers, [actionGetSuppliers]);

  function handleCategories(e) {
    const { categoryIds } = request;
    const { value, checked } = e.target;
    if (checked) {
      setRequest({ ...request, categoryIds: [...categoryIds, value] });
    } else {
      setRequest({
        ...request,
        categoryIds: categoryIds.filter((e) => e !== value),
      });
    }
  }
  function handleSupplier(e) {
    setRequest({ ...request, supplierId: e.target.value });
  }
  function handleRate(e) {
    setRequest({ ...request, rate: e });
  }

  return (
    <>
      <div className="siderbar-section">
        <StyleSidebar>
          <div className="title">
            <h6>Lọc</h6>
            {/* <Select
              defaultValue={1}
              style={{
                width: 120,
              }}
            >
              <Option value={1}>Giá tăng dần</Option>
              <Option value={2}>Giá giảm dần</Option>
            </Select> */}
          </div>
          <Row gutter={[8, 0]}>
            <Col span={24}>
              <SidebarSingleWidget title="Giá bán">
                <PriceRange request={request} setRequest={setRequest} />
              </SidebarSingleWidget>
            </Col>

            <Col span={24}>
              <SidebarSingleWidget title="Loại sản phẩm">
                <StyleContent>
                  <ul className="list">
                    {categories?.map((item) => {
                      return (
                        <li className="list__item">
                          <label className="label--checkbox">
                            <input
                              type="checkbox"
                              className="checkbox"
                              value={item.id}
                              onChange={handleCategories}
                            />
                            {item.name}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </StyleContent>
              </SidebarSingleWidget>
            </Col>
            <Col span={24}>
              <SidebarSingleWidget title="Nhãn hàng">
                <StyleContent>
                  <Radio.Group
                    value={supplierId}
                    buttonStyle="solid"
                    onChange={handleSupplier}
                  >
                    <Space direction="vertical">
                      {suppliers.map((e, key) => {
                        return (
                          <Radio key={key} value={e.id}>
                            {e.name}
                          </Radio>
                        );
                      })}
                    </Space>
                  </Radio.Group>
                </StyleContent>
              </SidebarSingleWidget>
            </Col>
            <Col span={24}>
              <SidebarSingleWidget title="Đánh giá">
                <Rate allowHalf defaultValue={rate} onChange={handleRate} />
                &nbsp;
                <span>{rate} sao trở lên</span>
              </SidebarSingleWidget>
            </Col>
            {/* <Col span={24}>
              <Button onClick={() => setRequest(initializationQuestion)}>
                Mặc định
              </Button>
            </Col> */}
          </Row>
        </StyleSidebar>
      </div>
    </>
  );
};

export default Sidebar;
