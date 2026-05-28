import { useState, useEffect } from "react";
import { motion } from "motion/react";
import imgC1 from "../assets/pics/c1.jpg";
import { COLORS } from "../constants/colors";

export default function AllProperties({ onSelectProperty, onBack }) {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    operation_type: "",
    age_status: "",
    rooms: "",
    min_price: "",
    max_price: "",
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (filters.operation_type) params.append("operation_type", filters.operation_type);
    if (filters.age_status) params.append("age_status", filters.age_status);
    if (filters.rooms) params.append("rooms", filters.rooms);
    if (filters.min_price) params.append("min_price", filters.min_price);
    if (filters.max_price) params.append("max_price", filters.max_price);

    fetch(`${import.meta.env.VITE_API_URL}?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search, filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const minVal = Number(filters.min_price) || 0;
  const maxVal = Number(filters.max_price) || 2000000;

  return (
    <section style={{ backgroundColor: COLORS.bg }} className="min-h-screen py-24 md:py-32 px-4 sm:px-8 md:px-16 w-full text-white">
      <div className="max-w-7xl mx-auto">
        
        <button
          onClick={onBack}
          style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }}
          className="mb-8 md:mb-12 flex items-center gap-2 text-xs tracking-wider uppercase hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver al inicio
        </button>

        <div className="mb-12">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: COLORS.muted }} className="uppercase mb-3">
            Catálogo
          </p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: COLORS.text }} className="leading-none">
            Todas las propiedades
          </h1>
        </div>

        <div className="mb-16 flex flex-col gap-8 border-b border-white/5 pb-10">
          
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Buscar por ubicación, título o descripción..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)" }}
              className="w-full bg-transparent border-b py-3.5 px-1 focus:outline-none focus:border-white transition-colors text-sm font-light rounded-none"
            />
            <div className="absolute right-2 top-4 opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start w-full">
            
            <div className="flex flex-col gap-2.5 w-full">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase">
                Operación
              </label>
              <select
                name="operation_type"
                value={filters.operation_type}
                onChange={handleFilterChange}
                style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)", backgroundColor: COLORS.bg }}
                className="bg-black text-white border px-4 py-2.5 text-xs font-light tracking-wider uppercase focus:outline-none focus:border-white rounded-none cursor-pointer h-11 w-full"
              >
                <option value="">Cualquiera</option>
                <option value="SALE">Venta</option>
                <option value="RENT">Alquiler</option>
              </select>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase">
                Estado
              </label>
              <select
                name="age_status"
                value={filters.age_status}
                onChange={handleFilterChange}
                style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)", backgroundColor: COLORS.bg }}
                className="bg-black text-white border px-4 py-2.5 text-xs font-light tracking-wider uppercase focus:outline-none focus:border-white rounded-none cursor-pointer h-11 w-full"
              >
                <option value="">Cualquiera</option>
                <option value="CONSTRUCTION">En Construcción</option>
                <option value="NEW">A Estrenar</option>
                <option value="USED">Usado</option>
              </select>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase">
                Ambientes
              </label>
              <select
                name="rooms"
                value={filters.rooms}
                onChange={handleFilterChange}
                style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)", backgroundColor: COLORS.bg }}
                className="bg-black text-white border px-4 py-2.5 text-xs font-light tracking-wider uppercase focus:outline-none focus:border-white rounded-none cursor-pointer h-11 w-full"
              >
                <option value="">Cualquiera</option>
                <option value="1">1 Ambiente</option>
                <option value="2">2 Ambientes</option>
                <option value="3">3 Ambientes</option>
                <option value="4">4+ Ambientes</option>
              </select>
            </div>

            <div className="flex flex-col gap-2.5 w-full lg:col-span-2">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase">
                Rango de Precio (USD)
              </label>
              
              <div className="flex gap-3 w-full">
                <input
                  type="number"
                  name="min_price"
                  placeholder="Mínimo"
                  value={filters.min_price}
                  onChange={handleFilterChange}
                  style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)" }}
                  className="bg-black border text-white text-xs font-light px-4 py-2 w-full focus:outline-none focus:border-white rounded-none h-11 text-center"
                />
                <input
                  type="number"
                  name="max_price"
                  placeholder="Máximo"
                  value={filters.max_price}
                  onChange={handleFilterChange}
                  style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)" }}
                  className="bg-black border text-white text-xs font-light px-4 py-2 w-full focus:outline-none focus:border-white rounded-none h-11 text-center"
                />
              </div>

              <div className="relative w-full h-1 bg-white/10 rounded mt-3">
                <div
                  className="absolute h-full bg-white rounded"
                  style={{
                    left: `${(minVal / 2000000) * 100}%`,
                    right: `${100 - (maxVal / 2000000) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="2000000"
                  step="10000"
                  value={filters.min_price || 0}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), maxVal - 50000);
                    setFilters({ ...filters, min_price: val });
                  }}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none accent-white left-0 top-1/2 -translate-y-1/2 [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto transform-gpu"
                />
                <input
                  type="range"
                  min="0"
                  max="2000000"
                  step="10000"
                  value={filters.max_price || 2000000}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), minVal + 50000);
                    setFilters({ ...filters, max_price: val });
                  }}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none accent-white left-0 top-1/2 -translate-y-1/2 [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto transform-gpu"
                />
              </div>
            </div>

          </div>
        </div>

        {properties.length === 0 ? (
          <div className="py-24 text-center border border-white/5 bg-neutral-950/20">
            <p style={{ fontFamily: "Inter, sans-serif" }} className="text-sm font-light opacity-40 tracking-widest uppercase">
              No se encontraron propiedades que coincidan con los filtros aplicados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {properties.map((prop) => (
              <motion.article
                key={prop.id}
                onClick={() => onSelectProperty(prop.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full mb-5 overflow-hidden border border-white/5" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={prop.images && prop.images.length > 0 ? prop.images[0].image : imgC1}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ imageRendering: "auto" }}
                  />
                  <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 font-mono font-bold text-[0.55rem] tracking-[0.2em] z-10">
                    {prop.operation_type === "SALE" ? "VENTA" : "ALQUILER"}
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </div>

                <div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.35rem", fontWeight: 400, color: COLORS.text }} className="mb-1 truncate">
                    {prop.title || "Propiedad sin título"}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={COLORS.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, color: COLORS.muted }}>
                      {prop.location}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: COLORS.subtle }}>
                      {prop.total_area} M² TOTALES
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: COLORS.subtle }}>
                      {prop.rooms} AMB.
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", fontWeight: 500, color: COLORS.text }}>
                      {prop.currency} {Number(prop.price).toLocaleString("es-AR")}
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.text }} className="uppercase group-hover:underline underline-offset-4">
                      Ver detalle →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}