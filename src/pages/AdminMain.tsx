import { useEffect, useState } from "react";
import { Link } from "react-router";

const AdminMain = () => {
  const [totalProductos, setTotalProductos] = useState<number>(0);
  const [ventasTotales, setVentasTotales] = useState<number>(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const apiURL = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiURL}/product/`);
        const data = await res.json();
        const productos = Array.isArray(data) ? data : data.productlist ?? [];
        setTotalProductos(productos.length);

        // Sumar el precio de todos los productos
        const suma = productos.reduce(
          (acc: number, prod: any) => acc + (Number(prod.price) || 0),
          0
        );
        setVentasTotales(suma);
      } catch {
        setTotalProductos(0);
        setVentasTotales(0);
      }
    };
    fetchTotal();
  }, []);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/carrito.png"
              alt="Añadir Producto"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <Link
              replace
              to="/admin/add"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Añadir Producto
            </Link>
          </div>
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/pedidos.jpg"
              alt="Gestionar Productos"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <Link
              replace
              to="/admin/productos"
              className="text-walmart-blue font-semibold hover:underline"
            >
              Gestionar Productos
            </Link>
          </div>
         
          <div className="action-item bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="/assets/img/usuario3.jpg"
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
        </div>
      </section>

      {/* Últimos Reportes */}
      <section>
        <h2 className="text-2xl font-bold text-walmart-blue mb-4">
          Últimos Reportes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="report-item bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-walmart-blue mb-2">
              Reporte de Ventas
            </h3>
            <p className="text-gray-700 mb-4">
              Ventas totales: ${ventasTotales}
            </p>
         
          </div>
          <div className="report-item bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-walmart-blue mb-2">
              Reporte de Inventario
            </h3>
            <p className="text-gray-700 mb-4">
              Cantidad total de productos: {totalProductos}
            </p>
           
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminMain;
