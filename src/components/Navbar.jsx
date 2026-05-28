import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoBlanco from "../assets/LOGO_BLANCO.svg";
import { COLORS } from "../constants/colors";

export default function Navbar({ setView }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", view: "home", targetId: "inicio" },
    { label: "Propiedades", view: "home", targetId: "propiedades" },
    { label: "Nosotros", view: "home", targetId: "nosotros" },
    { label: "Contacto", view: "home", targetId: "contacto" },
  ];

  const handleLinkClick = (viewName, targetId) => {
    setView(viewName);
    setMenuOpen(false);
    
    if (viewName === "home" && targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
          scrolled 
            ? "bg-black/90 backdrop-blur-md border-white/10" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          
          <button 
            onClick={() => handleLinkClick("home", "inicio")}
            className="flex items-center gap-4 h-full py-2 transition-transform duration-300 hover:scale-[1.03] origin-left transform-gpu will-change-transform text-left"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={logoBlanco} alt="Logo" className="h-12 w-auto object-contain" />
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", fontWeight: 500, letterSpacing: "0.12em", color: COLORS.text }}>
                CABANILLAS
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.3em", color: COLORS.muted }}>
                SERVICIOS INMOBILIARIOS
              </span>
            </div>
          </button>

          <ul className="hidden md:flex items-center gap-10 ml-auto">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleLinkClick(link.view, link.targetId)}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.2em", color: COLORS.text }}
                  className="hover:opacity-50 transition-opacity duration-300 uppercase"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.view, link.targetId)}
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 300, letterSpacing: "0.1em", color: COLORS.text }}
                className="hover:opacity-40 transition-opacity"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}