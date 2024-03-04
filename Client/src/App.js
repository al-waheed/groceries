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
import Admin from "./Pages/Admin";

function App() {
  const location = useLocation();
  const excludedPaths = ["/signup", "/signin"];
  const isExcluded = excludedPaths.includes(location.pathname);

  return (
    <div>
      {!isExcluded && <Navbar />}
      <Routes>
        <Route path="/" exact Component={LandingPage} />
        <Route path="/cart"  exact Component={Cart} />
        <Route path="/signup"  exact Component={SignUp} />
        <Route path="/signin"  exact Component={SignIn} />
        <Route path="/orders"  exact Component={OrderItems} />
        <Route path="/faq"  exact Component={FAQ} />
        <Route path="/allproducts"  exact Component={AllProducts} />
        <Route path="/admin/*" Component={Admin} />
      </Routes>
      {!isExcluded && <Footer />}
    </div>
  );
}

export default App;
