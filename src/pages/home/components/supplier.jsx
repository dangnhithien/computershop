import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "utils/const";

import { StyleSupplier } from "../style/style";

const items = [
  {
    name: "Laptop dell",
    image:
      "https://servicecenter-nearme.com/wp-content/uploads/2021/05/DELL-LAPTOP-SERVICE-CENTER-NEAR-ME.jpg",
  },
  {
    name: "Laptop acer",
    image:
      "https://www.laptopsdirect.co.uk/files/images/ld/acer-brand-page-mobile.jpg",
  },
  {
    name: "Laptop asus",
    image:
      "https://i1.wp.com/cdn.cnetcontent.com/syndication/mediaserverredirect/9460beaf45ddb3fb2927b27413fd4b8e/original.jpg?w=1170&ssl=1",
  },
  {
    name: "Laptop hp",
    image: "https://i.ytimg.com/vi/kfaIZsWoIr8/maxresdefault.jpg",
  },
  {
    name: "Laptop lenovo",
    image:
      "https://cdn.moglix.com/cms/flyout/Images_2021-03-18_14-14-14_lenovo_laptops_M.jpg",
  },
  {
    name: "Laptop samsung",
    image: "https://www.samsungservicecentrehyderabad.com/images/banner.png",
  },
  {
    name: "Laptop sony",
    image:
      "https://allegro.stati.pl/%21ALLEGRO_IMG/PRODUCENCI/SONY/VAIO%20multi%20flip%20fit%20A/SVF11N1S2ES/top.jpg",
  },
  {
    name: "Laptop macbook",
    image: "https://bilder.macwelt.de/4292196_620x310_r.jpg",
  },
  {
    name: "Laptop razer",
    image:
      "https://matrixwarehouse.co.za/wp-content/uploads/2021/09/NEW-Razer-Banner.jpg",
  },
];
const Supplier = () => {
  return (
    <Row gutter={[12, 0]}>
      {items.map((e) => {
        return (
          <Col span={8}>
            <StyleSupplier>
              <Link to={PATH.PRODUCT}>
                <div className="image">
                  <img src={e.image} alt="" />
                </div>
                <div className="text">
                  <span>{e.name}</span>
                  <span className="hover-text">
                    Đến xem <RightOutlined />
                  </span>
                </div>
              </Link>
            </StyleSupplier>
          </Col>
        );
      })}
    </Row>
  );
};

export default Supplier;
