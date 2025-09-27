import wara from "../assets/img/wara.png";
import byb from "../assets/img/byb.png";

function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión de Reservas de Salas (WARA)",
      description:
        "Proyecto desarrollado en C# .NET Core con SQL Server y APIs REST. Incluye autenticación con JWT, reservas con validaciones y notificaciones por correo. Diseñado para optimizar la gestión y disponibilidad de salas de forma eficiente.",
      link: "https://github.com/AstridYovera/EvaluacionTecnica2025_WaraSolution",
      demo: "",
      tech: ["C#", ".NET Core", "SQL Server", "APIs REST", "JWT", "Notificaciones"],
      image: wara,
    },
    {
      title: "BYB - Catálogo & Libro de Reclamaciones",
      description:
        "Aplicación web demo para la venta de ropa, con catálogo, contacto y libro de reclamaciones funcional. Desarrollada en Next.js con Supabase y TailwindCSS. Actualmente las compras se realizan por WhatsApp.",
      link: "https://github.com/AstridYovera/ByB",
      demo: "https://byb-oficial.vercel.app",
      tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "EmailJS"],
      image: byb,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <i className="fas fa-code fa-3x projects-icon"></i>
        <h3 className="projects-heading">
          <span>Mis</span> <span className="highlight">Proyectos</span>
        </h3>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-img-container">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            <div className="project-content">
              <h4 className="project-name">{project.title}</h4>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                {/* Solo mostrar si hay demo */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn demo-btn"
                  >
                    <i className="fas fa-external-link-alt"></i> Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
