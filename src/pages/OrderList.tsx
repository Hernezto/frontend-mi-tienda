import { Link } from "react-router";
import "../CSS/pedidos.css";

const OrderList = () => {
  return (
    <>
      {" "}
      <Link replace to="/user" className="home-button">
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
      <div className="list-container">
        <h2>Mis Pedidos</h2>
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody id="orderList">
            {/* <!-- Aquí se insertarán los pedidos dinámicamente --> */}
          </tbody>
        </table>
      </div>
      <script src="../JS/pedidos.js"></script>
    </>
  );
};

export default OrderList;
