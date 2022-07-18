import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Carousel from "../../../components/carousel/carousel";
import BannerSingle from "../../../components/product-card/bannerSingle";
import Category from "../components/categories";

import BoxProduct from "../../../components/product-card/box-product";
import CarouselPoster from "components/carousel/carousel-poster";
import Supplier from "../components/supplier";
import GridProduct from "../components/grid-product";

const Home = () => {
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
    appreciate: {
      title: "Đánh giá tốt",
      requestBody: {
        keyword: "",
        pageSize: 10,
        pageNumber: 1,
      },
    },
  };
  const { sale, bestSelling, category, appreciate } = initialization;
  return (
    <>
      <div className="container">
        <BoxProduct />
        <CarouselPoster {...sale} />
        <Supplier />
        <BannerSingle />
        <Category {...category} />
        <Carousel key={1} {...bestSelling} />
      </div>
    </>
  );
};
export default Home;
