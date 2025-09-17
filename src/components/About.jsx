import cvFile from "../assets/docs/CV.pdf";
import devIllustration from "../assets/img/profile.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Texto */}
        <div className="about-text">
          <h2 className="about-title">Sobre mí</h2>
          <p className="about-subtitle">Conoce un poco de mi trayectoria</p>

          <p>
            Hola, soy Astrid Yovera, egresada de <span className="highlight">Computación e Informática </span> 
            y actualmente curso mi titulación para obtener el grado de Técnica Profesional. 
            Cuento con el título de Auxiliar Técnico y me apasiona{" "}
            <span className="highlight">aprender nuevas herramientas </span> 
            y aplicarlas en proyectos reales.
          </p>

          <p>
            Mi enfoque está en <span className="highlight">crear soluciones tecnológicas </span> 
            que combinen innovación, diseño y estrategia para generar valor en las organizaciones.
          </p>

          <p>
            Disfruto trabajar en equipo, compartir conocimientos y enfrentar retos que impulsen 
            mi crecimiento profesional y personal.
          </p>

          {/* Aptitudes */}
          <div className="aptitudes">
            <h3 className="aptitudes-title">Aptitudes Personales</h3>
            <ul>
              <li>✨ Creativa</li>
              <li>🤝 Responsable</li>
              <li>📌 Disciplinada</li>
              <li>👥 Trabajo en equipo</li>
              <li>💙 Empática</li>
              <li>🌟 Positiva</li>
            </ul>
          </div>

          <a
            href={cvFile}
            download="CV_AstridYoveraTinoco.pdf"
            className="cv-button"
          >
            📄 Descargar CV
          </a>
        </div>

        {/* Imagen con flecha */}
        <div className="about-img">
          <img src={devIllustration} alt="Ilustración" className="profile-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
