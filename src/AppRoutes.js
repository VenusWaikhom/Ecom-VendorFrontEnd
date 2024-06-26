import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/Pages/CategoryProduct/AddProduct/AddNewProduct";
import { Home } from "./components/Pages/Home/Home";
import { Product } from "./components/Pages/Product/Product";
import NewProduct from "./components/Pages/Product/NewProduct/NewProduct";
import CategoryProduct from "./components/Pages/CategoryProduct/CategoryProduct/CategoryProduct";
import Order from "./components/Pages/Order/Order";
import Payment from "./components/Pages/Payment/Payment";
import Coupon from "./components/Pages/Coupon/Coupon";
import Profile from "./components/Pages/Profile/Profile";
import Support from "./components/Pages/SupportAndHelp/Support";
import LoginLogout from "./components/Pages/LoginAndLogOut/Login";
import { GobalStorage } from "./Context/GobalStorage";

export const VRoutes = () => {
  const { state } = GobalStorage();
  console.log(state);

  const validation = state?.userToken;

  console.log(validation);

  if (validation === "") {
    console.log("true");
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginLogout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
            <Route path="Order" element={<Order />} />
            <Route path="Payment" element={<Payment />} />
            <Route path="Coupon" element={<Coupon />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Support" element={<Support />} />
          </Route>
          <Route path="/Product">
            <Route path="AddNewProduct" element={<AddProduct />} />
            <Route path="NewProduct" element={<NewProduct />} />
            <Route path="CategoryProduct" element={<CategoryProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
};
