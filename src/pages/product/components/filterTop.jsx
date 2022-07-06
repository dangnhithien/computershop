import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { StyleTopProduct } from "../style/style";
const FilterTop = ({ value = "all" }) => {
  const init = [
    {
      name: "Tất cả",
      value: "all",
      status: false,
    },
    {
      name: "Bán chạy",
      value: "bestselling",
      status: false,
    },
    {
      name: "giảm giá",
      value: "promotion",
      status: false,
    },
    {
      name: "Đánh giá tốt",
      value: "rate",
      status: false,
    },
  ];
  const [activeClass, setActiveClass] = useState(init);
  useEffect(() => {
    handleActiveClass(value);
  }, []);
  function handleActiveClass(values) {
    let index = init.findIndex(({ value }) => value === values);
    let clone = init.filter((e) => true);
    clone[index].status = true;
    setActiveClass([...clone]);
  }
  return (
    <StyleTopProduct>
      {activeClass.map((e, key) => {
        return (
          <span
            className={e.status ? "active" : ""}
            onClick={() => {
              handleActiveClass(e.value);
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
