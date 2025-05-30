import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

interface CategoryProps {
  link: string;
  img: string;
  name: string;
}

const Category: React.FC<CategoryProps> = ({ link, img, name }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link replace state={{ type: link }} to={"productlist/type:" + link}>
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
