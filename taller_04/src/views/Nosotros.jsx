import Counter from "../components/Counter/Counter";
import Footer from "../components/Footer/Footer";
import "./Nosotros.css";

function Nosotros() {
  return (
    <>
      <main className="nosotros-page">
        <section className="counter-section" id="nosotros">
          <div className="section-container">
            <div className="section-header">
              <h2 className="counter-title">
                ¿Cuántos estudiantes van a inscribirse?
              </h2>
              <p className="counter-subtitle">
                Usa los botones para ajustar el número
              </p>
            </div>
            <Counter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Nosotros;
