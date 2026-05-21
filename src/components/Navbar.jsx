import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoNegro from "../assets/LOGO_NEGRO.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Propiedades", href: "#propiedades" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* SE CORRIGIERON LAS CLASES DEL BORDE Y LA TRANSICIÓN ACÁ */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
          scrolled 
            ? "bg-white border-black/10" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          
          {/* Logo Combinado */}
          <a 
            href="#inicio" 
            className="flex items-center gap-4 h-full py-2 transition-transform duration-300 hover:scale-[1.03] origin-left transform-gpu will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={logoNegro} alt="Logo" className="h-12 w-auto object-contain" />
            <div className="h-8 w-[1px] bg-black/20 hidden sm:block" />
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", fontWeight: 500, letterSpacing: "0.12em", color: "#000" }}>
                CABANILLAS
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.3em", color: "#666" }}>
                INMOBILIARIA
              </span>
            </div>
          </a>

          {/* Menú Escritorio */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.2em", color: "#000" }}
                  className="hover:opacity-50 transition-opacity duration-300 uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Instagram SVG */}
            <a
              href="https://www.instagram.com/cabanillasinmobiliaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center hover:opacity-50 transition-opacity duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            
            {/* Hamburguesa Móvil */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 300, letterSpacing: "0.1em", color: "#000" }}
                className="hover:opacity-40 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a href="https://www.instagram.com/cabanillasinmobiliaria/" target="_blank" rel="noopener noreferrer" className="mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}