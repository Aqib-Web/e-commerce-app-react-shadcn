// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCatergory from "./Pages/ShopCatergory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { NewNav } from "./components/Navbar/NewNav";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_men.png";
import women_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full flex-col">
          <NewNav />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCatergory category="men" banner={men_banner} />}
            />
            <Route
              path="/women"
              element={<ShopCatergory banner={women_banner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCatergory banner={kids_banner} category="kids" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
