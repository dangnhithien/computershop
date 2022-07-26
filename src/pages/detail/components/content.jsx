import { Typography } from "antd";
import RateCustom from "components/modal-feed-back/rateCustom";
import useProductSingle from "hooks/useProductSingle";
import { useParams } from "react-router-dom";
import parseMoney from "utils/parseMoney";
import { StylePrice } from "../style/style";
const { Title, Text } = Typography;

const Content = () => {
  const { productId } = useParams();
  const { product } = useProductSingle(productId);

  return !product ? (
    <></>
  ) : (
    <div className="product-details-text">
      <Title level={3} className="title">
        {product.name ??
          "Laptop Dell Inspiron N3511C (P112F001CBL) (i3 1115G4/4GBRAM/256GB SSD/15.6 inch FHD/Win11+OfficeHS21/Đen)"}
      </Title>

      <RateCustom value={product.rate ?? 3.5} rates={product.numberRate} />

      <StylePrice>
        <Text italic delete className="price-delete">
          &#8363;{parseMoney(product.productPrice ?? 15000000)}
        </Text>
        <Text type="danger" className="price-sale">
          &#8363;{parseMoney(product.productPrice ?? 10500000)}
        </Text>
        {/* <Text class="discount">30%</Text> */}
      </StylePrice>

      <Text type="secondary">
        {product.description ??
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor veritatis non maiores. Labore aperiam laboriosam reprehenderit, non blanditiis ipsum atque cum officiis at quam nostrum explicabo voluptates, natus earum quibusdam?"}
      </Text>
    </div>
  );
};

export default Content;
