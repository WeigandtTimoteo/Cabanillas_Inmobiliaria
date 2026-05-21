import { motion } from "motion/react";

const stats = [
  { value: "+200", label: "Propiedades vendidas" },
  { value: "+10", label: "Años de experiencia" },
  { value: "+500", label: "Clientes satisfechos" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-black text-white py-28 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Placeholder retrato - Verde Flúor */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
          style={{ aspectRatio: "3/4" }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ backgroundColor: "#00FF00" }}
          >
            <span
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "#000" }}
              className="uppercase font-mono font-bold"
            >
              [ FOTO EQUIPO ]
            </span>
            <span
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem", fontWeight: 300, color: "#000", opacity: 0.6 }}
            >
              Media Placeholder
            </span>
          </div>
        </motion.div>

        {/* Contenido de texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: "#888" }}
            className="uppercase mb-6"
          >
            Quiénes somos
          </p>
          <h2
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "#fff", lineHeight: 1.15 }}
            className="mb-8"
          >
            Más de una década<br />
            conectando personas<br />
            con <em>su hogar ideal.</em>
          </h2>
          <p
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 300, lineHeight: 2, color: "#aaa" }}
            className="mb-10 max-w-md"
          >
            En Cabanillas Inmobiliaria entendemos que cada operación es única. Trabajamos con dedicación, honestidad y conocimiento profundo del mercado para acompañarte en cada etapa del proceso.
          </p>
          <p
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 300, lineHeight: 2, color: "#aaa" }}
            className="mb-12 max-w-md"
          >
            Nuestro equipo está comprometido con brindarte la mejor experiencia, desde la búsqueda inicial hasta la firma del contrato.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 300, color: "#fff" }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: "#666" }}
                  className="mt-1"
                >
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