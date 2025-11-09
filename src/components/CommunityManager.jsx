import bybLogo from "../assets/img/bybLogo.png";

function CommunityManager() {
  const cm = [
    {
      title: "Fundadora y gestora digital de mi propia marca. Desarrollo contenido visual, gestiono redes sociales y diseño campañas promocionales.",
      description:
        "Gestiono redes sociales, diseño contenido visual y desarrollo estrategias digitales para marcas personales y comerciales. Aquí presento dos casos que reflejan mi capacidad para construir comunidades activas y marcas coherentes.",
      wspChannel: "https://whatsapp.com/channel/0029VbBNl47KLaHuKPyxsJ2m",
      demo: "",
      tech: ["Canva", "Figma", "Instagram", "Copywriting", "Métricas"],
      image: bybLogo,
    }
  ];

  return (
    <section id="cm" className="projects-section">
      <div className="projects-header">
        <h3 className="projects-heading">
         <span className="highlight">Community Manager</span>
        </h3>
      </div>

      <div className="projects-grid">
        {cm.map((cm, idx) => (
          <div key={idx} className="project-card">
            <div className="project-img-container">
              <img src={cm.image} alt={cm.title} className="project-img" />
            </div>
            <div className="project-content">
              <h4 className="project-name">{cm.title}</h4>
              <p className="project-desc">{cm.description}</p>

              <div className="project-tags">
                {cm.tech.map((t, i) => (
                  <span key={i} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={cm.wspChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <i class="fa-brands fa-square-whatsapp"></i>Canal de WhatsApp
                </a>

                {/* Solo mostrar si hay demo */}
                {cm.demo && (
                  <a
                    href={cm.demo}
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

export default CommunityManager;
