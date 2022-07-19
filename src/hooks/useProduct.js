import PRODUCT from "api/product";
import { useEffect, useState } from "react";

export default function useProduct(requestBody) {
  const [products, setProducts] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    PRODUCT.search(requestBody)
      .then((res) => {
        res.data ? setProducts(res.data) : setProducts({ data: [] });
        setIsLoading(false);
      })
      .catch((error) => {
        setProducts({ data: [] });
        setIsLoading(false);
      });
  }, [requestBody]);

  return { products, isLoading };
}
