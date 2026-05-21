import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen bg-white w-full overflow-x-hidden selection:bg-neutral-200 selection:text-black">
      <Navbar />
      <Hero />
      <Properties />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}