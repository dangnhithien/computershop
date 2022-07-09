import styled from "styled-components";
import PRODUCT from "../../../api/product";

import { Col, Rate } from "antd";
import parseMoney from "../../../utils/parseMoney";
import { useEffect } from "react";
import { useState } from "react";

const StyleBox = styled.div`
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: rgb(99 99 99 / 9%) 0px 2px 4px 0px;
  padding: 0.5px;
  height: 85px;
  margin-top: 12px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #94bacb1f;
  }
  .ribbon {
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
  }
  .ribbon span {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 100px;
    display: block;
    background: #79a70a;
    background: linear-gradient(#ea1c26 0%, #ea1c26 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    right: -21px;
  }
  .ribbon span::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #7e151a;
    border-right: 3px solid #5e050900;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #a31a21;
  }
  .ribbon span::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #52070a;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #380609;
  }
  .content {
    margin-left: 12px;
    .title {
      font-size: 16px;
    }
    .rate {
      font-size: 14px;
      font-weight: bold;
      color: black;
    }
  }
  .image {
    width: 85px;
    height: 100%;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .purchase {
    font-weight: 600;
    font-size: 13px;
    padding: 3px 5px;
  }
`;

const Horizoncard = ({ keyword }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    actionGetProduct();
  }, [keyword]);
  function actionGetProduct() {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  return (
    <>
      {data.map((e) => {
        return (
          <Col span={12}>
            <StyleBox>
              <div className="ribbon">
                <span>{e.amount}</span>
              </div>
              <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSGmO7Y4gMOqvdlR2B620ahMk667pCQOcvQ&usqp=CAU" />
              </div>
              <div className="content">
                <div className="title">{e.name}</div>
                <div className="rate">
                  <Rate
                    disabled
                    defaultValue={e.rate}
                    style={{ fontSize: 14 }}
                  />
                  &nbsp;{e.rate}
                </div>
                <div className="purchase">Đã bán: {parseMoney(12000000)}</div>
              </div>
            </StyleBox>
          </Col>
        );
      })}
    </>
  );
};

export default Horizoncard;
