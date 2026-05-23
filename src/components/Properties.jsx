import { motion } from "motion/react";
import imgC1 from "../assets/pics/c1.jpg";
import imgC2 from "../assets/pics/c2.jpg";
import imgC3 from "../assets/pics/c3.jpg";

const properties = [
  {
    id: 1,
    type: "Venta",
    title: "Departamento moderno",
    location: "Palermo, CABA",
    area: "85 m²",
    rooms: "3 amb.",
    price: "USD 185.000",
    image: imgC1,
  },
  {
    id: 2,
    type: "Alquiler",
    title: "PH con terraza",
    location: "Belgrano, CABA",
    area: "110 m²",
    rooms: "4 amb.",
    price: "$420.000 / mes",
    image: imgC2,
  },
  {
    id: 3,
    type: "Venta",
    title: "Loft a estrenar",
    location: "Villa Crespo, CABA",
    area: "52 m²",
    rooms: "1 amb.",
    price: "USD 95.000",
    image: imgC3,
  },
];

export default function Properties() {
  return (
    <section id="propiedades" className="bg-white py-28 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: "#888" }}
              className="uppercase mb-3"
            >
              Destacadas
            </p>
            <h2
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#000" }}
            >
              Propiedades seleccionadas
            </h2>
          </div>
          <a
            href="#contacto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#000" }}
            className="uppercase underline underline-offset-4 hover:opacity-50 transition-opacity whitespace-nowrap"
          >
            Ver todas →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.article
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div
                className="relative w-full mb-5 overflow-hidden border border-black/5"
                style={{ aspectRatio: "4/3" }}
              >
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ imageRendering: "auto" }}
                />
                <div
                  className="absolute top-3 left-3 bg-black text-white px-3 py-1 font-mono font-bold"
                  style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
                >
                  {prop.type.toUpperCase()}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", fontWeight: 400, color: "#000" }} className="mb-1">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, color: "#888" }}>
                    {prop.location}
                  </span>
                </div>
                <div className="flex gap-4 mb-4">
                  {[prop.area, prop.rooms].map((detail) => (
                    <span key={detail} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: "#555" }}>
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 500, color: "#000" }}>
                    {prop.price}
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#000" }} className="uppercase group-hover:underline underline-offset-4">
                    Ver más →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}