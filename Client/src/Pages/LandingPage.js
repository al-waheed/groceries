import React from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Feature from "./Feature";
import Product from "./Product";
// import Sales from "./Sales";
import SingleItem from "./SingleItem";
import CustomerReview from "./CustomerReview";


export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Service />
      <Feature />
      <Product />
      {/* <Sales/> */}
      <CustomerReview/>
      <SingleItem/>
    </div>
  );
}
