import "./stylesBio.css";

// Importar imágenes correctamente con Vite
import bio1 from "../../assets/img/bio1.jpg";
import bio2 from "../../assets/img/bio2.jpg";
import bio3 from "../../assets/img/bio3.jpg";

export default function Bio() {
  return (
    <section className="bio">
      <h1>__</h1>
      <h1>Vanina Soto</h1>
      <h1>Cineasta - Productora Audiovisual</h1>

      <div className="bio-grid">
        {/* Primera Tarjeta */}
        <div className="bio-item">
          <img src={bio1} alt="Cineasta en rodaje" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
        </div>

        {/* Segunda Tarjeta */}
        <div className="bio-item">
          <p>Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat.</p>
          <img src={bio3} alt="Producción de película" />
        </div>

        {/* Tercera Tarjeta */}
        <div className="bio-item">
          <img src={bio2} alt="Edición de video" />
          <p>Vestibulum dapibus nunc ac augue. Curabitur at lacus ac velit ornare lobortis.</p>
        </div>
      </div>
    </section>
  );
}
