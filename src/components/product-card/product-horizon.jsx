import { Button, Col, Row, Typography } from "antd";
import PRODUCT from "api/product";
import useProduct from "hooks/useProduct";
import React, { useEffect, useState } from "react";
import { HiEye, HiShoppingCart } from "react-icons/hi";
import useStoreCart from "store/cart";
import useStoreUser from "store/personal";
import styled from "styled-components";
import parseMoney from "utils/parseMoney";
const { Title, Text } = Typography;
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3R1nVV-o6ck3Es7PGkK9-H5aNA-EgD9ydA&usqp=CAU",
  "https://phucanhcdn.com/media/product/40892_laptop_microsoft_laptop_3_gold_ha5.jpg",
  "https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png",
  "https://laptophainam.com/wp-content/uploads/2022/01/laptop-hp-elitebook-840-g2-i5-cu-600x550.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2_extuFJaCIFBdvdnkyQMpVLTayNDQo-Lw&usqp=CAU",
  "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/matebook-14-amd-2021.JPG",
  "https://cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-021221-110854-600x600.jpg",
  "https://laptopdell.com.vn/wp-content/uploads/2022/05/HP-Spectre-x360-14-scaled.jpg",
  "https://cdn.nguyenkimmall.com/images/detailed/809/10052608-laptop-hp-15s-fq5104tu-i7-1255u-6k7e4pa-1.jpg",
  "https://cdn.mediamart.vn/images/product/laptop-asus-vivobook-14-a415ea-eb1474w-den_2dc20efd.jpg",
  "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588805_1__2.png",
  "https://imtc.qccdn.fr/test/ultrabook/zoom/hp-notebook-14s-dq1004nf_001.jpg",
  "https://img-trendyol.mncdn.com/mnresize/400/-/ty292/product/media/images/20220110/14/24434972/355659437/1/1_org_zoom.jpg",
  "https://img-trendyol.mncdn.com/mnresize/400/-/ty428/product/media/images/20220510/17/109156679/476813292/1/1_org_zoom.jpg",
];
const StyleProductHorizon = styled.div`
  margin-top: 12px;
  .wrapper {
    border: 1px solid #f1f1f1;
  }
  .title {
    padding-bottom: 7px;
    border-bottom: 2px solid #ff6a3c;
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
  }
  .content {
    border-right: 1px solid #f1f1f1;
    height: 100%;
    padding: 12px;
  }
  .image {
    margin: 12px;
    height: 200px;
    line-height: 200px;
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  .price {
    margin-bottom: 12px;
  }
  .btn {
    width: 175px;
    height: 42px;
    border: 1px solid #fe3c00;
    color: #fe3c00;
    background: #fff;
    font-size: 14px;
    margin-bottom: 8px;
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #ff6a3c;
      color: #fff !important;
    }
  }
`;
const requestBody = { keyword: "", pageSize: 7 };
const ProductHorizon = () => {
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const setCart = useStoreCart((state) => state.setCart);
  const loading = useStoreCart((state) => state.loading);
  const {
    products: { data },
  } = useProduct(requestBody);

  function handleAddToCart(item) {
    const request = {
      productId: item.id,
      userid: userProfile.id,
      quantity: 1,
      price: 5000,
    };
    addToCart(request).then(() => {
      setCart(userProfile.id);
    });
  }

  return (
    <StyleProductHorizon>
      <Title level={3} className="title">
        Sản phẩm mới
      </Title>

      <Row gutter={[8, 8]}>
        {data?.map((item, key) => {
          return (
            <Col span={24} key={key}>
              <div className="wrapper">
                <Row gutter={[0, 0]} justify="space-around" align="middle">
                  <Col span={4}>
                    <div className="image">
                      <img src={images[key]} alt="" />
                    </div>
                  </Col>
                  <Col span={14} className="content">
                    <Title level={5}>{item.name}</Title>
                    <div className="price">
                      <Text type="danger" strong>
                        &#8363;{parseMoney(item.productPrice ?? 12000000)}
                      </Text>
                    </div>
                    <Text>{item.description}</Text>
                  </Col>
                  <Col span={4}>
                    <Button
                      className="btn-cart btn"
                      onClick={() => handleAddToCart(item)}
                      loading={loading}
                    >
                      <HiShoppingCart />
                      &nbsp; Thêm vào giỏ
                    </Button>
                    <div className="btn quick-view">
                      <HiEye />
                      &nbsp; Xem nhanh
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </StyleProductHorizon>
  );
};

export default ProductHorizon;
