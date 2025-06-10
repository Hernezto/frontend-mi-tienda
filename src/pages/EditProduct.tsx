import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const apiURL = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiURL}/product/${id}`);
        const data = await res.json();
        setProducto(data);
      } catch {
        alert("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const apiURL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiURL}/product/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: producto.name,
          price: producto.price,
          description: producto.description,
        }),
      });
      if (res.ok) {
        alert("Producto actualizado correctamente.");
        navigate("/admin/productos");
      } else {
        alert("No se pudo actualizar el producto.");
      }
    } catch {
      alert("Error al actualizar el producto.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block font-semibold">Nombre</label>
          <input
            type="text"
            name="name"
            value={producto.name || ""}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Precio</label>
          <input
            type="number"
            name="price"
            value={producto.price || ""}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Descripción</label>
          <textarea
            name="description"
            value={producto.description || ""}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-walmart-blue text-white px-4 py-2 rounded"
          disabled={saving}
        >
          {saving ? "Guardando..." : "Guardar Cambios"}
        </button>
      </form>
    </main>
  );
};

export default EditProduct;