import { Link } from "react-router";
import "../CSS/listados.css";

const ProductsList = () => {
  return (
    <>
      {" "}
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
      <h2 className=" label">Productos Disponibles</h2>
      <div className="list-container">
        <div className="product-list" id="productList">
          {/*  <!-- Aquí se insertarán los productos dinámicamente --> */}
        </div>
      </div>
      <script src="../JS/listados.js"></script>
    </>
  );
};

export default ProductsList;
