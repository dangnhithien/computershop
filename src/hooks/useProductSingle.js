import PRODUCT from "api/product";
import { useEffect, useState } from "react";

export default function useProductSingle(productId) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    PRODUCT.getSingle({ id: productId })
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setProduct(null);
        setIsLoading(false);
      });
  }, [productId]);

  return { product, isLoading };
}
