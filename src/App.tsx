import { Link } from "react-router";
import "./CSS/index.css";
import Feed from "./components/Feed";
function App() {
  return (
    <>
      <header>
        <div className="top-bar">
          <div className="logo">
            <Link replace to="#">
              MiTienda
            </Link>
          </div>
          <div className="auth-links">
            <Link replace to="/login">
              Iniciar sesión
            </Link>{" "}
            /{" "}
            <Link replace to="/register">
              Registrarse
            </Link>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Busca productos, marcas o tiendas..."
          />
          <button>Buscar</button>
        </div>
        <div className="categories-nav">
          <ul>
            <li>
              <Link replace to="/filter">
                Busqueda Avanzada
              </Link>
            </li>
            <li>
              <Link replace to="/post">
                Publicar Producto
              </Link>
            </li>
            <li>
              <Link replace to="/query">
                Soporte y Ayuda
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="welcome-banner">
          <h1>Bienvenido a MiTienda</h1>
          <p>
            ¡Descubre una amplia variedad de productos a los mejores precios!
          </p>
          <Link replace to="/productlist" className="cta-button">
            Explorar Productos
          </Link>
        </section>

        <section className="featured-categories">
          <h2>Categorías</h2>
          <div className="category-grid">
            <div className="category-item">
              <img src="/assets/img/elec.jpg" alt="Categoría 1" />
              <Link replace to="#">
                Electrónica
              </Link>
            </div>
            <div className="category-item">
              <img src="/assets/img/ropa.jpg" alt="Categoría 2" />
              <Link replace to="#">
                Moda
              </Link>
            </div>
            <div className="category-item">
              <img src="/assets/img/hogar.jpg" alt="Categoría 3" />
              <Link replace to="#">
                Hogar y Jardín
              </Link>
            </div>
            <div className="category-item">
              <img src="/assets/img/jug.jpg" alt="Categoría 4" />
              <Link replace to="#">
                Juguetes
              </Link>
            </div>
          </div>
        </section>
        <div>
          <h2>Últimos Productos</h2>
          <p>Descubre los productos más recientes en nuestra tienda.</p>
          <Feed />
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Mi Tienda Online. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
