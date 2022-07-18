import { Avatar, Row, Col, Typography, Image } from "antd";

import React from "react";
import styled from "styled-components";
import parseMoney from "utils/parseMoney";
const { Title, Text } = Typography;
const images = [
  "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  "https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png",
  "https://laptophainam.com/wp-content/uploads/2022/01/laptop-hp-elitebook-840-g2-i5-cu-600x550.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2_extuFJaCIFBdvdnkyQMpVLTayNDQo-Lw&usqp=CAU",

  "https://cdn.nguyenkimmall.com/images/detailed/809/10052608-laptop-hp-15s-fq5104tu-i7-1255u-6k7e4pa-1.jpg",
  "https://cdn.mediamart.vn/images/product/laptop-asus-vivobook-14-a415ea-eb1474w-den_2dc20efd.jpg",
  "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588805_1__2.png",
  "https://imtc.qccdn.fr/test/ultrabook/zoom/hp-notebook-14s-dq1004nf_001.jpg",
  "https://img-trendyol.mncdn.com/mnresize/400/-/ty292/product/media/images/20220110/14/24434972/355659437/1/1_org_zoom.jpg",
  "https://img-trendyol.mncdn.com/mnresize/400/-/ty428/product/media/images/20220510/17/109156679/476813292/1/1_org_zoom.jpg",
];
const Style = styled.div`
  .title {
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      color: #ff6a3c;
    }
  }
  .price {
    font-size: 14px;
  }
`;
const ProductSmall = ({ item, index }) => {
  return !item ? null : (
    <Style>
      <Row gutter={[8, 8]} align="middle">
        <Col>
          <Image width={84} src={images[index]} />
        </Col>
        <Col span={16}>
          <Text ellipsis className="title" style={{ display: "block" }}>
            {item.name}
          </Text>
          <Text type="danger" className="price">
            &#8363;{parseMoney(item ? item.productPrice : "12.000.000")}
          </Text>
        </Col>
      </Row>
    </Style>
  );
};

export default ProductSmall;
