import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoStrips from "./components/PromoStrips";
import FeaturedGrid from "./components/FeaturedGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <PromoStrips />
      <FeaturedGrid />
      <Footer />
    </div>
  );
}

export default App;