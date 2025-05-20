import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

interface CategoryProps {
  img: string;
  name: string;
}

const Category: React.FC<CategoryProps> = ({ img, name }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link replace to="#">
        <div className=" bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src={img}
            alt={name}
            className="w-full h-32 object-cover rounded-md"
          />
          {name}
        </div>
      </Link>
    </motion.button>
  );
};
export default Category;
