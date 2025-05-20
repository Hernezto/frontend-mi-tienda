import { Link } from "react-router";

const User = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-walmart-blue text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="logo text-2xl font-bold">
            <Link replace to="/user" className="hover:text-walmart-yellow">
              MiTienda
            </Link>
          </div>

          {/* Icono de Carrito */}
          <div
            className="cart-icon text-2xl cursor-pointer hover:text-walmart-yellow"
            onClick={() => {
              // Aquí puedes agregar la lógica para ir al carrito
              console.log("Ir al carrito");
            }}
          >
            🛒
          </div>
        </div>

        {/* Barra de Búsqueda */}
        <div className="bg-white py-2">
          <div className="container mx-auto flex items-center gap-4">
            <input
              type="text"
              placeholder="Busca productos, marcas o tiendas..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-walmart-blue"
            />
            <button className="bg-walmart-yellow text-walmart-blue font-semibold px-4 py-2 rounded-md hover:bg-yellow-500">
              Buscar
            </button>
          </div>
        </div>

        {/* Navegación de Categorías */}
        <nav className="bg-walmart-yellow py-2">
          <div className="container mx-auto">
            <ul className="flex items-center justify-center gap-6 text-sm font-semibold text-walmart-blue">
              <li>
                <Link
                  replace
                  to="/electronics"
                  className="hover:text-blue-700 hover:underline"
                >
                  Electrónica
                </Link>
              </li>
              <li>
                <Link
                  replace
                  to="/fashion"
                  className="hover:text-blue-700 hover:underline"
                >
                  Moda
                </Link>
              </li>
              <li>
                <Link
                  replace
                  to="/home-garden"
                  className="hover:text-blue-700 hover:underline"
                >
                  Hogar y Jardín
                </Link>
              </li>
              <li>
                <Link
                  replace
                  to="/toys"
                  className="hover:text-blue-700 hover:underline"
                >
                  Juguetes
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default User;
