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
    </header>
  );
};

export default AdminHeader;
