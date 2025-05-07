import { Link } from "react-router";
import "../CSS/formularios.css";

const Query = () => {
  return (
    <>
      <Link to="/" className="home-button">
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
      <div id="home-button-container"></div>

      <div className="form-container">
        <h2>Contáctanos</h2>
        <form id="contactForm">
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" rows={4} required></textarea>
          </div>

          <button type="submit" className="btn">
            Enviar
          </button>
        </form>
      </div>

      <script src="../JS/formularios.js"></script>
    </>
  );
};

export default Query;
