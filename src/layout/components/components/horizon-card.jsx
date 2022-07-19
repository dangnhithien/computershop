import styled from "styled-components";

import { Col, Rate, Typography } from "antd";
import parseMoney from "../../../utils/parseMoney";
import ProductSmall from "components/product-card/product-small";
import useProduct from "hooks/useProduct";
const { Title } = Typography;
const StyleBox = styled.div`
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  padding: 0.5px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ff6a3c;
    .title {
      color: #ff6a3c;
    }
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

const Horizoncard = ({ request }) => {
  const {
    products: { data },
  } = useProduct(request);
  return (
    <>
      {data.map((e, key) => {
        return (
          <Col key={key} span={8}>
            <StyleBox>
              <ProductSmall item={e} index={key} />
            </StyleBox>
          </Col>
        );
      })}
    </>
  );
};

export default Horizoncard;
