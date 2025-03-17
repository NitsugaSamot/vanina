import "./stylesTrabajos.css";

import trabajo1 from "../../assets/img/trabajo1.jpg";
import trabajo2 from "../../assets/img/trabajo2.jpg";
import trabajo3 from "../../assets/img/trabajo3.jpg";

const trabajos = [
  { img: trabajo1, title: "Cortometraje XYZ", desc: "Rodaje en Buenos Aires 2023" },
  { img: trabajo2, title: "Documental ABC", desc: "Producción y edición" },
  { img: trabajo3, title: "Serie Web LMN", desc: "Dirección de fotografía" }
];

export default function Trabajos() {
  return (
    <section className="works">
      <h1>...</h1>
      <h1>...</h1>
      <h1>Trabajos</h1>
      <div className="works-container">
        {trabajos.map((trabajo, index) => (
          <div key={index} className="work-item">
            <img src={trabajo.img} alt={trabajo.title} />
            <div className="work-info">
              <h2>{trabajo.title}</h2>
              <p>{trabajo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
