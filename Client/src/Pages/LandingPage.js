import React from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Feature from "./Feature";
import Footer from "./Footer";
import Product from "./Product";
import NewsLetter from "./NewsLetter";


export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Service />
      <Feature />
      <Product />
      <NewsLetter/>
      <Footer />
    </div>
  );
}
