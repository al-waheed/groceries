import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Pages/Navbar";
import Cart from "./Pages/Cart";
import OrderItems from "./Pages/OrderItems";
import FAQ from "./Pages/FAQ";
import AllProducts from "./Pages/AllProducts";
import Footer from "./Pages/Footer";

function App() {
  const location = useLocation();
  const excludedPaths = ["/signup", "/signin"];
  const isExcluded = excludedPaths.includes(location.pathname);

  return (
    <div>
      {!isExcluded && <Navbar />}
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/orders" element={<OrderItems />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
      {!isExcluded && <Footer />}
    </div>
  );
}

export default App;
