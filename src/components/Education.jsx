function Trajectory() {
  const experiences = [
    {
      role: "Instituto Superior Técnico Cibertec",
      company: "Estudios",
      date: "2020 - 2024",
      description:
        "Egresada de la carrera de Computación e Informática. Beca Mi Vocación Técnica.",
      tags: ["Cibertec", "Tecnología"],
    },
    {
      role: "Talento Guía",
      company: "PRONABEC - Talentos en Acción",
      date: "2023",
      description:
        "Mentoría y acompañamiento a estudiantes en su desarrollo académico y personal.",
      tags: ["Mentoría", "Liderazgo"],
    },
    {
      role: "Prácticas en Marketing",
      company: "Mark It Latam",
      date: "2023 - 2024",
      description:
        "Creación y ejecución de estrategias de marketing digital, gestión de contenido en redes sociales.",
      tags: ["Marketing", "Redes Sociales"],
    },
    {
      role: "Prácticas en TI",
      company: "Mark It Latam",
      date: "2023 - 2024",
      description:
        "Soporte técnico en implementación y mantenimiento de soluciones tecnológicas.",
      tags: ["Soporte Técnico", "TI"],
    },
    {
      role: "Responsable de Convenios",
      company: "Comunidad La Teoría en la Práctica",
      date: "2024",
      description:
        "Gestión y establecimiento de convenios estratégicos para fortalecer la comunidad.",
      tags: ["Voluntariado", "Gestión"],
    },
    {
      role: "Atención al Cliente y Despacho",
      company: "Lumbreras",
      date: "2025",
      description:
        "Atención en feria escolar, asesoría en compra de material educativo y gestión de despacho.",
      tags: ["Atención al Cliente"],
    },
    {
      role: "Gestión de Redes y Marca Personal",
      company: "B&B",
      date: "2025",
      description:
        "Gestiono redes sociales, diseño contenido visual y desarrollo estrategias digitales, además de ser fundadora de mi propia marca.",
      tags: ["Community Manager y Fundadora"],
    },
  ];

  return (
    <section id="trajectory" className="timeline-horizontal-section">
      <h2 className="trajectory-title">Trayectoria</h2>

      <div className="timeline-horizontal">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            {/* Punto + línea */}
            <div className="timeline-dot"></div>
            {idx < experiences.length - 1 && <div className="timeline-line"></div>}

            {/* Tarjeta */}
            <div className="timeline-card">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">@ {exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trajectory;
