import { IoIosArrowForward } from "react-icons/io";
import { StyleContentDropdown } from "../style/style";
import Horizoncard from "./horizon-card";

import { Col, Row } from "antd";
import { useState } from "react";
import SpinCustom from "../../../components/spin/Spin";
import TagCategory from "./tag-category";
import TagSupplier from "./tag-supplier";

const DropdownContent = () => {
  const [loading, setLoading] = useState(false);

  const router_menu = [
    {
      id: 0,
      name: "bán chạy",
      status: false,
      request: { keyword: "", pageSize: 4 },
      components: (key, request) => {
        return <Horizoncard key={key} request={request} />;
      },
    },
    {
      id: 1,
      name: "đánh giá",
      status: false,
      request: { keyword: "", pageSize: 4 },
      components: (key, request) => {
        return <Horizoncard key={key} request={request} />;
      },
    },
    {
      id: 2,
      name: "giảm giá",
      status: false,
      request: { keyword: "", pageSize: 4 },
      components: (key, request) => {
        return <Horizoncard key={key} request={request} />;
      },
    },
    {
      id: 3,
      name: "loại sản phẩm",
      status: false,
      request: { keyword: "" },
      components: (key, request, passingLink) => (
        <TagCategory key={key} request={request} passingLink="categoryIds" />
      ),
    },
    {
      id: 4,
      name: "nhãn hàng",
      status: false,
      request: { keyword: "" },
      components: (key, request, passingLink) => (
        <TagSupplier key={key} request={request} passingLink="supplierId" />
      ),
    },
  ];
  const [active, setActive] = useState(router_menu.at(0));
  function handleActive(item) {
    setActive(item);
  }
  return (
    <StyleContentDropdown>
      <Row gutter={[8, 8]}>
        <Col span={4} className="side-bar">
          <div>
            {router_menu?.map((element, key) => {
              return (
                <div
                  key={key}
                  className={active.id === element.id ? "active type" : "type"}
                  onClick={() => {
                    handleActive(element);
                  }}
                >
                  {element.name}
                  <IoIosArrowForward />
                </div>
              );
            })}
          </div>
        </Col>
        <Col span={20}>
          <Row gutter={[8, 8]}>
            {loading ? (
              <SpinCustom />
            ) : (
              router_menu?.map((element, key) => {
                if (active.id === element.id)
                  return element.components(key, element.request);
              })
            )}
          </Row>
        </Col>
      </Row>
    </StyleContentDropdown>
  );
};

export default DropdownContent;
