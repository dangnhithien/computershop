import { Button, Col, Row, Typography } from "antd";
import PRODUCT from "api/product";
import React, { useEffect, useState } from "react";
import { HiEye, HiShoppingCart } from "react-icons/hi";
import useStoreCart from "store/cart";
import useStoreUser from "store/personal";
import styled from "styled-components";
import parseMoney from "utils/parseMoney";
const { Title, Text } = Typography;
const StyleProductHorizon = styled.div`
  margin-top: 12px;
  .wrapper {
    border: 1px solid #f1f1f1;
  }
  .title {
    font-family: "Montserrat Alternates", sans-serif !important;
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
    font-weight: 600;
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
const ProductHorizon = () => {
  const [data, setData] = useState([]);
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const setCart = useStoreCart((state) => state.setCart);
  const loading = useStoreCart((state) => state.loading);

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

  useEffect(() => {
    PRODUCT.search({ keyword: "", pageSize: 7 })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        setData([]);
      });
  }, []);

  return (
    <StyleProductHorizon>
      <Title level={3} underline className="title">
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
                      <img
                        src="https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png"
                        alt=""
                      />
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
