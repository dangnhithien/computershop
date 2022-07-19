import SUPPLIERS from "api/suppliers";
import { useEffect, useState } from "react";

export default function useSupplier(requestBody) {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    SUPPLIERS.search(requestBody)
      .then((res) => {
        res.data.data ? setSuppliers(res.data.data) : setSuppliers([]);
        setIsLoading(false);
      })
      .catch((error) => {
        setSuppliers([]);
        setIsLoading(false);
      });
  }, [requestBody]);

  return { suppliers, isLoading };
}
