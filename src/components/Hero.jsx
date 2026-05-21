import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col bg-white">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Text side */}
        <div className="flex flex-col justify-center px-6 md:px-16 pb-16 pt-32 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <p
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: "#888" }}
              className="uppercase mb-6"
            >
              Inmobiliaria
            </p>
            <h1
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#000" }}
            >
              Tu próxima<br />
              <em>propiedad,</em><br />
              aquí.
            </h1>
            <p
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.8, color: "#555" }}
              className="mt-8 max-w-xs"
            >
              Asesoramiento personalizado en compra, venta y alquiler de propiedades. Confianza y resultados.
            </p>
            <div className="flex gap-4 mt-10">
              <a
                href="#propiedades"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}
                className="uppercase bg-black text-white px-8 py-4 hover:bg-black/80 transition-colors duration-300"
              >
                Ver propiedades
              </a>
              <a
                href="#contacto"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}
                className="uppercase border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image placeholder side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="relative"
          style={{ minHeight: "60vh" }}
        >
          <div
            className="absolute inset-0 md:inset-4"
            style={{ backgroundColor: "#00FF00" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "#000", opacity: 0.5 }}
                className="uppercase"
              >
                Imagen principal
              </div>
              <div
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem", fontWeight: 300, color: "#000", opacity: 0.4 }}
              >
                Placeholder
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - SVG Flecha abajo */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </motion.div>
    </section>
  );
}