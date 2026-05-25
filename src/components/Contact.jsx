import { motion } from "motion/react";
import { useState } from "react";
import { COLORS } from "../constants/colors";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" style={{ backgroundColor: COLORS.bg }} className="py-28 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
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
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: COLORS.text, lineHeight: 1.15 }}
            className="mb-10"
          >
            Hablemos de tu<br />
            <em>próxima propiedad.</em>
          </h2>

          <div className="flex flex-col gap-6">
            <a
              href="https://www.instagram.com/cabanillasinmobiliaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
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

            <a href="tel:+541100000000" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 text-white group-hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase mb-1">
                  Teléfono
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, color: COLORS.text }} className="group-hover:opacity-50 transition-opacity">
                  +54 11 0000-0000
                </div>
              </div>
            </a>

            <a href="mailto:info@cabanillasinmobiliaria.com" className="flex items-center gap-4 group">
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
                  info@cabanillasinmobiliaria.com
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {sent ? (
            <div className="flex flex-col items-start justify-center h-full gap-4 py-16">
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 300, color: COLORS.text }}>
                ¡Gracias!
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 300, color: COLORS.text, lineHeight: 1.8 }}>
                Recibimos tu mensaje. Te contactaremos a la brevedad.
              </p>
              <button
                onClick={() => setSent(false)}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}
                className="mt-4 uppercase underline underline-offset-4 hover:opacity-50 transition-opacity"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Juan García" },
                { name: "email", label: "Email", type: "email", placeholder: "juan@email.com" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label htmlFor={field.name} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    required
                    className="border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-white transition-colors rounded-none text-white"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", fontWeight: 300 }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: COLORS.muted }} className="uppercase">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  required
                  className="border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-white transition-colors resize-none rounded-none text-white"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", fontWeight: 300 }}
                />
              </div>

              <button
                type="submit"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em" }}
                className="mt-4 uppercase bg-white text-black px-10 py-4 self-start hover:bg-white/75 transition-colors duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}