import { Link } from "react-router";

const AdminMain = () => {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Bienvenida */}
      <section className="bg-walmart-blue text-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold">Bienvenido, Administrador</h1>
        <p className="text-lg mt-2">
          Gestiona tu tienda y mantén todo en orden desde este panel.
        </p>
      </section>

      {/* Acciones Rápidas */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-walmart-blue mb-4">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/products.jpg"
              alt="Gestionar Productos"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <Link
              replace
              to="/admin/products"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Gestionar Productos
            </Link>
          </div>
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/orders.jpg"
              alt="Gestionar Pedidos"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <Link
              replace
              to="/admin/orders"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Gestionar Pedidos
            </Link>
          </div>
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/users.jpg"
              alt="Gestionar Usuarios"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <Link
              replace
              to="/admin/users"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Gestionar Usuarios
            </Link>
          </div>
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/reports.jpg"
              alt="Ver Reportes"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <Link
              replace
              to="/admin/reports"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Ver Reportes
            </Link>
          </div>
        </div>
      </section>

      {/* Últimos Reportes */}
      <section>
        <h2 className="text-2xl font-bold text-walmart-blue mb-4">
          Últimos Reportes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="report-item bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-walmart-blue mb-2">
              Reporte de Ventas
            </h3>
            <p className="text-gray-700 mb-4">Ventas totales: $10,000</p>
            <Link
              replace
              to="/admin/reports/sales"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Ver Detalles
            </Link>
          </div>
          <div className="report-item bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-walmart-blue mb-2">
              Reporte de Inventario
            </h3>
            <p className="text-gray-700 mb-4">Productos bajos en stock: 5</p>
            <Link
              replace
              to="/admin/reports/inventory"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Ver Detalles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminMain;
