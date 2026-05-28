import { motion } from "motion/react";
import fotoEquipo from "../assets/pics/emp.jpg";
import { COLORS } from "../constants/colors";

const stats = [
  { value: "+200", label: "Propiedades vendidas" },
  { value: "+10", label: "Años de experiencia" },
  { value: "+500", label: "Clientes satisfechos" },
];

export default function About() {
  return (
    <section id="nosotros" style={{ backgroundColor: COLORS.surface }} className="text-white py-20 md:py-28 px-4 sm:px-8 md:px-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden w-40 h-40 rounded-full mx-auto md:mx-0 md:w-full md:h-auto md:aspect-[3/4] md:rounded-none border border-white/10 shadow-xl transform-gpu shrink-0"
        >
          <img 
            src={fotoEquipo} 
            alt="Asesor Cabanillas Inmobiliaria" 
            className="w-full h-full object-cover object-top"
            style={{ imageRendering: "auto" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: COLORS.muted }} className="uppercase mb-4 md:mb-6">
            Quiénes somos
          </p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: COLORS.text, lineHeight: 1.15 }} className="mb-6 md:mb-8">
            Más de una década<br />
            conectando personas<br />
            con <em>su hogar ideal.</em>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 300, lineHeight: 2, color: COLORS.subtle }} className="mb-6 max-w-md opacity-90">
            En Cabanillas Inmobiliaria entendemos que cada operación es única. Trabajamos con dedicación, honestidad y conocimiento profundo del mercado para acompañarte en cada etapa del proceso.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 300, lineHeight: 2, color: COLORS.subtle }} className="mb-10 md:mb-12 max-w-md opacity-90">
            Nuestro equipo está comprometido con brindarte la mejor experiencia, desde la búsqueda inicial hasta la firma del contrato.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-white/10 pt-8 md:pt-10 w-full text-center md:text-left">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center md:items-start">
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 300, color: COLORS.text }} className="leading-tight">
                  {stat.value}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", fontWeight: 300, letterSpacing: "0.05em", color: COLORS.muted }} className="mt-1.5 line-clamp-2 px-1 md:px-0">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}