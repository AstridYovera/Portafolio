function Header() {
  return (
    <header>
      <nav>
        <h1>&lt;Mi Portafolio /&gt;</h1>
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">Sobre mí</a></li>
          <li><a href="#projects" className="nav-link">Proyectos</a></li>
          <li><a href="#skills" className="nav-link">Habilidades</a></li>
          <li><a href="#trajectory" className="nav-link">Trayectoria</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
