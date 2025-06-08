import { useEffect, useState } from "react";

// Remove local ImportMeta and ImportMetaEnv declarations.
// Instead, add the following to a global .d.ts file (e.g., src/vite-env.d.ts):

// /// <reference types="vite/client" />

const ProductList = () => {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const apiURL = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiURL}/product/`);
        const data = await res.json();
        setProductos(Array.isArray(data) ? data : data.productlist ?? []);
      } catch {
        setProductos([]);
      }
    };
    fetchProductos();
  }, []);

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-walmart-blue mb-4">Lista de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <div key={prod._id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src={prod.image || "/assets/img/carrito.png"}
              alt={prod.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="font-semibold">{prod.name}</h2>
            <p className="text-gray-700">${prod.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;