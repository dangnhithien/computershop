import { Button, InputNumber } from "antd";
import useProductSingle from "hooks/useProductSingle";
import { useEffect, useRef } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import useStoreCart from "store/cart";
import useStoreUser from "store/personal";
import { PATH } from "utils/const";

const AddToCart = () => {
  const { productId } = useParams();
  const setCart = useStoreCart((state) => state.setCart);
  const loading = useStoreCart((state) => state.loading);
  const addToCart = useStoreCart((state) => state.addToCart);
  const userProfile = useStoreUser((state) => state.profile);
  const quantity = useRef(1);
  const { product } = useProductSingle(productId);
  useEffect(() => window.scrollTo(0, 0), [loading]);
  function handleAddToCart() {
    const request = {
      productId: productId,
      userid: userProfile.id,
      quantity: quantity.current,
      price: product.price,
    };
    addToCart(request).then(() => {
      setCart(userProfile.id);
    });
  }

  return (
    <div className="add-to-cart">
      <div className="quantity">
        <InputNumber
          min={1}
          max={10}
          defaultValue={1}
          style={{ width: 70, height: 40, lineHeight: "40px" }}
        />
      </div>
      {!userProfile.id ? (
        <Button className="btn-add-to-cart">
          <Link
            to={PATH.SINGIN}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <RiShoppingCartFill />
            Thêm vào giỏ
          </Link>
        </Button>
      ) : (
        <Button
          className="btn-add-to-cart"
          onClick={handleAddToCart}
          loading={loading}
        >
          <RiShoppingCartFill />
          Thêm vào giỏ
        </Button>
      )}
    </div>
  );
};

export default AddToCart;
