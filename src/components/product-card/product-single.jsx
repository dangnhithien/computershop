import { Image, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import { imageProduct } from "utils/addresss/image";
import { PATH } from "../../utils/const";
import fCurrency from "../../utils/parseMoney";
import RateCustom from "../modal-feed-back/rateCustom";
import { StyleProduct } from "./style/style";
const { Text, Paragraph } = Typography;

const ProductSingle = ({ item, index }) => {
  const { id, name, slug, promotion, price, rate, countRate } = item;
  return (
    <StyleProduct>
      <Tag color="gold" className="promotion">
        {promotion ?? "30%"}
      </Tag>

      <Link to={PATH.DETAIL(id, slug)} className="image">
        <Image preview={false} src={imageProduct[index]} alt="images" />
      </Link>

      <RateCustom value={rate} rates={countRate} />

      <Link to={PATH.DETAIL(id, slug)}>
        <Paragraph level={5} ellipsis={{ rows: 2 }} className="name">
          {name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
          ipsum eligendi. Laborum, rerum asperiores! Doloremque voluptates
          necessitatibus sequi eveniet ea quibusdam deserunt soluta officiis,
          odio, maxime alias consequatur consectetur ut.
        </Paragraph>
      </Link>

      <Text type="danger" strong>
        {fCurrency(100000000)}
      </Text>
    </StyleProduct>
  );
};

export default ProductSingle;
