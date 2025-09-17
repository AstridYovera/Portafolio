import banner from "../assets/img/banner.png";

function Projects() {
  const project = {
    title: "Sistema de Gestión de Reservas de Salas (WARA)",
    description:
      "Proyecto desarrollado en C# .NET Core con SQL Server y APIs REST. Incluye autenticación con JWT, reservas con validaciones y notificaciones por correo. Diseñado para optimizar la gestión y disponibilidad de salas de forma eficiente.",
    link: "https://github.com/AstridYovera/EvaluacionTecnica2025_WaraSolution",
    tech: ["C#", ".NET Core", "SQL Server", "APIs REST", "JWT", "Notificaciones"],
  };

  return (
    <section id="projects" className="projects-section">
       <div className="projects-header">
      <i className="fas fa-code fa-3x projects-icon"></i>
      <h3 className="projects-heading">
        <span>Mis</span>
        <br />
        <span className="highlight">Proyectos</span>
      </h3>

        <div className="project-card">
          {/* Imagen con overlay */}
          <div className="project-img-container">
            <img src={banner} alt={project.title} className="project-img" />

            <div className="project-overlay">
              <h4 className="project-name">{project.title}</h4>
              <p className="project-desc">{project.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <i className="fab fa-github"></i> Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
