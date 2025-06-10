import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: string | number;
  email: string;
  rols?: string;
  // agrega más campos si es necesario
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiURL = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiURL}/auth/`);
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : data.userlist ?? []);
      } catch {
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="p-6">Cargando usuarios...</div>;
  if (!users.length)
    return (
      <main className="p-6 bg-gray-100 min-h-screen">
        <section className="bg-walmart-blue text-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold">Usuarios Registrados</h1>
          <p className="text-lg mt-2">No hay usuarios registrados.</p>
        </section>
      </main>
    );

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <button
        className="mb-4 px-4 py-2 bg-walmart-blue text-white rounded hover:bg-blue-800 transition"
        onClick={() => navigate("/admin")}
      >
        Volver al Panel de Admin
      </button>
      <section className="bg-walmart-blue text-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold">Usuarios Registrados</h1>
        <p className="text-lg mt-2">
          Consulta y gestiona los usuarios registrados en el sistema.
        </p>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold text-walmart-blue mb-2">
                {user.email}
              </h3>
              {user.rols && (
                <p className="text-gray-600 mb-1">
                  Rol: <span className="font-semibold">{user.rols}</span>
                </p>
              )}
              {/* Agrega más campos aquí si lo necesitas */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Users;