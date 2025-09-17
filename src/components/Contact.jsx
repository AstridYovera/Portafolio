function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h3 className="contact-title">Contacto</h3>
        <p className="contact-subtitle">
          ¿Quieres colaborar o tienes alguna consulta? ¡Estoy disponible en estas plataformas!
        </p>

        <div className="contact-grid">
          {/* Correo */}
          <a
            href="mailto:ayoveratinoco@gmail.com"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope contact-icon"></i>
            <h4>Correo</h4>
            <p>ayoveratinoco@gmail.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AstridYovera"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github contact-icon"></i>
            <h4>GitHub</h4>
            <p>@AstridYovera</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/astridyoveratinoco"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin contact-icon"></i>
            <h4>LinkedIn</h4>
            <p>Astrid Yovera Tinoco</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
