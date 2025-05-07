import { Link } from "react-router";
import "../CSS/formularios.css";

const Post = () => {
  return (
    <>
      {" "}
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
        <h2>Publicar un Producto</h2>
        <form id="productForm">
          <div className="input-group">
            <label htmlFor="nombre">Nombre del Producto</label>
            <input type="text" id="nombre" required />
          </div>

          <div className="input-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" rows={3} required></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="precio">Precio ($)</label>
            <input type="number" id="precio" min="0" required />
          </div>

          <div className="input-group">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" required>
              <option value="">Seleccione...</option>
              <option value="juguetes">Juguetes</option>
              <option value="electronica">Electrónica</option>
              <option value="ropa">Ropa</option>
              <option value="hogar">Hogar</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="imagen">Imagen del Producto</label>
            <input type="file" id="imagen" accept="image/*" />
          </div>

          <button type="submit" className="btn">
            Publicar
          </button>
        </form>
      </div>
      <script src="../JS/formularios.js"></script>
    </>
  );
};

export default Post;
