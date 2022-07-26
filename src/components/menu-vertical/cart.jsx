import { Avatar, Badge, Col, Empty, Row, Tooltip, Typography } from "antd";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import useStoreCart from "../../store/cart";
import { PATH } from "../../utils/const";
import useStoreUser from "../../store/personal";
import { StyleSubContent } from "./style/style";
const { Title, Text } = Typography;

const Cart = () => {
  const userProfile = useStoreUser((state) => state.profile);
  const dataCart = useStoreCart((state) => state.cart);
  return (
    <div className="cart">
      <Badge count={dataCart.length} size="small" offset={[0, 20]}>
        <Tooltip
          overlayStyle={{ maxWidth: "500px" }}
          color={"#fff"}
          title={
            <>
              <StyleSubContent>
                {dataCart.length === 0 ? (
                  <Empty
                    description="Bạn chưa thêm sản phẩm nào!"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                ) : (
                  <>
                    {dataCart?.slice(0, 3).map((item, key) => {
                      return (
                        <Col key={key} span={24} className="row-cart">
                          <Row gutter={[8, 8]} wrap={false} align="middle">
                            <Col>
                              <Avatar
                                shape="square"
                                src="https://phucanhcdn.com/media/product/42440_surface_laptop_go_sandstone_h1.png"
                                size={64}
                              />
                            </Col>
                            <Col>
                              <Row gutter={[0, 0]}>
                                <Col span={24}>
                                  <Title
                                    level={5}
                                    ellipsis={{ rows: 1, expandable: true }}
                                    style={{ marginBottom: 0 }}
                                    className="title"
                                  >
                                    {item.productName ?? "null"}
                                  </Title>
                                </Col>
                                <Col span={24}>
                                  <Text type="secondary">
                                    {" "}
                                    &#8363; {item.price ?? "null"} &nbsp;
                                  </Text>
                                </Col>
                                <Col span={24}>
                                  <Text type="warning">
                                    x{item.quantity ?? "null"}
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      );
                    })}
                    <Col span={24}>
                      <Link to={PATH.CART} className="link">
                        Giỏ hàng
                      </Link>
                    </Col>
                  </>
                )}
              </StyleSubContent>
            </>
          }
          placement="left"
        >
          <Link
            to={Object.keys(userProfile).length != 0 ? PATH.CART : PATH.SINGIN}
            className="border-icon"
          >
            <RiShoppingCartFill className="icon" />
          </Link>
        </Tooltip>
      </Badge>
    </div>
  );
};

export default Cart;
