import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileSetting from "./pages/setting/ProfileSetting";
import ProtectedRoute from "./components/pages/_generic/container/protector/ProtectedRoute";
import ProtectedLoginSignupRoute from "./components/pages/_generic/container/protector/ProtectedLoginSignup";
import { Toaster } from "sonner";
import Users from "./pages/Users";
import AllProducts from "./pages/product/AllProducts";
import ProductDetail from "./pages/product/ProductDetail";
import MyOrders from "./pages/setting/MyOrders";
import MyClasses from "./pages/setting/MyClasses";
import PaymentMethods from "./pages/payment/PaymentMethods";
import PaymentMenu from "./pages/payment/PaymentMenu";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedLoginSignupRoute>
              <Login />
            </ProtectedLoginSignupRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedLoginSignupRoute>
              <Signup />
            </ProtectedLoginSignupRoute>
          }
        />
        <Route
          path="/setting/profile"
          element={
            <ProtectedRoute>
              <ProfileSetting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users-list"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-products"
          element={
            <ProtectedRoute>
              <AllProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting/order"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting/class"
          element={
            <ProtectedRoute>
              <MyClasses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment/method"
          element={
            <ProtectedRoute>
              <PaymentMethods />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment/menu"
          element={
            <ProtectedRoute>
              <PaymentMenu />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
