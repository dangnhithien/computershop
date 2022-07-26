import { MdStarRate } from "react-icons/md";

const DetailProduct = ({ item }) => {
  return (
    <>
      <span className="box-square">
        <span className="rate">
          <MdStarRate className="icon" />
          4.5
        </span>
      </span>
      <span className="box-square">512GB SSD</span>
      <span className="box-square">15.6 Inches</span>
      <span className="box-square">AMD Ryzen 7 5700U</span>
      <span className="box-square">AMD Radeon</span>
      <span className="box-square">AMD Radeon</span>
      <span className="box-square">AMD Radeon</span>
    </>
  );
};

export default DetailProduct;
