import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllProperties from "./components/AllProperties";
import PropertyDetail from "./components/PropertyDetail";
import OwnerForm from "./components/OwnerForm";
import WhatsAppButton from "./components/WhatsAppButton";
import { COLORS } from "./constants/colors";

export default function App() {
  const [view, setView] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("prop")) return "detail";
    return localStorage.getItem("cabanillas_view") || "home";
  });
  
  const [selectedPropertyId, setSelectedPropertyId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const paramId = params.get("prop");
    if (paramId) return paramId;
    const saved = localStorage.getItem("cabanillas_property_id");
    if (!saved) return null;
    try {
      return JSON.parse(saved);
    } catch {
      return saved;
    }
  });
  
  const [detailOrigin, setDetailOrigin] = useState(() => {
    return localStorage.getItem("cabanillas_detail_origin") || "home";
  });

  useEffect(() => {
    localStorage.setItem("cabanillas_view", view);
    if (view !== "detail" && window.location.search.includes("prop=")) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [view]);

  useEffect(() => {
    if (selectedPropertyId !== null) {
      localStorage.setItem("cabanillas_property_id", JSON.stringify(selectedPropertyId));
    } else {
      localStorage.removeItem("cabanillas_property_id");
    }
  }, [selectedPropertyId]);

  useEffect(() => {
    localStorage.setItem("cabanillas_detail_origin", detailOrigin);
  }, [detailOrigin]);

  const handleSelectProperty = (id, origin = "home") => {
    setSelectedPropertyId(id);
    setDetailOrigin(origin);
    setView("detail");
  };

  const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] }
  };

  return (
    <div 
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: COLORS.bg, color: COLORS.text }} 
      className="min-h-screen w-full overflow-x-hidden selection:bg-neutral-800 selection:text-white relative"
    >
      <Navbar setView={setView} />
      
      <AnimatePresence mode="wait">
        
        {view === "home" && (
          <motion.div key="home" {...pageTransition}>
            <Hero onConsign={() => setView("consign")} />
            <Properties 
              onViewAll={() => setView("all")} 
              onSelectProperty={(id) => handleSelectProperty(id, "home")} 
            />
            <About />
            <Contact />
          </motion.div>
        )}

        {view === "all" && (
          <motion.div key="all" {...pageTransition}>
            <AllProperties 
              onSelectProperty={(id) => handleSelectProperty(id, "all")} 
              onBack={() => setView("home")}
            />
          </motion.div>
        )}

        {view === "detail" && (
          <motion.div key="detail" {...pageTransition}>
            <PropertyDetail id={selectedPropertyId} onBack={() => setView(detailOrigin)} />
          </motion.div>
        )}

        {view === "consign" && (
          <motion.div key="consign" {...pageTransition}>
            <OwnerForm onBack={() => setView("home")} />
          </motion.div>
        )}
        
      </AnimatePresence>
      
      <Footer setView={setView} />
      <WhatsAppButton />
    </div>
  );
}