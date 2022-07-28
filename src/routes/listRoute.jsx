import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../admin/components/layout/Main";
import LayoutClient from "../layout/layout";
import Cart from "../pages/cart/page/cart.page";

import Detail from "../pages/detail/page/detail.page";
import ErrorPage from "../pages/error/page/404.page";
import Home from "../pages/home/page/home.page";

import Product from "../pages/product/page/product.page";
import Test from "../pages/test/test.page";

import Add from "../admin/pages/add";
import Categories from "../admin/pages/categories";
import Dashboard from "../admin/pages/dashboard";
import ListProduct from "../admin/pages/list-product";
import Order from "../admin/pages/order";
import Promotion from "../admin/pages/promotion";

import { PATH, PATH_ADIM } from "../utils/const";

import Accounts from "../admin/pages/account";
import Notification from "../admin/pages/notification";
import Shipper from "../admin/pages/shipper";
import Supplier from "../admin/pages/supplier";
import EditProduct from "../admin/pages/edit-product";
import Profile from "../pages/profile/page/profile.page";
import { KEY } from "../utils/localStorage";
import Singin from "../pages/login/page/singin.page";
import Singup from "../pages/login/page/singup.page";
import Compare from "pages/compare/page/compare.page";

const AllRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {client.map((e, key) => {
          if (!localStorage.getItem(KEY.TOKEN) && e.private) return <></>;
          return <Route key={key} path={e.path} element={e.component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default AllRouter;

const client = [
  {
    exact: true,
    private: false,
    path: PATH.HOME,
    component: (
      <LayoutClient>
        <Home />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    private: false,
    path: PATH.PRODUCT,
    component: (
      <LayoutClient>
        <Product />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    private: false,
    path: PATH.DETAIL(),
    component: (
      <LayoutClient>
        <Detail />
      </LayoutClient>
    ),
  },

  {
    exact: true,
    private: true,
    path: PATH.CART,
    component: (
      <LayoutClient>
        <Cart />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    private: true,
    path: PATH.PROFILE,
    component: (
      <LayoutClient>
        <Profile />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    private: true,
    path: PATH.COMPARE,
    component: (
      <LayoutClient>
        <Compare />
      </LayoutClient>
    ),
  },
  {
    exact: true,
    private: false,
    path: PATH.SINGIN,
    component: <Singin />,
  },
  {
    exact: true,
    private: false,
    path: PATH.SINGUP,
    component: <Singup />,
  },
  {
    exact: true,
    private: false,
    path: PATH.ERROR,
    component: <ErrorPage />,
  },
  {
    exact: true,
    path: PATH.TEST,
    component: <Test />,
  },
];
//   const admin = [
//   {
//     exact: true,
//     path: PATH_ADIM.DASHBOARD,
//     component: (
//       <Main>
//         <Dashboard />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.AAD_PRODUCT,
//     component: (
//       <Main>
//         <Add />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.EDIT_PRODUCT,
//     component: (
//       <Main>
//         <EditProduct />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.PRODUCT,
//     component: (
//       <Main>
//         <ListProduct />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.CATEGORY,
//     component: (
//       <Main>
//         <Categories />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.SHIPPER,
//     component: (
//       <Main>
//         <Shipper />
//       </Main>
//     ),
//   },

//   {
//     exact: true,
//     path: PATH_ADIM.SUPPLIER,
//     component: (
//       <Main>
//         <Supplier />
//       </Main>
//     ),
//   },

//   {
//     exact: true,
//     path: PATH_ADIM.ACCOUNT,
//     component: (
//       <Main>
//         <Accounts />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.ORDER,
//     component: (
//       <Main>
//         <Order />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.PROMOTION,
//     component: (
//       <Main>
//         <Promotion />
//       </Main>
//     ),
//   },
//   {
//     exact: true,
//     path: PATH_ADIM.NOTIFICATION,
//     component: (
//       <Main>
//         <Notification />
//       </Main>
//     ),
//   },
// ];
