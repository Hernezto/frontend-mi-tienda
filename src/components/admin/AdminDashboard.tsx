import { SetStateAction, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Search } from "lucide-react";

import Listing from "./Products/Listing";
import AddProductForm from "./AddProduct/AddProductForm";
import AdminSettings from "./Settings/AdminSettings";
import FilteredProducts from "./Products/FilteredProducts";
/* import AddSeo from "./SEO/AddSeo";
 */
export default function AdminDashboard() {
  const [form, setForm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Estado para controlar la visibilidad del buscador

  const handleForm = (e: { target: { value: SetStateAction<string> } }) => {
    setForm(e.target.value);
  };
  return (
    <>
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="flex-1 bg-blue-100 max-w-96">
          <TabsTrigger value="products" className="flex-1">
            Productos
          </TabsTrigger>
          <TabsTrigger value="add" className="flex-1">
            Añadir producto
          </TabsTrigger>
          {/* <TabsTrigger value="seo" className="flex-1">
            SEO
          </TabsTrigger> */}
          <TabsTrigger value="settings" className="flex-1">
            Ajustes
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="products"
          className="focus-visible:none focus-within:none focus:none"
        >
          {/* Barra de búsqueda para pantallas grandes */}
          <div className="absolute right-0 hidden my-4 md:block -translate-y-14">
            <div className="relative inline-block mr-8">
              <input
                type="text"
                placeholder="Buscar producto..."
                id="filter"
                onChange={handleForm}
                value={form}
                className="py-2 pl-8 pr-4 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400 inline-block" />
            </div>
          </div>

          {/* Ícono de lupa para pantallas pequeñas */}
          <div className="absolute block md:hidden right-4 top-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Search className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Modal de búsqueda para móviles */}
          {isSearchOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-11/12 max-w-md p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Buscar producto</h2>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Buscar producto..."
                  id="filter"
                  onChange={handleForm}
                  value={form}
                  className="w-full py-2 pl-8 pr-4 text-black bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute w-5 h-5 text-gray-400 left-4 top-10" />
              </div>
            </div>
          )}
          {form ? <FilteredProducts query={form} /> : <Listing />}
        </TabsContent>
        <TabsContent value="add">
          <AddProductForm />
        </TabsContent>
        {/* <TabsContent value="seo">
          <AddSeo />
        </TabsContent> */}
        <TabsContent value="settings">
          <AdminSettings />
        </TabsContent>
      </Tabs>
    </>
  );
}
