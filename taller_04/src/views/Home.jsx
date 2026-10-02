import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <h1 className="hero-title">
              Aprende <span className="highlight">React</span> desde cero
            </h1>
            <p className="hero-subtitle">
              Domina la librería más popular del frontend con proyectos
              <br />
              prácticos y reales.
            </p>
            <Link to="/cursos" className="btn-primary" id="btn-ver-cursos">
              Ver Cursos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
