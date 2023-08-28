import React from "react";
import CTA from "./CTA";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Feature from "./Feature";
import SecondFeature from "./SecondFeature";
import Footer from "./Footer";
import Product from "./Product";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Product />
      <Service />
      <Feature />
      <SecondFeature />
      <CTA />
      <Footer />
    </div>
  );
}
