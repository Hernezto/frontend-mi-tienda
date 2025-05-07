import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Filter from "../pages/Filter";
import Post from "../pages/Post";
import Query from "../pages/Query";
import ProductList from "../pages/ProductsList";
import Login from "../pages/Login";
import User from "../pages/User";
import Register from "../pages/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/post" element={<Post />} />
        <Route path="/query" element={<Query />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        {/* Ruta comodín para 404 o redirección */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
