import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <main className="notfound-page">
        <div className="notfound-content">
          <span className="notfound-code">404</span>
          <h1 className="notfound-title">Página no encontrada</h1>
          <p className="notfound-text">
            La URL que buscas no existe. Puede que la hayas escrito mal o que
            la página haya sido movida.
          </p>
          <Link to="/" className="btn-home" id="btn-home">
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
