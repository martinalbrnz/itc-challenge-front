import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../Home";
import Login from "../Login";
import About from "../About";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Layout;
