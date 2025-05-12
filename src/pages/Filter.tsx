import { Link } from "react-router";
import "../CSS/formularios.css";

const Filter = () => {
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
      <div id="home-button-container"></div>
      <div className="form-container">
        <h2>Buscar Productos</h2>
        <form id="searchForm">
          <div className="input-group">
            <label htmlFor="palabraClave">Palabra Clave</label>
            <input type="text" id="palabraClave" placeholder="Ej. Smartphone" />
          </div>

          <div className="input-group">
            <label htmlFor="rangoPrecio">Rango de Precio</label>
            <input
              type="number"
              id="precioMin"
              placeholder="Mínimo $"
              min="0"
            />
            <input
              type="number"
              id="precioMax"
              placeholder="Máximo $"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria">
              <option value="">Todas</option>
              <option value="juguetes">Juguetes</option>
              <option value="electronica">Electrónica</option>
              <option value="ropa">Ropa</option>
              <option value="hogar">Hogar</option>
            </select>
          </div>

          <button type="submit" className="btn">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};

export default Filter;
