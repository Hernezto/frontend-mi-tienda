import { Link } from "react-router";

const Query = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      {/* Contenedor del Formulario */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-walmartBlue mb-4">
          {/* Botón de Inicio */}
          <Link
            to="/"
            className="flex items-center text-walmartBlue font-semibold hover:underline mb-6"
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
          Contáctanos
        </h2>
        <form id="contactForm" className="space-y-4">
          {/* Grupo de Entrada: Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
            />
          </div>

          {/* Grupo de Entrada: Correo Electrónico */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
            />
          </div>

          {/* Grupo de Entrada: Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full bg-walmartBlue text-white font-semibold py-2 px-4 rounded-md hover:bg-walmartBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-walmartBlue"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Query;
