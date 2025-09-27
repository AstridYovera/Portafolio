import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo */}
        <h1 className="logo">&lt;Mi Portafolio /&gt;</h1>

        {/* Botón hamburguesa */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Lista de navegación */}
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
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
