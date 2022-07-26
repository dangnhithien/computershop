import Carousel from "../../../components/carousel/carousel";
import BannerSingle from "../../../components/product-card/bannerSingle";
import ProductHorizon from "components/product-card/product-horizon";
import Content from "../components/content";

const carousels = {
  title: "Gợi ý cho bạn",
  requestBody: {
    keyword: "",
    pageSize: 10,
    pageNumber: 1,
  },
};
const Product = () => {
  return (
    <>
      <BannerSingle />
      <Content />
      <BannerSingle />
      <ProductHorizon />
      <Carousel key={3} {...carousels} />
    </>
  );
};

export default Product;
