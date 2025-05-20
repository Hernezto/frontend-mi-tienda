import { Link } from "react-router";

const OrderList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Botón de Inicio */}
      <Link
        replace
        to="/user"
        className="flex items-center text-walmart-blue font-semibold hover:underline mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"></path>
          <path d="M9 22V12H15V22"></path>
        </svg>
        Inicio
      </Link>

      {/* Contenedor de la Lista */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-walmart-blue mb-4">
          Mis Pedidos
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-walmart-blue text-white">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Producto</th>
              <th className="py-2 px-4 text-left">Precio</th>
              <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody id="orderList" className="divide-y divide-gray-200">
            {/* Ejemplo de Fila */}
            <tr>
              <td className="py-2 px-4">12345</td>
              <td className="py-2 px-4">Smartphone</td>
              <td className="py-2 px-4">$500</td>
              <td className="py-2 px-4 text-green-600 font-semibold">
                Enviado
              </td>
              <td className="py-2 px-4">2025-05-20</td>
            </tr>
            <tr>
              <td className="py-2 px-4">67890</td>
              <td className="py-2 px-4">Laptop</td>
              <td className="py-2 px-4">$1200</td>
              <td className="py-2 px-4 text-yellow-600 font-semibold">
                Pendiente
              </td>
              <td className="py-2 px-4">2025-05-18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
