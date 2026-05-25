import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllProperties from "./components/AllProperties";
import PropertyDetail from "./components/PropertyDetail";
import { COLORS } from "./constants/colors";

export default function App() {
  const [view, setView] = useState("home");
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const handleSelectProperty = (id) => {
    setSelectedPropertyId(id);
    setView("detail");
  };

  return (
    <div 
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: COLORS.bg, color: COLORS.text }} 
      className="min-h-screen w-full overflow-x-hidden selection:bg-neutral-800 selection:text-white"
    >
      <Navbar setView={setView} />
      
      {view === "home" && (
        <>
          <Hero />
          <Properties onViewAll={() => setView("all")} onSelectProperty={handleSelectProperty} />
          <About />
          <Contact />
        </>
      )}

      {view === "all" && (
        <AllProperties onSelectProperty={handleSelectProperty} />
      )}

      {view === "detail" && (
        <PropertyDetail id={selectedPropertyId} onBack={() => setView("all")} />
      )}
      
      <Footer />
    </div>
  );
}