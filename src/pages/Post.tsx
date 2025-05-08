import { Link } from "react-router";
import { useState } from "react";

import "../CSS/formularios.css";

const Post = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
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
    if (file) {
      setFormData((prevData: any) => ({
        ...prevData,
        imagen: file,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    for (let data in formData) {
      const key = data as keyof typeof formData;
      setFormData((prevData) => ({
        ...prevData,
        [key]: formData[key].trim(),
      }));

      if (
        formData[key] === "" ||
        formData[key] === undefined ||
        (typeof formData[key] === "number" && formData[key] === 0)
      ) {
        alert("Por favor, complete todos los campos.");
        return;
      }
    }

    // Logica para manejar el submit yo recomiendo para la gestion de estados mas adelante si prograsa usar tanstack react query
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
              value={formData["category"]}
              onChange={handleChange}
              id="categoria"
              name="category"
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
