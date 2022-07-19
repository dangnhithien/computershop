import CATEGORIES from "api/categories";
import { useEffect, useState } from "react";

export default function useCategory(requestBody) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    CATEGORIES.search(requestBody)
      .then((res) => {
        res.data.data ? setCategories(res.data.data) : setCategories([]);
        setIsLoading(false);
      })
      .catch((error) => {
        setCategories([]);
        setIsLoading(false);
      });
  }, [requestBody]);

  return { categories, isLoading };
}
