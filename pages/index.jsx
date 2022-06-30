import Cta from "../components/cta";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Pricing from "../components/pricing";
function App() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Section />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
