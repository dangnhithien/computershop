import React from "react";
import PRODUCT from "../../api/product";
import SUPPLIERS from "../../api/suppliers";
import CATEGORIES from "../../api/categories";

const supplierId = [
  "c83ca63b-9054-4da0-c4d9-08da5f706367",
  "a2337ed5-dd8a-44ae-e7fd-08da5eb971e0",
  "abeeee58-6318-4d66-c4db-08da5f706367",
  "4a36c32e-c5f8-4325-c4da-08da5f706367",
  "5335ff2c-c031-471a-c4dc-08da5f706367",
];
const name_1 = ["dell", "asus", "hp", "lenovo", "samsumg", "sony", "arce"];

export function product() {
  for (let i = 0; i < 200; i++) {
    let data = {
      name:
        "Laptop " +
        name_1[Math.floor(Math.random() * 6) + 0] +
        Math.floor(Math.random() * 9999) +
        1001 +
        " I3SSD",
      slug:
        "Laptop-" +
        (Math.floor(Math.random() * 100) + 0) +
        "-" +
        (Math.floor(Math.random() * 9999) + 1001),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni vitae aliquid, ipsum quia ducimus quo quisquam delectus! Ab fugit reiciendis vel mollitia maiores hic, exercitationem optio fugiat aut, nemo velit?",
      rate: Math.floor(Math.random() * 5) + 0,
      quantity: 1000,
      status: Math.floor(Math.random() * 1) + 0,
      supplierId: supplierId[Math.floor(Math.random() * 2) + 0],
    };
    PRODUCT.create(data);
  }
}
export function supplier() {
  for (let i = 0; i < 7; i++) {
    let num = Math.floor(Math.random() * 6) + 0;
    let data = {
      name: name_1[i],
      description: "Đây là sản phẩm được cung cấp bởi hãng " + name_1[i],
    };
    SUPPLIERS.create(data);
  }
}
const category = [
  "PC đồ họa",
  "Pc gaming",
  "Pc văn phòng",
  "Laptop",
  "tablet",
  "màn hình máy tính",
  "máy chơi game",
];
export function categories() {
  for (let i = 0; i < 7; i++) {
    let data = {
      name: category[i],
      slug: "ddd",
      level: 0,
      order: 0,
      description: "Đây là loại sản phẩm " + category[i],
    };
    CATEGORIES.post(data);
  }
}
