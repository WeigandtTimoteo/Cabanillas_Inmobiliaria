import { motion } from "motion/react";
import fotoEquipo from "../assets/pics/emp.png";
import { COLORS } from "../constants/colors";

const stats = [
  { value: "+100", label: "Propiedades vendidas" },
  { value: "+15", label: "Años de experiencia" },
  { value: "+300", label: "Clientes satisfechos" },
];

export default function About() {
  return (
    <section id="nosotros" style={{ backgroundColor: COLORS.text }} className="py-20 md:py-28 px-4 sm:px-8 md:px-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-left md:text-center flex flex-col items-start md:items-center order-2 md:order-1"
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.3em", color: COLORS.muted }} className="uppercase mb-4 md:mb-6 w-full text-center">
            Quiénes somos
          </p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.7rem, 4.5vw, 3.5rem)", fontWeight: 600, color: COLORS.bg, lineHeight: 1.15 }} className="mb-6 md:mb-8 w-full text-center">
            Una historia familiar <br /> 
            construida sobre <br />
            vínculos reales.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.10rem", fontWeight: 500, lineHeight: 2, color: COLORS.bg }} className="mb-6 max-w-md text-left md:text-center md:mx-auto">
            Somos padre e hijo, dos generaciones, una misma forma de hacer las cosas. Unidos por la pasión de ayudar a las personas a encontrar el lugar donde construir su futuro.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.10rem", fontWeight: 500, lineHeight: 2, color: COLORS.bg }} className="mb-10 md:mb-12 max-w-md text-left md:text-center md:mx-auto">
            Cada cliente tiene una historia distinta, y nuestro trabajo es comprenderla para encontrar la mejor oportunidad para sus objetivos. Por eso trabajamos con cercanía, compromiso y una atención personalizada en cada operación.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-black/40 pt-8 md:pt-10 w-full text-left md:text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-start md:items-center">
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.4rem, 5vw, 1.8rem)", fontWeight: 500, color: COLORS.bg }} className="leading-tight font-mono tracking-tight">
                  {stat.value}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", color: COLORS.muted }} className="mt-1.5 line-clamp-2 px-1 md:px-0">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden w-40 h-40 rounded-full mx-auto md:mx-0 md:w-full md:h-auto md:aspect-[3/4] md:rounded-none transform-gpu shrink-0 order-1 md:order-2 md:border-t-80"
        >
          <img 
            src={fotoEquipo} 
            alt="Asesor Cabanillas Inmobiliaria" 
            className="w-full h-full md:w-140 md:h-160 object-cover object-center"
            style={{ imageRendering: "auto" }}
          />
        </motion.div>

      </div>
    </section>
  );
}