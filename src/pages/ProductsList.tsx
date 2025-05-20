import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 500,
    image: "/assets/img/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: 1200,
    image: "/assets/img/laptop.jpg",
  },
  {
    id: 3,
    name: "Auriculares",
    price: 150,
    image: "/assets/img/headphones.jpg",
  },
  {
    id: 4,
    name: "Cámara",
    price: 800,
    image: "/assets/img/camera.jpg",
  },
];

const ProductsList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Botón de Inicio */}
      <Link
        replace
        to="/"
        className="flex items-center  font-semibold hover:underline mb-6"
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

      {/* Título */}
      <h2 className="text-2xl font-bold text-walmart-blue mb-4">
        Productos Disponibles
      </h2>

      {/* Listado de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className=" bg-white shadow-md rounded-lg p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
              replace
              to={`/product/${product.id}`}
              className="text-walmart-blue font-semibold hover:underline"
            >
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
