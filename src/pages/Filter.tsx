import { Link } from "react-router";

const Filter = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      {/* Contenedor del Formulario */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        {/* Botón de Inicio */}
        <Link
          replace
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

        <h2 className="text-2xl font-bold text-walmartBlue mb-4">
          Buscar Productos
        </h2>
        <form id="searchForm" className="space-y-4">
          {/* Grupo de Entrada: Palabra Clave */}
          <div>
            <label
              htmlFor="palabraClave"
              className="block text-sm font-medium text-gray-700"
            >
              Palabra Clave
            </label>
            <input
              type="text"
              id="palabraClave"
              placeholder="Ej. Smartphone"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
            />
          </div>

          {/* Botón de Búsqueda */}
          <button
            type="submit"
            className="w-full bg-walmartBlue text-white font-semibold py-2 px-4 rounded-md hover:bg-walmartBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-walmartBlue"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
