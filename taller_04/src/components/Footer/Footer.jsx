import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer-text">
        &copy; 2026{" "}
        <Link to="/" className="footer-link" id="footer-link">
          ReactAcademy
        </Link>
        . Taller 04 &mdash; React Fundamentos.
      </p>
    </footer>
  );
}

export default Footer;
