import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductList = () => {
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const apiURL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiURL}/product/`);
      const data = await res.json();
      setProductos(Array.isArray(data) ? data : data.productlist ?? []);
    } catch {
      setProductos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;
    try {
      const apiURL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiURL}/product/${id}`, { method: "DELETE" });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setProductos(productos.filter((p) => p.id !== id));
        alert("Producto eliminado correctamente.");
      } else {
        alert("No se pudo eliminar el producto.");
      }
    } catch {
      alert("Error al eliminar el producto.");
    }
  };

  if (loading) return <div className="p-6 text-center text-lg">Cargando productos...</div>;

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-walmart-blue text-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold">Gestión de Productos</h1>
        <p className="mt-2 text-lg">Administra los productos de tu tienda aquí.</p>
      </section>
      <section className="mb-8">
        <button
          className="mb-6 bg-walmart-blue text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-700 transition"
          onClick={() => navigate("/admin")}
        >
          ← Volver al Panel de Admin
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((prod) => (
            <div
              key={prod.id}
              className="bg-white shadow rounded-md p-3 flex flex-col items-center max-w-xs mx-auto"
              style={{ minHeight: 320 }}
            >
              <div className="w-full flex justify-center mb-3">
                <img
                  src={prod.image || "/assets/img/no-image.png"}
                  alt={prod.name}
                  className="w-32 h-32 object-cover rounded-md border border-gray-200 shadow-sm"
                  style={{ background: "#f3f4f6" }}
                />
              </div>
              <div className="w-full text-center mb-2">
                <div className="font-semibold text-base text-walmart-blue truncate">{prod.name}</div>
                <div className="text-gray-700 text-sm">Precio: ${prod.price}</div>
                <div className="text-gray-600 text-xs mt-1 line-clamp-2">{prod.description}</div>
              </div>
              <div className="flex gap-2 w-full justify-center mt-auto">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-sm transition"
                  onClick={() => navigate(`/admin/edit/${prod.id}`)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition"
                  onClick={() => handleDelete(prod.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductList;