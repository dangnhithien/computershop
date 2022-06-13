import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Main from "../admin/components/layout/Main";

import { PATH } from "../utils/const";
import Add from "../admin/pages/add";
import ListProduct from "../admin/pages/list-product";
import Dashboard from "../admin/pages/dashboard";
import Billing from "../admin/pages/Billing";
import Profile from "../admin/pages/Profile";
import Order from "../admin/pages/order";
import Tables from "../admin/pages/Tables";
import Categories from "../admin/pages/categories";

import Accounts from "../admin/pages/account";
import Provided from "../admin/pages/provided";

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
    path: "/billing",
    component: (
      <Main>
        <Billing />
      </Main>
    ),
  },
  {
    exact: true,
    path: "/profile",
    component: (
      <Main>
        <Profile />
      </Main>
    ),
  },
  {
    exact: true,
    path: "/nha-cung-cap",
    component: (
      <Main>
        <Provided />
      </Main>
    ),
  },
  {
    exact: true,
    path: "tables",
    component: (
      <Main>
        <Tables />
      </Main>
    ),
  },
  {
    exact: true,
    path: "account",
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
];
