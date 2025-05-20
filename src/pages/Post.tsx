import { Link } from "react-router";
import { useState } from "react";

const Post = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    type: "",
    image: "",
  });
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFormData((prevData: any) => ({
      ...prevData,
      image: file || "", // Allow empty string if no file is selected
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate required fields
    if (!formData.name.trim()) {
      alert("El campo 'Nombre' es obligatorio.");
      return;
    }
    if (!formData.description.trim()) {
      alert("El campo 'Descripción' es obligatorio.");
      return;
    }
    if (!formData.price || isNaN(parseFloat(formData.price))) {
      alert("El campo 'Precio' debe ser un número válido.");
      return;
    }
    if (!formData.type.trim()) {
      alert("El campo 'Categoría' es obligatorio.");
      return;
    }

    try {
      const apiURL = import.meta.env.VITE_API_URL;

      // Prepare JSON payload
      const payload = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price).toFixed(2), // Ensure price is a valid number
        type: formData.type.trim(),
        image: formData.image || null, // Send null if no image is provided
        inStock: true, // Default value for inStock
      };

      console.log("Payload:", payload); // Debugging

      const response = await fetch(`${apiURL}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error(
          responseData.message || "Error al enviar el formulario"
        );
      }

      alert("Producto publicado exitosamente");
      setFormData({
        name: "",
        description: "",
        price: "",
        type: "",
        image: "",
      }); // Reset form
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al publicar el producto. Inténtelo de nuevo.");
    }
  };

  return (
    <>
      <Link replace to="/" className="home-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"></path>
          <path d="M9 22V12H15V22"></path>
        </svg>
        Inicio
      </Link>
      <div id="home-button-container"></div>
      <div className="form-container">
        <h2>Publicar un Producto</h2>
        <form id="productForm">
          <div className="input-group">
            <label htmlFor="nombre">Nombre del Producto</label>
            <input
              value={formData["name"]}
              onChange={handleChange}
              type="text"
              id="nombre"
              name="name" // Asegúrate de agregar el atributo "name" para que coincida con el estado
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              value={formData["description"]}
              onChange={handleChange}
              name="description"
              id="description"
              rows={3}
              required
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="precio">Precio ($)</label>
            <input
              value={formData["price"]}
              onChange={handleChange}
              name="price"
              type="number"
              id="price"
              min={0}
              maxLength={6}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="categoria">Categoría</label>
            <select
              value={formData["type"]}
              onChange={handleChange}
              id="categoria"
              name="type"
              required
            >
              <option value="">Seleccione...</option>
              <option value="juguetes">Juguetes</option>
              <option value="electronica">Electrónica</option>
              <option value="ropa">Ropa</option>
              <option value="hogar">Hogar</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="imagen">Imagen del Producto</label>
            <input
              value={formData["image"]}
              onChange={handleFileChange}
              type="file"
              id="image"
              accept="image/*"
            />
          </div>

          <button type="submit" onClick={handleSubmit} className="btn">
            Publicar
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;
