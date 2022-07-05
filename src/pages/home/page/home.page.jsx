import { Col, notification, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PRODUCT from "../../../api/product";
import Carousel from "../../../components/carousel/carousel";
import { FaMoneyBillWave, FaShippingFast } from "react-icons/fa";

import BannerSingle from "../../../components/product-card/bannerSingle";
import Category from "../components/categories";
import ImageGallery from "react-image-gallery";

import { MdSupportAgent } from "react-icons/md";
import { StyleInfoBox, StyleBanner } from "../style/style";
import BoxProduct from "../../../components/product-card/box-product";
import useStoreUser from "../../../store/personal";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [data, setData] = useState([]);
  const setUser = useStoreUser((state) => state.setUser);

  useEffect(() => {
    setUser();
    actionGetProduct({ keyword: "", status: 1, pageNumber: 1, pageSize: 10 });
    console.log("home", data);
  }, []);

  function actionGetProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  return (
    <>
      <div className="container">
        <BoxProduct />
        <Category />
        <Carousel key={1} data={data} title="Bán chạy" />

        <BannerSingle />

        <Carousel key={2} data={data} title="đánh giá tốt" />
      </div>
    </>
  );
};
export default Home;
