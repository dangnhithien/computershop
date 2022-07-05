import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Collapse, Radio, Rate, Row, Select, Space } from "antd";
import { min } from "moment";
import { useEffect } from "react";
import { useState } from "react";
import PRODUCT from "../../../api/product";

import PriceRange from "../../../components/price-range/priceRange";
import useStoreCategory from "../../../store/category";
import useStoreSupplier from "../../../store/supplier";
import { StyleFilterPanel, StyleSidebar } from "../style/style";
const { Option } = Select;

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

const Sidebar = ({ setData, setLoading }) => {
  const [request, setResquest] = useState({
    status: true, //default
    categoryIds: [],
    supplierId: 0,
    minimumRate: 0,
    maximumRate: 5, //default
    // price:[],
  });
  const { minimumRate, supplierId } = request;
  const categories = useStoreCategory((state) => state.categories);
  const suppliers = useStoreSupplier((state) => state.suppliers);
  useEffect(() => {
    setLoading(true);
    PRODUCT.search(request)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [request]);

  function handleCategories(e) {
    const { categoryId } = request;
    const { value, checked } = e.target;
    if (checked) {
      setResquest({ ...request, categoryId: [...categoryId, value] });
    } else {
      setResquest({
        ...request,
        categoryId: categoryId.filter((e) => e !== value),
      });
    }
  }
  function handleSupplier(e) {
    setResquest({ ...request, supplierId: e.target.value });
  }
  function handleRate(e) {
    setResquest({ ...request, minimumRate: e });
  }
  return (
    <>
      <div className="siderbar-section">
        <StyleSidebar>
          <div className="title">
            <h6>Lọc</h6>
            <Select
              defaultValue={1}
              style={{
                width: 120,
              }}
            >
              <Option value={1}>Giá tăng dần</Option>
              <Option value={2}>Giá giảm dần</Option>
            </Select>
          </div>
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <SidebarSingleWidget title="Giá bán">
                <PriceRange />
              </SidebarSingleWidget>
            </Col>

            <Col span={24}>
              <SidebarSingleWidget title="Loại sản phẩm">
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
              </SidebarSingleWidget>
            </Col>
            <Col span={24}>
              <SidebarSingleWidget title="Nhãn hàng">
                <Radio.Group
                  value={supplierId}
                  buttonStyle="solid"
                  onChange={handleSupplier}
                >
                  <Space direction="vertical">
                    {suppliers.map((e, key) => {
                      <Radio key={key} value={e.id}>
                        {e.name}
                      </Radio>;
                    })}
                  </Space>
                </Radio.Group>
              </SidebarSingleWidget>
            </Col>
            <Col span={24}>
              <SidebarSingleWidget title="Đánh giá">
                <Rate
                  allowHalf
                  defaultValue={minimumRate}
                  onChange={handleRate}
                />
                &nbsp;
                <span>{minimumRate} sao trở lên</span>
              </SidebarSingleWidget>
            </Col>
          </Row>
        </StyleSidebar>
      </div>
    </>
  );
};

export default Sidebar;
