import Feed from "../components/client/Feed";
import { motion } from "framer-motion";
import Category from "../components/client/Category";
const HomeView = () => {
  return (
    <>
      <main className="p-6">
        {/* Welcome Banner */}
        <section className="welcome-banner shadow-lg bg-walmart-yellow p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-walmart-blue">
            Bienvenido a MiTienda
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            ¡Descubre una amplia variedad de productos a los mejores precios!
          </p>
          <a
            href="#feed"
            className="mt-4 inline-block bg-walmart-blue text-walmart-white font-semibold py-2 px-4 rounded hover:bg-walmart-blue-dark"
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: 1.15,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            >
              Explorar Productos
            </motion.div>
          </a>
        </section>

        {/* Featured Categories */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-walmart-blue mb-4">
            Categorías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Category
              link="electronica"
              name="Electrónica"
              img="/assets/img/elec.jpg"
            />
            <Category link="moda" name="Moda" img="/assets/img/ropa.jpg" />
            <Category link="hogar" name="Hogar" img="/assets/img/hogar.jpg" />
            <Category
              link="juguetes"
              name="Juguetes"
              img="/assets/img/jug.jpg"
            />
          </div>
        </section>

        {/* Latest Products */}
        <div className="mt-8" id="feed">
          <h2 className="text-2xl font-bold text-walmart-blue mb-4">
            Últimos Productos
          </h2>
          <p className="text-gray-700 mb-4">
            Descubre los productos más recientes en nuestra tienda.
          </p>
          <Feed />
        </div>
      </main>
    </>
  );
};

export default HomeView;
