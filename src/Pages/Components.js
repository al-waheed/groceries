import CTA from "./CTA";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Service from "./Service";
import Feature from "./Feature";
import SecondFeature from "./SecondFeature";
import Footer from "./Footer";
import Product from "./Product";

function Components() {
  return (
    <div>
      <Navbar />
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

export default Components;
