import { useState, useEffect } from "react";
import { motion } from "motion/react";

import imgC1 from "../assets/pics/c1.jpg";
import { COLORS } from "../constants/colors";

export default function Properties({ onViewAll, onSelectProperty }) {
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  const nextSlide = () => {
    const isDesktop = window.innerWidth >= 768;
    const maxIndex = isDesktop ? properties.length - 3 : properties.length - 1;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="propiedades" style={{ backgroundColor: COLORS.bg }} className="py-28 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: COLORS.muted }}
              className="uppercase mb-3"
            >
              Destacadas
            </p>
            <h2
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: COLORS.text }}
            >
              Propiedades seleccionadas
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onViewAll}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: COLORS.text }}
              className="uppercase underline underline-offset-4 hover:opacity-50 transition-opacity whitespace-nowrap hidden md:block"
            >
              Ver todas →
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 border border-white/10 flex items-center justify-center transition-all ${
                  currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-black"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={properties.length <= 3 || (window.innerWidth >= 768 ? currentIndex === properties.length - 3 : currentIndex === properties.length - 1)}
                className={`w-12 h-12 border border-white/10 flex items-center justify-center transition-all ${
                  properties.length <= 3 || (window.innerWidth >= 768 ? currentIndex === properties.length - 3 : currentIndex === properties.length - 1)
                    ? "opacity-30 cursor-not-allowed" 
                    : "hover:bg-black hover:text-white"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ 
              x: window.innerWidth >= 768 ? `calc(-${currentIndex} * (33.3333% + 8px))` : `calc(-${currentIndex} * (83vw + 24px))` 
            }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
          >
            {properties.map((prop) => (
              <motion.article
                key={prop.id}
                onClick={() => onSelectProperty(prop.id)}
                className="w-[83vw] sm:w-full md:w-[calc(33.3333%-16px)] shrink-0 group cursor-pointer"
              >
                <div
                  className="relative w-full mb-5 overflow-hidden border border-white/5"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img 
                    src={prop.images && prop.images.length > 0 ? prop.images[0].image : imgC1} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ imageRendering: "auto" }}
                  />
                  <div
                    className="absolute top-3 left-3 bg-white text-black px-3 py-1 font-mono font-bold z-10"
                    style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
                  >
                    {prop.operation_type === "SALE" ? "VENTA" : "ALQUILER"}
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </div>

                <div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 400, color: COLORS.text }} className="mb-1 truncate">
                    {prop.title || "Propiedad sin título"}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={COLORS.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, color: COLORS.muted }}>
                      {prop.location}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: COLORS.subtle }}>
                      {prop.total_area} m²
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: COLORS.subtle }}>
                      {prop.rooms} amb.
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 500, color: COLORS.text }}>
                      {prop.currency} {Number(prop.price).toLocaleString("es-AR")}
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.text }} className="uppercase group-hover:underline underline-offset-4">
                      Ver más →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}