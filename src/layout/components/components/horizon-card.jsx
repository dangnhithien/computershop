import styled from "styled-components";

import { Col, Rate, Typography } from "antd";
import parseMoney from "../../../utils/parseMoney";
const { Title } = Typography;
const StyleBox = styled.div`
  border-radius: 5px;
  border: 1px solid #f1f1f1;

  padding: 0.5px;

  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 1px solid #ff6a3c;
    .title {
      color: #ff6a3c;
    }
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
    margin-top: 8px;
    .title {
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      color: black;
      font-weight: 500;
      text-transform: capitalize;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
    .rate {
      font-size: 14px;
      font-weight: bold;
      color: black;
      .ant-rate-star:not(:last-child) {
        margin-right: 1px !important;
      }
    }
  }
  .image {
    width: 85px;
    flex-shrink: 0;
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

const Horizoncard = ({ data }) => {
  return (
    <>
      {data.map((e, key) => {
        return (
          <Col key={key} span={8}>
            <StyleBox>
              {/* <div className="ribbon">
                <span>{e.amount ?? "12%"}</span>
              </div> */}
              <div className="image">
                <img src="https://zshop.vn/images/thumbnails/624/460/detailed/51/microsoft_thh_00035_12_4_multi_touch_surface_laptop_1593598_v73b-kf.jpg" />
              </div>
              <div className="content">
                <Title
                  level={5}
                  ellipsis={{ rows: 1 }}
                  style={{ marginBottom: 0 }}
                  className="title"
                >
                  {e.name}
                </Title>
                <div className="rate">
                  <Rate
                    disabled
                    defaultValue={e.rate}
                    style={{ fontSize: 14 }}
                  />
                  &nbsp;{parseFloat(e.rate)}
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
