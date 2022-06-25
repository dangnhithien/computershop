import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../admin/components/layout/Main";
import LayoutClient from "../layout/layout";
import Cart from "../pages/cart/page/cart.page";
import Checkout from "../pages/checkout/page/checkout.page";
import Contact from "../pages/contact/page/contact.page";
import Detail from "../pages/detail/page/detail.page";
import ErrorPage from "../pages/error/page/404.page";
import Home from "../pages/home/page/home.page";
import Login from "../pages/login/page/login.page";
import Product from "../pages/product/page/product.page";
import Test from "../pages/test/test.page";

import Add from "../admin/pages/add";
import Categories from "../admin/pages/categories";
import Dashboard from "../admin/pages/dashboard";
import ListProduct from "../admin/pages/list-product";
import Order from "../admin/pages/order";
import Promotion from "../admin/pages/promotion";

import { PATH } from "../utils/const";

import Accounts from "../admin/pages/account";
import Notification from "../admin/pages/notification";
import Shipper from "../admin/pages/shipper";
import Supplier from "../admin/pages/supplier";
import EditProduct from "../admin/pages/edit-product";

const AllRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {listRoute.map((e, key) => {
          return <Route key={key} path={e.path} element={e.component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default AllRouter;

const listRoute = [
  {
    exact: true,
    path: PATH.HOME,
    component: (
      <LayoutClient>
        <Home />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.PRODUCT,
    component: (
      <LayoutClient>
        <Product />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.DETAIL,
    component: (
      <LayoutClient>
        <Detail />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.CONTACT,
    component: (
      <LayoutClient>
        <Contact />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.CHECKOUT,
    component: (
      <LayoutClient>
        <Checkout />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.CART,
    component: (
      <LayoutClient>
        <Cart />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.SINGIN,
    component: (
      <LayoutClient>
        <Login key={1} showSingin={true} />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.SINGUP,
    component: (
      <LayoutClient>
        <Login key={2} showSingin={false} />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.ERROR,
    component: (
      <LayoutClient>
        <ErrorPage />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    path: PATH.TEST,
    component: <Test />,
  },
  {
    exact: true,
    path: "/Dashboard",
    component: (
      <Main>
        <Dashboard />
      </Main>
    ),
  },
  {
    exact: true,
    path: "san-pham/them-san-pham",
    component: (
      <Main>
        <Add />
      </Main>
    ),
  },
  {
    exact: true,
    path: "san-pham/sua-san-pham",
    component: (
      <Main>
        <EditProduct />
      </Main>
    ),
  },
  {
    exact: true,
    path: "/san-pham",
    component: (
      <Main>
        <ListProduct />
      </Main>
    ),
  },
  {
    exact: true,
    path: "/loai-san-pham",
    component: (
      <Main>
        <Categories />
      </Main>
    ),
  },
  {
    exact: true,
    path: "/shipper",
    component: (
      <Main>
        <Shipper />
      </Main>
    ),
  },

  {
    exact: true,
    path: "/nhan-hang",
    component: (
      <Main>
        <Supplier />
      </Main>
    ),
  },

  {
    exact: true,
    path: "tai-khoan",
    component: (
      <Main>
        <Accounts />
      </Main>
    ),
  },
  {
    exact: true,
    path: "don-hang",
    component: (
      <Main>
        <Order />
      </Main>
    ),
  },
  {
    exact: true,
    path: "giam-gia",
    component: (
      <Main>
        <Promotion />
      </Main>
    ),
  },
  {
    exact: true,
    path: "thong-bao",
    component: (
      <Main>
        <Notification />
      </Main>
    ),
  },
];
