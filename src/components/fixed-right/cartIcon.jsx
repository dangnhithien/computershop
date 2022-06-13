import React, { useCallback } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { Cookie, COOKIE_NAME } from "../../utils/cookie";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/banner_images/banner-img2770x496.jpg";
import { Popover, Button, Avatar, List } from "antd";
import styled from "styled-components";

const data = [
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
];
const Image = styled.div`
  border-radius: 6px;
  overflow: hidden;
`;
const Boxshadow = styled.div`
  margin-bottom: 10px;
  background-color: #fafafa;
  box-shadow: rgb(17 17 26 / 5%) 1px 1px 1px, rgb(17 17 26 / 10%) 1px 1px 1px;
  border-radius: 8px;
  padding: 0 10px;
  border: 0.1px solid #f1f1f1;
`;
const CartIcon = () => {
  const [cookies] = useCookies([COOKIE_NAME.CART]);

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/cart", { replace: true }),
    [navigate]
  );
  const content = (
    <div className="cart_show text-center">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <Boxshadow>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image>
                    <Avatar shape="square" size={64} src={img} />
                  </Image>
                }
                title={item.title}
                description="số lượng: 10"
              />
            </List.Item>
          </Boxshadow>
        )}
      />

      <Button type="primary" onClick={handleOnClick}>
        xem thêm
      </Button>
    </div>
  );
  return (
    <Popover placement="left" content={content} trigger="click">
      <Link to="" className="offcanvas-toggle">
        <BsFillCartPlusFill className="icon-size" />
        <span className="header-action-icon-item-count">
          {new Cookie(cookies).getSizeCart()}
        </span>
      </Link>
    </Popover>
  );
};

export default CartIcon;
