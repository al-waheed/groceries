import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Feature from "./components/Feature";
import SecondFeature from "./components/SecondFeature";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Service />
      <Feature />
      <SecondFeature />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
