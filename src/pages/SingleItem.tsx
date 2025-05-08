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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
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
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {data.image && ( // Render the image only if it exists
          <img
            src={data.image}
            alt={data.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
        )}
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{data.name}</h1>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          {data.description}
        </p>
        <p
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Price: ${data.price}
        </p>
        <p style={{ fontSize: "16px", color: "#777" }}>
          Category: {data.category}
        </p>
      </div>
    </div>
  );
};

export default SingleItem;
