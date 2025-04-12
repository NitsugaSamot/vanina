import "./stylesBio.css";

// Importar imágenes correctamente con Vite
import bio1 from "../../assets/img/bio1.jpg";
import bio2 from "../../assets/img/bio2.jpg";
import bio3 from "../../assets/img/bio3.jpg";

export default function Bio() {
  return (
    <section className="bio">
      <h1 className="name-title">Vanina Soto</h1>
      <h2 className="subtitle">Productora y Directora Audiovisual | Fotógrafa | Sonidista | Docente | Actriz</h2>
      <p className="location"> Colonia Caroya, Córdoba</p>

      {/* Bloque 1 */}
      <div className="bio-block">
        <div className="bio-image left">
          <img src={bio1} alt="Vanina en rodaje" />
        </div>
        <div className="bio-text">
          <h3>Formación y Trayectoria</h3>
          <p>
            Licenciada en Cine por la Facultad de Artes de la UNC (en proceso de tesis). También trabaja en su tesis de Teatro. Técnica en Diseño Gráfico.
          </p>
          <p>
            Ha trabajado como directora, guionista, sonidista y montajista en proyectos documentales y de ficción. En 2018 co-dirigió el cortometraje "48". En 2020 fue convocada por Mujeres Músicas Folklóricas para un video del festival. En 2021 se desempeñó como sonidista en la serie web "Guardianas del Territorio".
          </p>
        </div>
      </div>

      {/* Bloque 2 */}
      <div className="bio-block">
        <div className="bio-text">
          <h3>Docencia y Comunidad</h3>
          <p>
            Desde 2021 es docente de Realización Audiovisual en las Universidades Populares de Colonia Caroya y Río Ceballos, trabajando con jóvenes y personas con discapacidad. También fue tallerista en Casa del Árbol (Río Ceballos) y profesora en nivel medio en materias como Producción Audiovisual, Producción Multimedia, Lenguaje Multimedia y Teatro.
          </p>
          <p>
            Coordina talleres de teatro y fotografía para adultos mayores, además de impartir talleres audiovisuales para jóvenes con discapacidad.
          </p>
        </div>
        <div className="bio-image right">
          <img src={bio3} alt="Vanina enseñando" />
        </div>
      </div>

      {/* Bloque 3 */}
      <div className="bio-block">
        <div className="bio-image left">
          <img src={bio2} alt="Fotografía comunitaria" />
        </div>
        <div className="bio-text">
          <h3>Fotografía y Producción Cultural</h3>
          <p>
            Ha trabajado cubriendo eventos deportivos de equipos femeninos y disidentes. En 2023 fue productora audiovisual y fotógrafa en la Feria Onda Circular. También colaboró dos años seguidos en el área audiovisual de Tricota Cultural.
          </p>
          <p>
            Actualmente está abriendo camino con su propia productora audiovisual, escribiendo para teatro y cine.
          </p>
        </div>
      </div>

      {/* Filmografía */}
      <div className="filmography">
        <h2>Filmografía Destacada</h2>
        <ul>
          <li><strong>Jofiel</strong> (Serie ficcional, 2017-2018) – Asistente de Cámara, Sonido</li>
          <li><strong>SerAmor</strong> (Documental, 2018) – Idea, Guion, Montaje, Sonido</li>
          <li><strong>Agentes Químicos</strong> (Cortometraje, 2019) – Idea, Guion</li>
          <li><strong>Folklóricas</strong> (Videoclips musicales, 2020) – Cámara</li>
          <li><strong>Arrastrándonos por el cielo abierto</strong> (2020) – Sonido</li>
          <li><strong>Cómo nos vemos</strong> (Cortometraje, 2021) – Sonido</li>
          <li><strong>Guardianas del Territorio: Mujer, Tierra y Territorio</strong> (Serie web, 2021) – Sonido Directo</li>
          <li><strong>Diario de Cecilia</strong> (Cortometraje, 2023) – Posproducción de sonido</li>
        </ul>
      </div>

      <div className="bio-message">
        <p>
          Con una mirada artística y social, su trabajo busca visibilizar diversas realidades a través del cine y la fotografía, generando espacios de reflexión y transformación.
        </p>
      </div>
    </section>
  );
}


// import "./stylesBio.css";

// // Importar imágenes correctamente con Vite
// import bio1 from "../../assets/img/bio1.jpg";
// import bio2 from "../../assets/img/bio2.jpg";
// import bio3 from "../../assets/img/bio3.jpg";

// export default function Bio() {
//   return (
//     <section className="bio">
//       <h1>__</h1>
//       <h1>Vanina Soto</h1>
//       <h1>Cineasta - Productora Audiovisual</h1>

//       <div className="bio-grid">
//         {/* Primera Tarjeta */}
//         <div className="bio-item">
//           <img src={bio1} alt="Cineasta en rodaje" />
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
//         </div>

//         {/* Segunda Tarjeta */}
//         <div className="bio-item">
//           <p>Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat.</p>
//           <img src={bio3} alt="Producción de película" />
//         </div>

//         {/* Tercera Tarjeta */}
//         <div className="bio-item">
//           <img src={bio2} alt="Edición de video" />
//           <p>Vestibulum dapibus nunc ac augue. Curabitur at lacus ac velit ornare lobortis.</p>
//         </div>
//       </div>
//     </section>
//   );
// }
