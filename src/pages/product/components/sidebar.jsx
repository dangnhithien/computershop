import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Collapse, Radio, Rate, Row, Space } from "antd";
import useCategory from "hooks/useCategory";
import useSupplier from "hooks/useSupplier";

import { useCallback, useEffect, useState } from "react";
import CATEGORIES from "../../../api/categories";
import SUPPLIERS from "../../../api/suppliers";

import PriceRange from "../../../components/price-range/priceRange";
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
const requestBody = {
  keyword: "",
};
const Sidebar = ({ request, setRequest }) => {
  const { rate, supplierId } = request;
  const { categories } = useCategory(requestBody);
  const { suppliers } = useSupplier(requestBody);

  function handleCategories(e) {
    const { value, checked } = e.target;
    if (checked) {
      setRequest((request) => ({
        ...request,
        categoryIds: request.categories
          ? [...request?.categoryIds, value]
          : [value],
      }));
    } else {
      setRequest((request) => ({
        ...request,
        categoryIds: request?.categoryIds.filter((e) => e !== value),
      }));
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
              {categories.length === 0 ? (
                <></>
              ) : (
                <SidebarSingleWidget title="Loại sản phẩm">
                  <StyleContent>
                    <ul className="list">
                      {categories?.map((item, key) => {
                        return (
                          <li key={key} className="list__item">
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
              )}
            </Col>
            <Col span={24}>
              {suppliers.length === 0 ? (
                <></>
              ) : (
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
              )}
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
