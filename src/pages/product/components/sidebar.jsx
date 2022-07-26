import { Col, Row } from "antd";
import PriceRange from "../../../components/price-range/priceRange";
import { StyleSidebar } from "../style/style";
import CategoryFilter from "./category-filter";
import CollapseContent from "./collapse-content";
import RateFilter from "./rate-filter";
import Reset from "./reset";
import SupplierFilter from "./supplier-filter";
const route_sidebar = [
  {
    title: "giá bán",
    component: (request, setRequest) => (
      <PriceRange request={request} setRequest={setRequest} />
    ),
  },
  {
    title: "loại sản phẩm",
    component: (request, setRequest) => (
      <CategoryFilter request={request} setRequest={setRequest} />
    ),
  },
  {
    title: "nhãn hàng",
    component: (request, setRequest) => (
      <SupplierFilter request={request} setRequest={setRequest} />
    ),
  },
  {
    title: "đánh giá",
    component: (request, setRequest) => (
      <RateFilter request={request} setRequest={setRequest} />
    ),
  },
];

const Sidebar = ({ request, setRequest }) => {
  return (
    <>
      <StyleSidebar>
        <div className="title">
          <h6>Lọc</h6>
        </div>
        <Row gutter={[8, 0]} justify="center">
          {route_sidebar.map((e, key) => {
            return (
              <Col span={24} key={key + "123"}>
                <CollapseContent
                  title={e.title}
                  children={e.component(request, setRequest)}
                />
              </Col>
            );
          })}

          <Reset setRequest={setRequest} />
        </Row>
      </StyleSidebar>
    </>
  );
};

export default Sidebar;
