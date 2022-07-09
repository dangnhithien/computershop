import React, { useEffect, useState } from "react";
import { StyleTopProduct } from "../style/style";
const FilterTop = ({ value = "all" }) => {
  const router_filter = [
    {
      id: 1,
      name: "Tất cả",
      value: "all",
    },
    {
      id: 2,
      name: "Bán chạy",
      value: "bestselling",
    },
    {
      id: 3,
      name: "giảm giá",
      value: "promotion",
    },
    {
      id: 4,
      name: "Đánh giá tốt",
      value: "rate",
    },
  ];
  const [activeClass, setActiveClass] = useState({ id: 1 });
  return (
    <StyleTopProduct>
      {router_filter.map((e, key) => {
        return (
          <span
            key={key}
            className={e.id === activeClass.id ? "active" : ""}
            onClick={() => {
              setActiveClass(e);
            }}
          >
            {e.name}
          </span>
        );
      })}
    </StyleTopProduct>
  );
};

export default FilterTop;
