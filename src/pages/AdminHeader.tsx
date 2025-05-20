import { Link } from "react-router";

const AdminHeader = () => {
  return (
    <header className="bg-walmart-blue text-white shadow-md">
      {/* Barra Superior */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="logo text-2xl font-bold">
          <Link replace to="/" className="hover:text-walmart-yellow">
            MiTienda
          </Link>
        </div>

        {/* Enlaces de Autenticación */}
        <div className="flex items-center gap-4">
          <button
            className="text-sm font-semibold hover:text-walmart-yellow"
            onClick={() => {
              localStorage.removeItem("Authorization");
              location.reload();
            }}
          >
            Cerrar Sesión
          </button>
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
    </header>
  );
};

export default AdminHeader;
