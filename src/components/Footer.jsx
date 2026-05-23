import logoBlanco from "../assets/LOGO_BLANCO.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <img 
            src={logoBlanco} 
            alt="Cabanillas Inmobiliaria" 
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-10 h-14"> 
          {["Propiedades", "Nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.2em", color: "#666" }}
              className="uppercase hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 justify-center h-14">
          <a
            href="https://www.instagram.com/cabanillasinmobiliaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", fontWeight: 300, color: "white", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Cabanillas Inmobiliaria
          </span>
        </div>
      </div>
    </footer>
  );
}