import logoBlanco from "../assets/LOGO_BLANCO.svg";
import { COLORS } from "../constants/colors";

export default function Footer({ setView }) {
  const handleNavClick = (item) => {
    setView("home");
    
    let targetId = "inicio";
    if (item === "Propiedades") {
      targetId = "propiedades";
    } else if (item === "Nosotros") {
      targetId = "nosotros";
    } else if (item === "Contacto") {
      targetId = "contacto";
    }

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex shrink-0">
          <img 
            src={logoBlanco} 
            alt="Cabanillas Inmobiliaria" 
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4"> 
          {["Propiedades", "Nosotros", "Contacto"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.2em", color: COLORS.subtle }}
              className="uppercase hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2.5">
          <span 
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", fontWeight: 300, color: COLORS.subtle, letterSpacing: "0.1em" }}
            className="opacity-60 text-center md:text-right"
          >
            © {new Date().getFullYear()} Cabanillas Servicios Inmobiliarios
          </span>
        </div>

      </div>
    </footer>
  );
}
