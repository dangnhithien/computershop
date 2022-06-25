import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../../assets/images/banner_images/banner-img2770x496.jpg";
import { Avatar, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Input, AutoComplete } from "antd";
import { ImSearch } from "react-icons/im";
import PRODUCT from "../../api/product";
import { SearchOutlined } from "@ant-design/icons";

const SuggestSearch = styled.div`
  .price {
    font-size: 14px;
    color: #51c390;
  }
  .align-center {
    display: flex;
    align-items: center;
  }
`;
const StyleTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  margin: 5px 0;
`;
const BtnSearch = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  function actionGetAllProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setOptions(res.data.data ? searchResult(res.data.data) : []);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  const searchResult = (data) =>
    data.map((item, idx) => {
      return {
        value: item.id,
        label: (
          <SuggestSearch>
            <Link to={"san-pham/" + item.slug} className="suggest-search">
              <Row gutter={[24, 0]}>
                <Col span={4}>
                  <Avatar shape="square" size={64} src={item.imageUrl} />
                </Col>
                <Col span={20} class="align-center">
                  <Row gutter={24}>
                    <Col span={24} className="title">
                      <StyleTitle>{item.name}</StyleTitle>
                    </Col>
                    <Col span={24} className="price">
                      {/*item.amount*/} 12.000.000 vnd
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Link>
          </SuggestSearch>
        ),
      };
    });

  return (
    <>
      <div className="header-search">
        <AutoComplete
          dropdownMatchSelectWidth={380}
          style={{
            width: "100%",
          }}
          options={options}
          onSelect={false}
          onChange={(value) => actionGetAllProduct({ keyword: value })}
        >
          <Input
            style={{ borderRadius: 50, paddingLeft: 18 }}
            size="middle"
            placeholder="Tìm kiếm sản phẩm ..."
            suffix={<SearchOutlined style={{ fontSize: 25 }} />}
          />
        </AutoComplete>
      </div>
    </>
  );
};

export default BtnSearch;
