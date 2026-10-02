import { useState } from "react";
import Footer from "../components/Footer/Footer";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = email.trim() === "" || password.trim() === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <main className="login-page">
        <section className="login-section">
          <div className="login-card" id="login-card">
            <div className="login-header">
              <span className="login-logo">ReactAcademy</span>
              <h1 className="login-title">Iniciar sesión</h1>
              <p className="login-microcopy">
                Este formulario no valida credenciales reales — es solo interfaz.
              </p>
            </div>

            <form
              className="login-form"
              id="login-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="input-email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="input-email"
                  className="form-input"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitted}
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="input-password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="input-password"
                  className="form-input"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={submitted}
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                id="btn-login"
                className="btn-login"
                disabled={isEmpty || submitted}
              >
                {submitted ? "✓ Sesión iniciada" : "Entrar"}
              </button>

              {submitted && (
                <p className="login-success" id="login-success">
                  Formulario enviado. No hay backend, pero se entiende la idea.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;
