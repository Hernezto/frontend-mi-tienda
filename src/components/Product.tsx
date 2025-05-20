import { Link } from "react-router";
import { motion } from "framer-motion";

export const Product = ({ item, index }: { item: any; index: number }) => {
  return (
    <Link
      replace
      to={`/product/${item.id}`}
      key={index}
      className="block focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
      aria-label={`View details for ${item.name}`}
    >
      <motion.div
        key={index}
        className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Image container with fixed aspect ratio (square-ish) */}
        <div className="w-full aspect-square md:aspect-[4/3] relative">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="card-title text-xl font-semibold mb-2 text-gray-900 truncate">
            {item.name}
          </h3>
          <p className="card-description text-gray-700 mb-4 flex-grow line-clamp-3">
            {item.description}
          </p>
          <p className="card-price text-indigo-600 font-bold text-lg">
            ${item.price}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
