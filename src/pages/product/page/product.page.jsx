import Carousel from "../../../components/carousel/carousel";

import { Col, notification, Row, Tag } from "antd";
import { useEffect, useRef, useState } from "react";
import Pagination from "../../../components/pagination";
import ProductSingle from "../../../components/product-single";
import Sidebar from "../components/sidebar";
import PRODUCT from "../../../api/product";
import CATEGORIES from "../../../api/categories";
import SUPPLIERS from "../../../api/suppliers";

const Product = () => {
  const [selectedTags, setSelectedTags] = useState(["Books"]);
  const listCategory = useRef({ category: [] });
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    data: [],
  });
  const [data, setData] = useState(null);
  const [valueStatus, setValueStatus] = useState(2);

  const [listSupplier, setListSupplier] = useState([]);

  const filter = useRef({
    advancedSearch: {
      fields: [""],
      keyword: "",
    },
    keyword: "",
    pageNumber: 0,
    pageSize: 0,
    orderBy: [""],
    supplierId: "",
    minimumRate: 1,
    maximumRate: 5,
  });
  useEffect(() => {
    actionGetAllProduct({ keyword: "" });
    // actionGetAllCategories();
    // actionGetAllSuppliers();
  }, []);

  function actionGetAllProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function actionDeleteSingleProduct(id) {
    setLoading(true);
    PRODUCT.delete({ id: id })
      .then((res) => {
        setLoading(false);
        notification.success({
          message: "Xóa thành công !",
          placement: "topRight",
        });
        actionGetAllProduct();
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Xóa không thành công !",
          placement: "topRight",
        });
      });
  }
  function actionGetAllCategories() {
    CATEGORIES.search({ keyword: "" })
      .then((res) => {
        // setListCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function actionGetAllSuppliers() {
    SUPPLIERS.search({ keyword: "" })
      .then((res) => {
        // setListSupplier(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // const item = {
  //   id: "",
  //   slug: "",
  //   amount: 1000000,
  //   promotion: 10,
  //   name: "New Balance Fresh Foam Kaymin Car Purts ",
  //   detail: "new-balance-fresh-foam-kaymin-car-purts",
  //   rate: 4,
  //   countRate: 5,
  //   imageUrl: "https://laptop88.vn/media/product/6731_3.jpg",
  // };
  return (
    <>
      <div className="shop-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row pt-20">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 px-0">
              <div className="sort-product-tab-wrapper">
                <div className="container px-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content tab-animate-zoom">
                        <div
                          className="tab-pane active show sort-layout-single"
                          id="layout-3-grid"
                        >
                          <Row gutter={[24, 0]}>
                            {data?.map((item, key) => {
                              return (
                                <Col span={6}>
                                  <ProductSingle key={key} item={item} />;
                                </Col>
                              );
                            })}
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
            {/* <Carousel data={[item]} /> */}
          </div>
        </div>
      </div>{" "}
      {/* ...:::: End Shop Section:::... */}
    </>
  );
};

export default Product;
