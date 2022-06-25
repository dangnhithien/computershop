import { notification } from "antd";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PRODUCT from "../../../api/product";
import Carousel from "../../../components/carousel/carousel";
import Banner from "../components/banner";
import BannerSingle from "../components/bannerSingle";
import Category from "../components/categories";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [data, setData] = useState([]);

  // const data = useRef({
  //   name: "",
  //   description: "",
  //   level: 0,
  //   order: 0,
  //   isShowed: true,
  //   parentId: null,
  // });

  useEffect(() => {
    actionGetProduct({ keyword: "", status: 1 });
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
      <Banner />
      <Category />
      <Carousel key={1} data={data} />
      <div className="banner-section section-top-gap-100">
        <div className="banner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <BannerSingle />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <Carousel key={2} data={data} />
    </>
  );
};
export default Home;
