import { useState } from "react";
import { motion } from "motion/react";
import { COLORS } from "../constants/colors";

export default function OwnerForm({ onBack }) {
  const [form, setForm] = useState({
    nombre: "",
    contacto: "",
    tipo: "Casa",
    operacion: "Venta",
    ubicacion: "",
    detalles: ""
  });

  const targetNumber = "5493513348375";
  const targetEmail = "cabanillasinmobiliaria@gmail.com";

  const buildTextMessage = () => {
    const operacionTexto = form.operacion === "Venta" ? "Venta" : "Alquiler";
    const detallesTexto = form.detalles.trim() ? form.detalles : "No especificados";

    return (
      `¡Hola! ¿Cómo va? Me comunico desde la web porque quería consultarles para consignar una propiedad con ustedes.%0A%0A` +
      `*Datos del inmueble:*%0A` +
      `• *Propietario:* ${form.nombre}%0A` +
      `• *Contacto:* ${form.contacto}%0A` +
      `• *Operación:* ${operacionTexto}%0A` +
      `• *Tipo:* ${form.tipo}%0A` +
      `• *Ubicación:* ${form.ubicacion}%0A` +
      `• *Detalles:* ${detallesTexto}%0A%0A` +
      `¡Quedo atento a su respuesta para que lo charlemos! Gracias.`
    );
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${targetNumber}?text=${buildTextMessage()}`;
    window.open(url, "_blank");
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const plainText = buildTextMessage().replace(/\*/g, "");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=Consulta%20Consignación%20-%20${form.nombre}&body=${plainText}`;
    window.open(url, "_blank");
  };

  return (
    <section style={{ backgroundColor: COLORS.bg }} className="min-h-screen py-20 md:py-32 px-4 sm:px-8 md:px-16 w-full text-white">      
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          style={{ fontFamily: "Inter, sans-serif", color: COLORS.muted }}
          className="mb-12 flex items-center gap-2 text-sm tracking-wider uppercase hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver al inicio
        </button>

        <div className="mb-12">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 400, letterSpacing: "0.3em", color: COLORS.muted }} className="uppercase mb-3">
            Servicios consignaciones
          </p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 600, color: COLORS.text }} className="leading-tight">
            Ofrecé tu propiedad
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif" }} className="text-base font-light text-neutral-400 mt-4 max-w-xl leading-relaxed">
            Completá los datos básicos de tu inmueble. Al finalizar, elegí el canal de tu preferencia para enviarnos la ficha técnica de forma instantánea.
          </p>
        </div>

        <form className="flex flex-col gap-8 border-t border-white/5 pt-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase">Nombre completo</label>
              <input
                type="text"
                placeholder="Ej: Sofía Cabanillas"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-white transition-colors rounded-none text-white font-light text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase">Teléfono / Email de contacto</label>
              <input
                type="text"
                placeholder="Ej: 351XXXXXXX"
                value={form.contacto}
                onChange={(e) => setForm({ ...form, contacto: e.target.value })}
                className="border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-white transition-colors rounded-none text-white font-light text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase">Tipo de propiedad</label>
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                style={{ backgroundColor: COLORS.bg }}
                className="border-b border-white/20 bg-transparent py-3.5 focus:outline-none focus:border-white transition-colors rounded-none text-white font-light text-base cursor-pointer"
              >
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Dúplex">Dúplex</option>
                <option value="Terreno / Lote">Terreno / Lote</option>
                <option value="Local Comercial">Local Comercial</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase">Operación deseada</label>
              <select
                value={form.operacion}
                onChange={(e) => setForm({ ...form, operacion: e.target.value })}
                style={{ backgroundColor: COLORS.bg }}
                className="border-b border-white/20 bg-transparent py-3.5 focus:outline-none focus:border-white transition-colors rounded-none text-white font-light text-base cursor-pointer"
              >
                <option value="Venta">Poner en Venta</option>
                <option value="Alquiler">Poner en Alquiler</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase">Ubicación / Barrio</label>
            <input
              type="text"
              placeholder="Ej: Cerro de las Rosas, Córdoba"
              value={form.ubicacion}
              onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
              className="border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-white transition-colors rounded-none text-white font-light text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", color: COLORS.muted }} className="uppercase">Características y metros (Opcional)</label>
            <textarea
              rows={4}
              placeholder="Ej: 3 dormitorios, 2 baños, patio con asador, aprox 150m2 cubiertos..."
              value={form.detalles}
              onChange={(e) => setForm({ ...form, detalles: e.target.value })}
              className="border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-white transition-colors resize-none rounded-none text-white font-light text-base"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
            <motion.button
              type="button"
              onClick={handleWhatsAppSend}
              disabled={!form.nombre || !form.contacto || !form.ubicacion}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`flex-1 py-4 text-sm tracking-wider uppercase font-medium flex items-center justify-center gap-2 border transition-colors ${
                !form.nombre || !form.contacto || !form.ubicacion
                  ? "opacity-20 cursor-not-allowed border-white/10"
                  : "bg-white text-black border-white hover:bg-neutral-200"
              }`}
            >
              Enviar por WhatsApp
            </motion.button>

            <motion.button
              type="button"
              onClick={handleEmailSend}
              disabled={!form.nombre || !form.contacto || !form.ubicacion}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`flex-1 py-4 text-sm tracking-wider uppercase font-medium flex items-center justify-center gap-2 border transition-colors ${
                !form.nombre || !form.contacto || !form.ubicacion
                  ? "opacity-20 cursor-not-allowed border-white/10"
                  : "bg-transparent text-white border-white/20 hover:bg-white hover:text-black hover:border-white"
              }`}
            >
              Enviar por Correo
            </motion.button>
          </div>

        </form>
      </div>
    </section>
  );
}