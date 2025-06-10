import { useQuery } from "@tanstack/react-query";
import PrettyText from "../ui/PrettyText";
// import styles from "../../pages/DeleteInventory.module.css";
import styles from "../client/FeedEditable.module.css";

interface Product {
  id: string;
  description: string;
  name: string;
  // Agrega otras propiedades si es necesario
}

const getData = async (): Promise<{ productlist: Product[] }> => {
  try {
    const apiURL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiURL}/product/`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return { productlist: data || [] };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { productlist: [] };
  }
};

interface FeedEditableProps {
  onEdit?: (item: Product) => void;
  onDelete?: (item: Product) => void;
}

const FeedEditable = ({ onEdit, onDelete }: FeedEditableProps) => {
  const { error, data, isError, isPending } = useQuery<{
    productlist: Product[];
  }>({
    queryKey: ["data"],
    queryFn: () => getData(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000,
  });

  if (isError) {
    return (
      <PrettyText>Error: {error?.message || "Error desconocido"}</PrettyText>
    );
  }

  if (isPending) {
    return (
      <section className="py-12 max-w-7xl">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
      </section>
    );
  }

  if (!data || !data.productlist.length) {
    return <PrettyText>No products available</PrettyText>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.productlist.map((item) => (
        <div key={item.id} className={styles.card}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className={styles.actions}>
            <button
              className={styles.editButton}
              title="Editar"
              onClick={() => onEdit?.(item)}
            >
              ✏️
            </button>
            <button
              className={styles.deleteButton}
              title="Eliminar"
              onClick={() => onDelete?.(item)}
            >
              −
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedEditable;