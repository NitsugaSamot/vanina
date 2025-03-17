import "./styles.css";

interface HeroSectionProps {
  setActiveSection: (section: "features" | "bio" | "trabajos" | "contacto") => void;
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  return (
    <nav className="hero-section">
      <h1>🎬</h1>
      <ul>
        <li onClick={() => setActiveSection("features")}>Inicio</li>
        <li onClick={() => setActiveSection("bio")}>Bio</li>
        <li onClick={() => setActiveSection("trabajos")}>Trabajos</li>
        <li onClick={() => setActiveSection("contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}

