import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { tokenListener } from "../../auxFunctions/firebase";
import { useEffect } from "react";
import Header from "./Header";
import Home from "../Home";
import Login from "../Login";
import ProductForm from "../ProductForm"

const Layout = () => {
  useEffect(() => {
    tokenListener();
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<ProductForm />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </BrowserRouter> 
  )
};

export default Layout;
