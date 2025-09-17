function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Habilidades Técnicas</h2>

      <div className="skills-grid">
        {/* Lenguajes */}
        <div className="skill-card">
          <div className="skill-header">
            <i className="fas fa-code skill-icon"></i>
            <h3 className="skill-title">
              <span className="highlight underline-pink">Lenguajes</span> de Programación
            </h3>
          </div>
          <div className="skill-code">
            <span className="tag">&lt;h3&gt;</span>
            <p className="skill-text">
              Java y JavaScript para el desarrollo de aplicaciones robustas,
              orientadas a objetos y multiplataforma.
            </p>
            <span className="tag">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <div className="skill-header">
            <i className="fas fa-laptop-code skill-icon"></i>
            <h3 className="skill-title">
              <span className="highlight underline-blue">Frontend</span>
            </h3>
          </div>
          <div className="skill-code">
            <span className="tag">&lt;h3&gt;</span>
            <p className="skill-text">
              HTML5, CSS3, React, Angular y Bootstrap para crear interfaces modernas,
              responsivas y centradas en la experiencia de usuario.
            </p>
            <span className="tag">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Backend & API */}
        <div className="skill-card">
          <div className="skill-header">
            <i className="fas fa-server skill-icon"></i>
            <h3 className="skill-title">
              <span className="highlight underline-orange">Backend</span> & API
            </h3>
          </div>
          <div className="skill-code">
            <span className="tag">&lt;h3&gt;</span>
            <p className="skill-text">
              Node.js, diseño de APIs REST y pruebas con Postman para
              asegurar integraciones seguras y escalables.
            </p>
            <span className="tag">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Bases de Datos */}
        <div className="skill-card">
          <div className="skill-header">
            <i className="fas fa-database skill-icon"></i>
            <h3 className="skill-title">
              <span className="highlight underline-green">Bases</span> de Datos
            </h3>
          </div>
          <div className="skill-code">
            <span className="tag">&lt;h3&gt;</span>
            <p className="skill-text">
              SQL y MySQL para modelado, consultas avanzadas, optimización
              de queries y administración de datos.
            </p>
            <span className="tag">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Herramientas */}
        <div className="skill-card">
          <div className="skill-header">
            <i className="fas fa-code-branch skill-icon"></i>
            <h3 className="skill-title">
              <span className="highlight underline-purple">Herramientas</span>
            </h3>
          </div>
          <div className="skill-code">
            <span className="tag">&lt;h3&gt;</span>
            <p className="skill-text">
              Git para control de versiones, colaboración en equipo y gestión eficiente de proyectos.
            </p>
            <p className="skill-text">
              Figma para diseño de interfaces modernas, prototipado rápido y trabajo colaborativo.
            </p>
            <span className="tag">&lt;/h3&gt;</span>
          </div>
        </div>

        {/* Metodologías */}
        <div className="skill-card">
          <div className="skill-header">
            <i className="fas fa-users skill-icon"></i>
            <h3 className="skill-title">
              <span className="highlight underline-yellow">Metodologías</span> Ágiles
            </h3>
          </div>
          <div className="skill-code">
            <span className="tag">&lt;h3&gt;</span>
            <p className="skill-text">
              Scrum para organizar equipos, priorizar entregables y
              mejorar continuamente en ciclos iterativos.
            </p>
            <span className="tag">&lt;/h3&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
