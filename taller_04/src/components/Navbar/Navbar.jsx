import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" id="logo-link">
          ReactAcademy
        </NavLink>
        <ul className="nav-links" id="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              id="nav-inicio"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cursos"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              id="nav-cursos"
            >
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              id="nav-nosotros"
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--login active" : "nav-link nav-link--login"
              }
              id="nav-login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
