import { useState, useEffect } from "react";
import { motion } from "motion/react";
import imgC1 from "../assets/pics/c1.jpg";
import { COLORS } from "../constants/colors";

export default function PropertyDetail({ id, onBack }) {
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/properties/list/${id}/`)
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
              <img src={activeImage} alt={property.location} className="w-full h-full object-cover" />
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
              {property.age_status === "CONSTRUCTION" ? "En Construcción" : property.age_status === "NEW" ? "A Estrenar" : `Usado — ${property.age_years} años`}
            </span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", color: COLORS.text }} className="text-3xl md:text-5xl font-light mb-6 leading-tight">
              {property.location}
            </h1>
            <div style={{ fontFamily: "Cormorant Garamond, serif" }} className="text-2xl md:text-3xl font-medium mb-8 border-b border-white/10 pb-6">
              {property.currency} {Number(property.price).toLocaleString("es-AR")}
            </div>

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