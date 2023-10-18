import React from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Feature from "./Feature";
import Product from "./Product";
import SingleItem from "./SingleItem";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Service />
      <Feature />
      <Product />
      <SingleItem />
    </div>
  );
}
