import { Link } from "react-router";
import "./CSS/index.css";
import Feed from "./components/Feed";
import { useAuth } from "./hooks/useAuth";
import PrettyText from "./components/PrettyText";
import Header from "./components/Header";
function App() {
  const { isValid, isLoading, error, token } = useAuth();
  const user = token ? token.toString().split("@")[0] : null;
  console.log(user);
  if (isLoading) {
    return <PrettyText>Loading...</PrettyText>;
  }
  if (error) {
    return <PrettyText>Error: {error.message}</PrettyText>;
  }
  return (
    <>
      {!isValid ? <Header logged={null} /> : <Header logged={user} />}
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
