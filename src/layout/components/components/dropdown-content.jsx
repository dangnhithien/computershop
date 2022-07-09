import { IoIosArrowForward } from "react-icons/io";
import { StyleContentDropdown } from "../style/style";
import Horizoncard from "./horizon-card";
import Tags from "./tags";

import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import PRODUCT from "../../../api/product";
import CATEGORIES from "../../../api/categories";
import SpinCustom from "../../../components/spin/Spin";
import SUPPLIERS from "../../../api/suppliers";
import axios from "axios";

const DropdownContent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const router_menu = [
    {
      id: 0,
      name: "bán chạy",
      status: false,
      request: { keyword: "", pageSize: 4 },
      components: (
        <>
          <Horizoncard data={data} />
        </>
      ),
      action: (request) => actionGetProduct(request),
    },
    {
      id: 1,
      name: "đánh giá",
      status: false,
      request: { keyword: "", pageSize: 4 },
      components: (
        <>
          <Horizoncard data={data} />
        </>
      ),
      action: (request) => actionGetProduct(request),
    },
    {
      id: 2,
      name: "giảm giá",
      status: false,
      request: { keyword: "", pageSize: 4 },
      components: (
        <>
          <Horizoncard data={data} />
        </>
      ),
      action: (request) => actionGetProduct(request),
    },
    {
      id: 3,
      name: "loại sản phẩm",
      status: false,
      request: { keyword: "" },
      components: <Tags data={data} />,
      action: (request) => actionGetCategories(request),
    },
    {
      id: 4,
      name: "nhãn hàng",
      status: false,
      request: { keyword: "" },
      components: <Tags data={data} />,
      action: (request) => actionGetSupplier(request),
    },
  ];
  const [active, setActive] = useState(router_menu.at(0));
  function handleActive(item) {
    setActive(item);
  }
  useEffect(() => {
    const { action, request } = active;
    let source = axios.CancelToken.source();
    action(request);
    return source.cancel();
  }, [active]);

  function actionGetProduct(request) {
    setLoading(true);
    PRODUCT.search(request)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function actionGetCategories(request) {
    setLoading(true);
    CATEGORIES.search(request)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function actionGetSupplier(request) {
    setLoading(true);
    SUPPLIERS.search(request)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
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
              router_menu?.map((element) => {
                if (active.id === element.id) return element.components;
              })
            )}
          </Row>
        </Col>
      </Row>
    </StyleContentDropdown>
  );
};

export default DropdownContent;
