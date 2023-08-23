import React from "react";
import CTA from "./CTA";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Feature from "./Feature";
import SecondFeature from "./SecondFeature";
// import Footer from "./Footer";
import Product from "./Product";
// import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <Product />
      <Service />
      <Feature />
      <SecondFeature />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}
