import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
