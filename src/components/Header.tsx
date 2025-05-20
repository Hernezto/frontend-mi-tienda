import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Header = ({ logged = null }: { logged: string | null }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <header className="bg-walmart-blue text-white shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          className="logo text-2xl font-bold"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          whileTap={{ scale: 0.95, rotate: 360 }}
          animate={{
            scale: 1.15,
            rotate: [0, 10, -15, 0],

            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              repeatDelay: 0.25,
              stiffness: 100,
              damping: 10,
              mass: 1,
              bounce: 0.5,
            },
          }}
        >
          {" "}
          <Link replace to="/" className="hover:text-walmart-yellow">
            MiTienda
          </Link>
        </motion.div>

        {/* Auth Links */}
        <div className="flex items-center gap-4">
          {logged ? (
            <p className="text-sm">
              Bienvenido,{" "}
              <span className="font-semibold text-walmart-yellow">
                {logged}
              </span>
              /
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  style={{
                    all: "unset",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.removeItem("Authorization"), location.reload();
                  }}
                >
                  Cerrar Sesión
                </button>
              </motion.button>
            </p>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  replace
                  to="/login"
                  className="text-sm hover:text-walmart-yellow"
                >
                  Iniciar sesión
                </Link>
              </motion.button>
              <span>/</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  replace
                  to="/register"
                  className="text-sm hover:text-walmart-yellow"
                >
                  Registrarse
                </Link>
              </motion.button>
            </>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-2">
        <div className="container mx-auto flex items-center gap-4">
          <input
            type="text"
            placeholder="Busca productos, marcas o tiendas..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-walmart-blue"
          />
          <motion.button
            className="bg-walmart-yellow text-walmart-blue font-semibold px-4 py-2 rounded-md hover:bg-yellow-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Buscar
          </motion.button>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className="bg-walmart-yellow py-2">
        <div className="container mx-auto">
          <ul className="flex items-center justify-center gap-6 text-sm font-semibold text-walmart-blue">
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link replace to="/filter" className="hover:text-blue-700 ">
                  Búsqueda Avanzada
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link replace to="/query" className="hover:text-blue-700">
                  Soporte y Ayuda
                </Link>
              </motion.button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
