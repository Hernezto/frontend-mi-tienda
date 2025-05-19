import { Link } from "react-router";

const Header = ({ logged = null }: { logged: string | null }) => {
  if (logged === null) {
    return (
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
              <Link replace to="/query">
                Soporte y Ayuda
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <Link replace to="#">
            MiTienda
          </Link>
        </div>
        <div className="auth-links" style={{ display: "flex", gap: "10px" }}>
          <p>{logged ? `Bienvenido, ${logged}` : "Error"}</p>/
          <button
            style={{
              all: "unset",
              userSelect: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("Authorization"), location.reload();
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Busca productos, marcas o tiendas..." />
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
  );
};

export default Header;
