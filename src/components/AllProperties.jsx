import { useState, useEffect } from "react";
import { motion } from "motion/react";
import imgC1 from "../assets/pics/c1.jpg";
import { COLORS } from "../constants/colors";

export default function AllProperties({ onSelectProperty }) {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    age_status: "",
    rooms: "",
    min_price: "",
    max_price: "",
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
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

  return (
    <section style={{ backgroundColor: COLORS.bg }} className="min-h-screen py-32 px-6 md:px-16 w-full text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: COLORS.muted }} className="uppercase mb-3">
            Catálogo
          </p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: COLORS.text }} className="line-height-1">
            Todas las propiedades
          </h1>
        </div>

        <div className="mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="w-full lg:max-w-md relative">
            <input
              type="text"
              placeholder="Buscar por ubicación o descripción..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)" }}
              className="w-full bg-transparent border-b py-3 px-1 focus:outline-none focus:border-white transition-colors text-sm font-light rounded-none"
            />
            <div className="absolute right-2 top-3 opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-wrap gap-4 items-center">
            <select
              name="age_status"
              value={filters.age_status}
              onChange={handleFilterChange}
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)", backgroundColor: COLORS.bg }}
              className="bg-black text-white border px-4 py-2.5 text-xs font-light tracking-wider uppercase focus:outline-none focus:border-white rounded-none cursor-pointer"
            >
              <option value="">Estado</option>
              <option value="CONSTRUCTION">En Construcción</option>
              <option value="NEW">A Estrenar</option>
              <option value="USED">Usado</option>
            </select>

            <select
              name="rooms"
              value={filters.rooms}
              onChange={handleFilterChange}
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)", backgroundColor: COLORS.bg }}
              className="bg-black text-white border px-4 py-2.5 text-xs font-light tracking-wider uppercase focus:outline-none focus:border-white rounded-none cursor-pointer"
            >
              <option value="">Ambientes</option>
              <option value="1">1 Ambiente</option>
              <option value="2">2 Ambientes</option>
              <option value="3">3 Ambientes</option>
              <option value="4">4+ Ambientes</option>
            </select>

            <input
              type="number"
              name="min_price"
              placeholder="Min USD"
              value={filters.min_price}
              onChange={handleFilterChange}
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)" }}
              className="bg-transparent border text-white text-xs font-light px-4 py-2.5 w-28 focus:outline-none focus:border-white rounded-none"
            />

            <input
              type="number"
              name="max_price"
              placeholder="Max USD"
              value={filters.max_price}
              onChange={handleFilterChange}
              style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(255,255,255,0.1)" }}
              className="bg-transparent border text-white text-xs font-light px-4 py-2.5 w-28 focus:outline-none focus:border-white rounded-none"
            />
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
                    alt={prop.location}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ imageRendering: "auto" }}
                  />
                  <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 font-mono font-bold text-[0.55rem] tracking-[0.2em] z-10">
                    {prop.age_status === "CONSTRUCTION" ? "EN CONST." : prop.age_status === "NEW" ? "A ESTRENAR" : "USADO"}
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </div>

                <div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.35rem", fontWeight: 400, color: COLORS.text }} className="mb-1 truncate">
                    {prop.description}
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