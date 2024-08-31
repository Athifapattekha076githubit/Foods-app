import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";
import CheifSection from "./components/CheifSection";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <CheifSection />
      </div>
    </div>
  );
}

export default App;
