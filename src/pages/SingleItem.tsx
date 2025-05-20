import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const getProduct = async (id: string): Promise<Product> => {
  try {
    const apiURL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiURL}/product/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const SingleItem = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isError, isLoading } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found.
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Link
        replace
        to="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          textDecoration: "none",
          color: "#007bff",
          fontSize: "18px",
        }}
      >
        ← Back
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-auto rounded-md mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{data.name}</h1>
        <p className="text-gray-600 text-base mb-6">{data.description}</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Precio: ${data.price}
        </p>
        <p className="text-sm text-gray-500">Categoría: {data.category}</p>
      </div>
    </div>
  );
};

export default SingleItem;
