import React from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Feature from "./Feature";
import Product from "./Product";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Service />
      <Feature />
      <Product />
    </div>
  );
}
