import { Col, Row } from "antd";
import { useState } from "react";
import Empty from "../components/empty";
import Product from "../components/product";
import TableCompare from "../components/table-compare";

const CompareProduct = () => {
  const [compares, setCompares] = useState([
    {
      name: " Lenovo IdeaPad 5 82LN00A3IN Laptop AMD Ryzen 7 5700U AMD Radeon 16GB 512GB SSD Windows 10 vs HP Victus 16 Laptop AMD Ryzen 7 5800H Nvidia GeForce RTX 3060 32GB 1TB SSD ndows 10",
    },
  ]);
  return (
    <Row gutter={[24, 24]} justify="center" align="middle">
      {compares.length === 0 ? (
        <>
          <Col span={12}>
            <Empty />
          </Col>
          <Col span={12}>
            <Empty />
          </Col>
        </>
      ) : (
        <>
          {compares.map((element, key) => {
            return (
              <Col span={12}>
                <Product item={element} />
              </Col>
            );
          })}
          {compares.length === 1 ? (
            <Col span={12}>
              <Empty />
            </Col>
          ) : (
            <></>
          )}
        </>
      )}

      <Col span={24}>
        <TableCompare />
      </Col>
    </Row>
  );
};

export default CompareProduct;
