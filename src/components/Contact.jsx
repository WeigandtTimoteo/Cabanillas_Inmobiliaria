import { motion } from "motion/react";
import { COLORS } from "../constants/colors";

export default function Contact() {
  const whatsappNumber = "5493513348375";
  const whatsappMessage = "Hola! Me comunico desde la sección de contacto de la web para realizar una consulta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=cabanillasinmobiliaria@gmail.com&su=Consulta%20desde%20Sitio%20Web";

  return (
    <section id="contacto" style={{ backgroundColor: COLORS.bg }} className="py-28 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* COLUMNA IZQUIERDA: ENLACES DE CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.3em", color: COLORS.muted }}
            className="uppercase mb-6"
          >
            Contacto
          </p>
          <h2
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 300, color: COLORS.text, lineHeight: 1.15 }}
            className="mb-12"
          >
            Hablemos de tu<br />
            <em>próxima propiedad.</em>
          </h2>

          <div className="flex flex-col gap-6 mb-12">
            <a
              href="https://www.instagram.com/cabanillasinmobiliaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 text-white group-hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase mb-1">
                  Instagram
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, color: COLORS.text }} className="group-hover:opacity-50 transition-opacity">
                  @cabanillasinmobiliaria
                </div>
              </div>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 text-white group-hover:text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase mb-1">
                  WhatsApp
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, color: COLORS.text }} className="group-hover:opacity-50 transition-opacity">
                  +54 9 3513348375
                </div>
              </div>
            </a>

            <a 
              href={gmailUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 text-white group-hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase mb-1">
                  Email
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, color: COLORS.text }} className="group-hover:opacity-50 transition-opacity">
                  cabanillasinmobiliaria@gmail.com
                </div>
              </div>
            </a>
          </div>

          {/* DATOS LEGALES/HORARIOS ABAJO DE LOS ENLACES */}
          <div className="border-t border-white/10 pt-8 grid grid-cols-2 gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
            <div>
              <span style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase block mb-1">Atención</span>
              <p className="text-xs font-light text-neutral-400">Lunes a Viernes<br />09:00 a 18:00 hs</p>
            </div>
            <div>
              <span style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase block mb-1">Inmobiliaria</span>
              <p className="text-xs font-light text-neutral-400">
                Córdoba, Argentina<br />
                <a 
                  href="https://cpicordoba.org.ar/matriculados/?as=6929" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white transition-colors duration-200"
                >
                  MP-CPI 6929
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: REEMPLAZO DEL FORMULARIO POR IMAGEN DE ALTA GAMA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[450px] md:h-[550px] overflow-hidden border border-white/5 group"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Arquitectura de diseño"
            className="w-full h-full object-cover grayscale opacity-60 contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8" style={{ fontFamily: "Inter, sans-serif" }}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.25em", color: COLORS.text }} className="uppercase font-light mb-1">
              Cabanillas
            </p>
            <p style={{ fontSize: "0.75rem", color: COLORS.muted }} className="font-light tracking-wide">
              Estilo, seriedad y valor patrimonial.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}