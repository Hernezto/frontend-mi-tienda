import { useQuery } from "@tanstack/react-query";
import PrettyText from "./PrettyText";
import { Product } from "./Product";

interface Product {
  id: string;
  description: string;
  name: string;
  // Add other properties of the product if needed
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

const Feed = () => {
  const { error, data, isError, isPending } = useQuery<{
    productlist: Product[];
  }>({
    queryKey: ["data"],
    queryFn: () => getData(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000,
  });

  //   const productList: Product[] = data?.productlist?.flatMap((res) => res) ?? [];

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

  if (!data || !data) {
    return <PrettyText>No products available</PrettyText>;
  }
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.productlist.map((item, index) => (
        <Product item={item} index={index} />
      ))}
    </div>
  );
};
export default Feed;
