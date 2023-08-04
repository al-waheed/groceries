import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import Components from "./Pages/Components";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" exact component={Components} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signIn" component={SignIn} />
      </Routes>
    </>
  );
}
