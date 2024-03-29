import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Carousel from "../../../components/carousel/carousel";
import BannerSingle from "../../../components/product-card/bannerSingle";
import CategoryList from "../components/categories";

import BoxProduct from "../../../components/product-card/box-product";
import CarouselPoster from "components/carousel/carousel-poster";
import Supplier from "../components/supplier";

const initialization = {
  sale: {
    title: "Giảm giá",
    requestBody: {
      keyword: "",
      pageSize: 10,
      pageNumber: 1,
    },
  },
  category: {
    title: "Danh mục",
    requestBody: {
      keyword: "",
      pageSize: 6,
      pageNumber: 1,
    },
  },
  bestSelling: {
    title: "Bán chạy",
    requestBody: {
      keyword: "",
      pageSize: 10,
      pageNumber: 1,
    },
  },
};
const Home = () => {
  const { sale, bestSelling, category } = initialization;
  return (
    <>
      <BoxProduct />
      <CarouselPoster {...sale} />
      <Supplier />
      <BannerSingle />
      <CategoryList {...category} />
      <Carousel {...bestSelling} />
    </>
  );
};
export default Home;
