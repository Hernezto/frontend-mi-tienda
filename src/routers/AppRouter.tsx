import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Filter from "../pages/Filter";
import Post from "../components/admin/Post";
import Query from "../pages/Query";
import ProductList from "../pages/ProductsList";
import Login from "../pages/Login";
import User from "../pages/User";
import Register from "../pages/Register";
import SingleItem from "../pages/SingleItem";
import FilteredSearch from "../pages/FilteredSearch";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/admin/add" element={<Post />} />
        <Route path="/query" element={<Query />} />
        <Route path="/productlist/:type" element={<ProductList />} />
        <Route path="/result/:name" element={<FilteredSearch />} />
        <Route path="/product/:id" element={<SingleItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        {/* Ruta comodín para 404 o redirección */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
