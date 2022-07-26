import { Col, Image, Row, Typography } from "antd";
import { TiTimesOutline } from "react-icons/ti";

const { Text, Title } = Typography;

const Product = ({ item }) => {
  return (
    <Row justify="center" className="box-image">
      <span className="cancel">
        <TiTimesOutline />
      </span>
      <Col>
        <Image
          preview={false}
          width={250}
          src="https://laptophainam.com/wp-content/uploads/2022/01/laptop-hp-elitebook-840-g2-i5-cu-600x550.jpg"
        />
      </Col>
      <Col>
        <Text className="name-product">
          Lenovo IdeaPad 5 82LN00A3IN Laptop AMD Ryzen 7 5700U AMD Radeon 16GB
          512GB SSD Windows 10 vs HP Victus 16 Laptop AMD Ryzen 7 5800H Nvidia
          GeForce RTX 3060 32GB 1TB SSD Windows 10
        </Text>
      </Col>
    </Row>
  );
};

export default Product;
