import { useState, useEffect } from "react";
import { motion } from "motion/react";
import imgC1 from "../assets/pics/c1.jpg";
import { COLORS } from "../constants/colors";

export default function PropertyDetail({ id, onBack }) {
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const phoneNumber = "5493510000000";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        if (data.images && data.images.length > 0) {
          setActiveImage(data.images[0].image);
        } else {
          setActiveImage(imgC1);
        }
      })
      .catch((err) => console.error(err));
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!property) {
    return (
      <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen flex items-center justify-center text-white">
        <span style={{ fontFamily: "Inter, sans-serif" }} className="text-xs tracking-widest uppercase opacity-50">Cargando...</span>
      </div>
    );
  }

  const opText = property.operation_type === "SALE" ? "Venta" : "Alquiler";
  const message = `Hola! Me interesa la propiedad en ${opText}: "${property.title}" ubicada en ${property.location} (${property.currency} ${Number(property.price).toLocaleString("es-AR")}). Mi consulta es la siguiente:`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section style={{ backgroundColor: COLORS.bg }} className="min-h-screen py-32 px-6 md:px-16 w-full text-white">
      <div className="max-w-7xl mx-auto">
        
        <button
          onClick={onBack}
          style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }}
          className="mb-12 flex items-center gap-2 text-xs tracking-wider uppercase hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver al catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="relative w-full mb-4 overflow-hidden border border-white/5" style={{ aspectRatio: "4/3" }}>
              <img src={activeImage} alt={property.title} className="w-full h-full object-cover" />
            </div>
            
            {property.images && property.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {property.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img.image)}
                    className={`relative aspect-[4/3] overflow-hidden border ${activeImage === img.image ? "border-white" : "border-white/10"}`}
                  >
                    <img src={img.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-[0.65rem] tracking-[0.3em] uppercase block mb-3">
              {opText} — {property.age_status === "CONSTRUCTION" ? "En Construcción" : property.age_status === "NEW" ? "A Estrenar" : `Usado — ${property.age_years} años`}
            </span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", color: COLORS.text }} className="text-3xl md:text-5xl font-light mb-2 leading-tight">
              {property.title || "Propiedad sin título"}
            </h1>
            <div style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-xs font-light mb-6 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {property.location}
            </div>
            <div style={{ fontFamily: "Cormorant Garamond, serif" }} className="text-2xl md:text-3xl font-medium mb-8 border-b border-white/10 pb-6">
              {property.currency} {Number(property.price).toLocaleString("es-AR")}
            </div>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: "#FFFFFF", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                fontFamily: "Inter, sans-serif", 
                backgroundColor: "transparent", 
                borderColor: "rgba(255,255,255,0.2)",
                color: "#FFFFFF"
              }}
              className="w-full border py-4 mb-10 flex items-center justify-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Consultar por esta propiedad
            </motion.a>

            <div className="mb-10">
              <h2 style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-[0.65rem] tracking-[0.2em] uppercase mb-4">Descripción</h2>
              <p style={{ fontFamily: "Inter, sans-serif" }} className="text-sm font-light leading-relaxed text-neutral-300 whitespace-pre-line">
                {property.description}
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-[0.65rem] tracking-[0.2em] uppercase mb-4">Ficha Técnica</h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-light border-t border-white/5 pt-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">M² Totales</span>
                  <span>{property.total_area} m²</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">M² Cubiertos</span>
                  <span>{property.covered_area} m²</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">Ambientes</span>
                  <span>{property.rooms}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">Dormitorios</span>
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">Baños</span>
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">Toilettes</span>
                  <span>{property.toilettes}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-40">Cocheras</span>
                  <span>{property.garages}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}