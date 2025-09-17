import profile from "../assets/img/profile.png";

function Hero() {
  return (
    <section className="hero">
      {/* Íconos flotantes */}
      <div className="hero-icons">
        <i className="fab fa-html5 floating-icon html"></i>
        <i className="fab fa-css3-alt floating-icon css"></i>
        <i className="fab fa-js floating-icon js"></i>
        <i className="fab fa-react floating-icon react"></i>
        <i className="fab fa-node floating-icon node"></i>
        <i className="fas fa-database floating-icon db"></i>
        <i className="fab fa-git-alt floating-icon git"></i>
        <i className="fab fa-github floating-icon github"></i>
        <i className="fab fa-figma floating-icon figma"></i>
        <i className="fas fa-laptop-code floating-icon code"></i>
      </div>


      {/* Imagen */}
      <div className="hero-img">
        <img src={profile} alt="Astrid" />
      </div>

      {/* Texto */}
      <div className="hero-text">
        <h2>
          ¡Hola!
        </h2>
        <h3>
          <span className="hero-name"> Soy una desarrolladora en formación, con enfoque en Frontend y curiosidad por el BackEnd.</span>
        </h3>
        <p>
          Egresada de Computación e Informática | Técnica en formación |
          Apasionada por el desarrollo web
        </p>
        <a href="#projects" className="btn">
          Ver mis proyectos <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
