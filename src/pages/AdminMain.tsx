import { Link } from "react-router";

import "../CSS/admin.css";
export const AdminMain = () => {
  return (
    <main className="admin-panel">
      <section className="admin-welcome-banner">
        <h1>Bienvenido, Administrador</h1>
        <p>Gestiona tu tienda y mantén todo en orden desde este panel.</p>
      </section>

      <section className="admin-actions">
        <h2>Acciones Rápidas</h2>
        <div className="action-grid">
          <div className="action-item">
            <img src="/assets/img/products.jpg" alt="Gestionar Productos" />
            <Link replace to="/admin/products">
              Gestionar Productos
            </Link>
          </div>
          <div className="action-item">
            <img src="/assets/img/orders.jpg" alt="Gestionar Pedidos" />
            <Link replace to="/admin/orders">
              Gestionar Pedidos
            </Link>
          </div>
          <div className="action-item">
            <img src="/assets/img/users.jpg" alt="Gestionar Usuarios" />
            <Link replace to="/admin/users">
              Gestionar Usuarios
            </Link>
          </div>
          <div className="action-item">
            <img src="/assets/img/reports.jpg" alt="Ver Reportes" />
            <Link replace to="/admin/reports">
              Ver Reportes
            </Link>
          </div>
        </div>
      </section>

      <section className="admin-reports">
        <h2>Últimos Reportes</h2>
        <p>Revisa los reportes más recientes sobre el estado de tu tienda.</p>
        <div className="report-list">
          <div className="report-item">
            <h3>Reporte de Ventas</h3>
            <p>Ventas totales: $10,000</p>
            <Link replace to="/admin/reports/sales">
              Ver Detalles
            </Link>
          </div>
          <div className="report-item">
            <h3>Reporte de Inventario</h3>
            <p>Productos bajos en stock: 5</p>
            <Link replace to="/admin/reports/inventory">
              Ver Detalles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
