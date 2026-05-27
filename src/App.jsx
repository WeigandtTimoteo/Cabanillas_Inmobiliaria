import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react"; // 1. Importamos AnimatePresence

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
  const [view, setView] = useState("home");
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const handleSelectProperty = (id) => {
    setSelectedPropertyId(id);
    setView("detail");
  };

  // Configuración de animación estándar para las páginas
  const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } // EaseOut premium
  };

  return (
    <div 
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: COLORS.bg, color: COLORS.text }} 
      className="min-h-screen w-full overflow-x-hidden selection:bg-neutral-800 selection:text-white relative"
    >
      <Navbar setView={setView} />
      
      {/* 2. Envolvemos el enrutador condicional */}
      <AnimatePresence mode="wait">
        
        {view === "home" && (
          <motion.div key="home" {...pageTransition}>
            <Hero onConsign={() => setView("consign")} />
            <Properties onViewAll={() => setView("all")} onSelectProperty={handleSelectProperty} />
            <About />
            <Contact />
          </motion.div>
        )}

        {view === "all" && (
          <motion.div key="all" {...pageTransition}>
            <AllProperties onSelectProperty={handleSelectProperty} />
          </motion.div>
        )}

        {view === "detail" && (
          <motion.div key="detail" {...pageTransition}>
            <PropertyDetail id={selectedPropertyId} onBack={() => setView("all")} />
          </motion.div>
        )}

        {view === "consign" && (
          <motion.div key="consign" {...pageTransition}>
            <OwnerForm onBack={() => setView("home")} />
          </motion.div>
        )}
        
      </AnimatePresence>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}