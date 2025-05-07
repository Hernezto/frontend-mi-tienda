import { Link } from "react-router";
import "../CSS/register.css";

const Register = () => {
  return (
    <>
      <Link replace to="/" className="home-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"></path>
          <path d="M9 22V12H15V22"></path>
        </svg>
        Inicio
      </Link>
      <div className="login-container">
        <div className="login-box">
          <h2>Crear Cuenta</h2>
          <form id="registerForm">
            <div className="input-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                placeholder="Juan Pérez"
                required
              />
              <span className="error-message">Ingrese su nombre completo.</span>
            </div>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="ejemplo@correo.com"
                required
              />
              <span className="error-message">Ingrese un correo válido.</span>
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
                <button type="button" id="togglePassword">
                  👁️
                </button>
              </div>
              <span className="error-message">
                La contraseña debe tener al menos 6 caracteres.
              </span>
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <div className="password-container">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  required
                />
                <button type="button" id="toggleConfirmPassword">
                  👁️
                </button>
              </div>
              <span className="error-message">
                Las contraseñas no coinciden.
              </span>
            </div>
            <button type="submit" className="btn">
              Registrarse
            </button>
            <p className="register-link">
              ¿Ya tienes cuenta?{" "}
              <Link replace to="/login">
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </div>

      <script src="../JS/register.js"></script>
    </>
  );
};

export default Register;
