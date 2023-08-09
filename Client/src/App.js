import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
