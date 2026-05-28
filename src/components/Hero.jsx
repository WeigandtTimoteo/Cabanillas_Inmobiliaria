import { motion } from "motion/react";
import imgPrincipal from "../assets/pics/princ.jpg";
import { COLORS } from "../constants/colors";

export default function Hero({ onConsign }) {
  const handleScrollToProperties = () => {
    const element = document.getElementById("propiedades");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" style={{ backgroundColor: COLORS.bg }} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full relative">
        
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 pb-20 pt-32 lg:pt-20 lg:pb-16 z-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h1
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: COLORS.text }}
            >
              Tu próxima<br />
              <em>propiedad,</em><br />
              aquí.
            </h1>
            
            <p
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.8, color: COLORS.subtle }}
              className="mt-6 md:mt-8 max-w-xs opacity-90 lg:opacity-100"
            >
              Asesoramiento personalizado en compra, venta y alquiler de propiedades. Confianza y resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto sm:self-start">
              <button
                onClick={handleScrollToProperties}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}
                className="uppercase bg-white text-black px-8 py-4 hover:bg-white/85 transition-colors duration-300 text-center whitespace-nowrap"
              >
                Ver propiedades
              </button>
              <button
                onClick={onConsign}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}
                className="uppercase bg-transparent text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 text-center whitespace-nowrap"
              >
                Quiero vender / alquilar
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute inset-0 lg:relative lg:inset-auto w-full h-full lg:min-h-screen overflow-hidden z-10 lg:z-auto"
        >
          <img 
            src={imgPrincipal} 
            alt="Edificios corporativos Cabanillas"
            className="w-full h-full object-cover opacity-35 lg:opacity-100 grayscale contrast-125 lg:grayscale-0 lg:contrast-100 transition-all duration-700"
            style={{ imageRendering: "auto" }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950 lg:hidden" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </motion.div>
    </section>
  );
}