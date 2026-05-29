import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgC1 from "../assets/pics/c1.jpg";
import { COLORS } from "../constants/colors";

export default function PropertyDetail({ id, onBack }) {
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [copied, setCopied] = useState(false);
  const phoneNumber = "5493513348375";

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

  const handleNextImage = () => {
    if (!property?.images || property.images.length <= 1) return;
    const currentIndex = property.images.findIndex((img) => img.image === activeImage);
    const nextIndex = (currentIndex + 1) % property.images.length;
    setActiveImage(property.images[nextIndex].image);
  };

  const handlePrevImage = () => {
    if (!property?.images || property.images.length <= 1) return;
    const currentIndex = property.images.findIndex((img) => img.image === activeImage);
    const prevIndex = (currentIndex - 1 + property.images.length) % property.images.length;
    setActiveImage(property.images[prevIndex].image);
  };

  const handleImageDrag = (event, info) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNextImage();
    } else if (info.offset.x > swipeThreshold) {
      handlePrevImage();
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?prop=${id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Mirá esta propiedad: ${property.title}`,
          url: shareUrl,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!property) {
    return (
      <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen flex items-center justify-center text-white">
        <span style={{ fontFamily: "Inter, sans-serif" }} className="text-sm tracking-widest uppercase opacity-50">Cargando...</span>
      </div>
    );
  }

  const opText = property.operation_type === "SALE" ? "Venta" : "Alquiler";
  const message = `Hola! Me interesa la propiedad en ${opText}: "${property.title}" ubicada en ${property.location} (${property.currency} ${Number(property.price).toLocaleString("es-AR")}). Mi consulta es la de la web:`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section style={{ backgroundColor: COLORS.bg }} className="min-h-screen py-20 md:py-32 px-4 sm:px-8 md:px-16 w-full text-white">
      <div className="max-w-7xl mx-auto">
        
        <button
          onClick={onBack}
          style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }}
          className="mb-8 md:mb-12 flex items-center gap-2 text-sm tracking-wider uppercase hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver atrás
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <div>
            <div className="relative w-full mb-4 overflow-hidden border border-white/5 group/gallery select-none rounded-none bg-neutral-950" style={{ aspectRatio: "4/3" }}>
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={property.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleImageDrag}
                  className="w-full h-full object-cover cursor-grab active:cursor-grabbing absolute inset-0 transform-gpu z-10"
                />
              </AnimatePresence>

              {property.images && property.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-black transition-all duration-300 md:opacity-0 md:group-hover/gallery:opacity-100 z-20 p-2 transform-gpu"
                    aria-label="Foto anterior"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-black transition-all duration-300 md:opacity-0 md:group-hover/gallery:opacity-100 z-20 p-2 transform-gpu"
                    aria-label="Siguiente foto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            {property.images && property.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {property.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img.image)}
                    className={`relative aspect-[4/3] overflow-hidden border transition-all ${activeImage === img.image ? "border-white scale-[0.98]" : "border-white/10 opacity-50"}`}
                  >
                    <img src={img.image} alt="" className="w-full h-full object-cover pointer-events-none" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 lg:mt-0">
            <span style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-xs tracking-widest uppercase block mb-2">
              {opText} — {property.age_status === "CONSTRUCTION" ? "En Construcción" : property.age_status === "NEW" ? "A Estrenar" : `Usado — ${property.age_years} años`}
            </span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", color: COLORS.text }} className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 leading-tight">
              {property.title || "Propiedad sin título"}
            </h1>
            <div style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-sm font-light mb-6 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {property.location}
            </div>
            <div style={{ fontFamily: "Cormorant Garamond, serif" }} className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 border-b border-white/10 pb-4">
              {property.currency} {Number(property.price).toLocaleString("es-AR")}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "Inter, sans-serif", backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}
                className="w-full sm:w-2/3 border py-4 flex items-center justify-center gap-3 text-sm tracking-wider uppercase transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Consultar por esta propiedad
              </motion.a>

              <motion.button
                onClick={handleShare}
                whileHover={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "Inter, sans-serif", backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}
                className="w-full sm:w-1/3 border py-4 flex items-center justify-center gap-3 text-sm tracking-wider uppercase transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                {copied ? "¡Copiado!" : "Compartir"}
              </motion.button>
            </div>

            <div className="mb-8">
              <h2 style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-sm tracking-widest uppercase mb-3">Descripción</h2>
              <p style={{ fontFamily: "Inter, sans-serif" }} className="text-base font-light leading-relaxed text-neutral-300 whitespace-pre-line">
                {property.description}
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }} className="text-sm tracking-widest uppercase mb-4">Ficha Técnica</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-base font-light border-t border-white/5 pt-4">
                {[
                  { label: "M² Totales", val: `${property.total_area} m²` },
                  { label: "M² Cubiertos", val: `${property.covered_area} m²` },
                  { label: "Ambientes", val: property.rooms },
                  { label: "Dormitorios", val: property.bedrooms },
                  { label: "Baños", val: property.bathrooms },
                  { label: "Toilettes", val: property.toilettes },
                  { label: "Cocheras", val: property.garages },
                ].map((tech, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="opacity-40">{tech.label}</span>
                    <span>{tech.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}