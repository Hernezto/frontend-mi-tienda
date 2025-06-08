import { Link, useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiURL = import.meta.env.VITE_API_URL;

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch(`${apiURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await response.json();
      localStorage.setItem("Authorization", data.token);
      navigate("/"); // Redirect to the homepage
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-yellow-400 via-blue-500 to-blue-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
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
          </Link>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Iniciar Sesión
          </h1>
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-walmartBlue focus:border-walmartBlue"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-walmartBlue text-white font-semibold py-2 px-4 bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-walmartBlue"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            ¿No tienes una cuenta?{" "}
            <Link
              replace
              to="/register"
              className="text-walmartBlue font-medium hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
