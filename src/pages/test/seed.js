import React from "react";
import PRODUCT from "../../api/product";

const supplierId = [
  "e27fda91-854c-46db-cee9-08da5062d043",
  "e644d071-6871-4ecd-cee8-08da5062d043",
  "c54487d7-2690-4570-b2bb-08da5418621f",
];
const name_1 = ["dell", "asus", "hp", "lenovo", "samsumg", "sony", "arce"];

function product() {
  for (let i = 0; i < 200; i++) {
    let data = {
      name:
        "Laptop " +
        name_1[Math.floor(Math.random() * 7) + 0] +
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

export { product };
