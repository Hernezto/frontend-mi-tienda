import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const producto = location.state?.producto;

  const [descripcion, setDescripcion] = useState(producto?.description || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (producto) {
      setDescripcion(producto.description);
    }
  }, [producto]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!producto) return;

    setLoading(true);
    try {
      const apiURL = import.meta.env.VITE_API_URL;
      await fetch(`${apiURL}/product/${producto.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: descripcion }),
      });
      alert("Descripción actualizada");
      navigate(-1); // Vuelve a la página anterior
    } catch (error) {
      alert("Error al actualizar la descripción");
    } finally {
      setLoading(false);
    }
  };

  if (!producto) {
    return <div>No hay producto para editar.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Descripción</label>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        Guardar
      </button>
    </form>
  );
};

export default Post;