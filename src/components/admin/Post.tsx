import { Link } from "react-router";
import { useState } from "react";

const Post = () => {
  const error = null;
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    price: string;
    type: string;
    image: string | File;
  }>({
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
      // Crear FormData
      const formPayload = new FormData();
      formPayload.append("name", formData.name.trim());
      formPayload.append("description", formData.description.trim());
      formPayload.append("price", parseFloat(formData.price).toFixed(2));
      formPayload.append("type", formData.type.trim());
      formPayload.append("inStock", "true"); // si es booleano, envía como string

      // Agregar imagen solo si existe
      if (formData.image && formData.image instanceof File) {
        formPayload.append("image", formData.image);
      }

      const response = await fetch(`${apiURL}/product`, {
        method: "POST",
        body: formPayload,
      });

      const responseData = await response.json();

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
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-yellow-400 via-blue-500 to-blue-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <Link replace to="/" className="home-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"></path>
              <path d="M9 22V12H15V22"></path>
            </svg>
          </Link>

          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Añadir Producto
          </h1>
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
          )}
          <form id="productForm" className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre del Producto
              </label>
              <input
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
                value={formData["name"]}
                onChange={handleChange}
                type="text"
                id="nombre"
                name="name" // Asegúrate de agregar el atributo "name" para que coincida con el estado
                required
              />
            </div>

            <div>
              <label
                htmlFor="descripcion"
                className="block text-sm font-medium text-gray-700"
              >
                Descripción
              </label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
                value={formData["description"]}
                onChange={handleChange}
                name="description"
                id="description"
                rows={3}
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="precio"
                className="block text-sm font-medium text-gray-700"
              >
                Precio ($)
              </label>
              <input
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
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

            <div>
              <label
                htmlFor="categoria"
                className="block text-sm font-medium text-gray-700"
              >
                Categoría
              </label>
              <select
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
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

            <div>
              <label
                htmlFor="imagen"
                className="block text-sm font-medium text-gray-700"
              >
                Imagen del Producto
              </label>
              <input
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
                onChange={handleFileChange}
                type="file"
                id="image"
                accept="image/*"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-walmartBlue text-white font-semibold py-2 px-4 bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-walmartBlue"
            >
              Publicar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
