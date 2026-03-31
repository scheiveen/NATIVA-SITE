import React, { useEffect } from "react";
import "@/App.css";

// Layout
import Navigation from "./components/layout/Navigation";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Process from "./components/sections/Process";
import Differentials from "./components/sections/Differentials";
import Cultivars from "./components/sections/Cultivars";
import Certification from "./components/sections/Certification";
import TechnicalNotice from "./components/sections/TechnicalNotice";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App bg-[#0A140F] min-h-screen" data-testid="app-container">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Process />
        <Differentials />
        <Cultivars />
        <Certification />
        <TechnicalNotice />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
