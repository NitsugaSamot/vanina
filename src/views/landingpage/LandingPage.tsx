import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../../components/landingpage/HeroSection";
import Features from "../../components/landingpage/Features";
import Bio from "../../components/bio/Bio";
import Trabajos from "../../components/trabajos/Trabajos";
import Contacto from "../../components/contacto/Contacto"; // Nueva sección de Contacto

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<"features" | "bio" | "trabajos" | "contacto">("features");

  return (
    <div>
      <HeroSection setActiveSection={setActiveSection} />

      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {activeSection === "features" && <Features />}
        {activeSection === "bio" && <Bio />}
        {activeSection === "trabajos" && <Trabajos />}
        {activeSection === "contacto" && <Contacto />}
      </motion.div>
    </div>
  );
}


