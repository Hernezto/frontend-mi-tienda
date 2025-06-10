import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Trash2 } from "lucide-react";

import AdminModify from "./AdminModify";
import { useCallback, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import type { QueryFunction } from "@tanstack/react-query";
import PrettyText from "../ui/PrettyText";
import { Product } from "../ui/Product";

const apiURL = import.meta.env.VITE_API_URL;

interface QueryResult {
  products: Product[];
  nextCursor: number;
  hasMore: boolean;
}

const fetchProducts: QueryFunction<QueryResult, ["products"], number> = async ({
  pageParam,
}) => {
  const data = await getData({ pageParam }); // Ahora recibe directamente los datos

  return {
    products: data.result,
    nextCursor: Number(data.nextCursor),
    hasMore: data.hasMore,
  };
};

export default function ProductList() {
  const sseRef = useRef<EventSource | null>(null);
  const {
    isPending,
    isError,
    error,
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextCursor : undefined,
  });

  const productList: Product[] =
    data?.pages?.flatMap((res) => res.products) ?? [];

  // Implementación del observer para carga infinita
  const observerRef = useRef<IntersectionObserver>();
  const loaderRef = useCallback(
    (node: HTMLDivElement) => {
      if (isPending) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isPending, hasNextPage, isFetching, fetchNextPage]
  );

  useEffect(() => {
    sseRef.current = new EventSource(`${apiURL}/api/events/`);

    const handleSSEEvent = () => {
      console.log("Cambio en la BD");
      refetch(); // Añade paréntesis para ejecutar la función
    };

    sseRef.current.addEventListener("change", handleSSEEvent);

    return () => {
      sseRef.current?.close();
    };
  }, [refetch]);

  if (isPending) {
    return (
      <div className="overflow-hidden ">
        <Table className="overflow-hidden table-fixed">
          <TableHeader>
            <TableRow className="border-none">
              <th className="flex justify-center items-center align-middle h-[50dvh]">
                <p className="text-6xl opacity-25">
                  <PrettyText>Cargando...</PrettyText>
                </p>
              </th>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="overflow-hidden ">
        <Table className="overflow-hidden table-fixed">
          <TableHeader>
            <TableRow className="border-none">
              <th className="flex justify-center items-center align-middle h-[50dvh]">
                <PrettyText>{error.message}</PrettyText>
              </th>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    );
  }
  if (productList.length === 0) {
    return (
      <div className="overflow-hidden ">
        <Table className="overflow-hidden table-fixed">
          <TableHeader>
            <TableRow className="border-none">
              <th className="flex justify-center items-center align-middle h-[50dvh]">
                <PrettyText>No hay productos para mostrar</PrettyText>
              </th>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    );
  }
  return (
    <div className="w-full overflow-hidden">
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12">Imagen</TableHead>
            <TableHead className="hidden w-2/12 md:table-cell">
              Nombre
            </TableHead>
            <TableHead className="hidden w-1/12 md:table-cell">
              Categoría
            </TableHead>
            <TableHead className="w-1/12">Precio</TableHead>
            <TableHead className="hidden w-2/12 md:table-cell">
              Subtítulo
            </TableHead>
            <TableHead className="hidden w-3/12 md:table-cell">
              Descripción
            </TableHead>
            <TableHead className="hidden w-2/12 md:table-cell">
              Ingredientes
            </TableHead>
            <TableHead className="hidden w-1/12 md:table-cell">
              Etiqueta
            </TableHead>
            <TableHead className="w-1/12">Editar</TableHead>
            <TableHead className="w-1/12">Eliminar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productList.map((element: Product, index: number) => (
            <TableRow key={index}>
              <TableCell className="w-1/12">
                <Dialog>
                  <DialogTrigger>
                    <div className="relative w-10 h-10 rounded-md shadow-2xl aspect-square box sm:max-w-3/4">
                      <img
                        src={`data:image/webp;base64,${element.thumb}`}
                        alt={"Imagen" + element.name}
                        className="absolute object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="min-w-fit">
                    <DialogHeader>
                      <Product data={element} />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="hidden w-2/12 overflow-hidden break-words text-ellipsis md:table-cell">
                {element.name}
              </TableCell>
              <TableCell className="hidden w-1/12 overflow-hidden break-words text-ellipsis md:table-cell">
                {element.category}
              </TableCell>
              <TableCell className="w-1/12 overflow-hidden break-words text-ellipsis">
                ${element.price}
              </TableCell>
              <TableCell className="hidden w-2/12 overflow-hidden break-words text-ellipsis md:table-cell">
                {element.subtitle}
              </TableCell>
              <TableCell className="hidden w-3/12 overflow-hidden break-words text-ellipsis md:table-cell">
                <Dialog>
                  <DialogTrigger>{element.description}</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{element.name}</DialogTitle>
                      <DialogDescription>
                        {element.description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="hidden w-2/12 overflow-hidden break-words text-ellipsis md:table-cell">
                <Dialog>
                  <DialogTrigger>{element.ingredients}</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{element.name}</DialogTitle>
                      <DialogDescription>
                        {element.ingredients}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="hidden w-1/12 overflow-hidden break-words text-ellipsis md:table-cell">
                {element.badge}
              </TableCell>
              <TableCell className="w-1/12">
                <Dialog>
                  <DialogTrigger>
                    <Pencil />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{element.name}</DialogTitle>
                      <DialogDescription />
                      <AdminModify product={element} />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="w-1/12">
                <Popover>
                  <PopoverTrigger>
                    <Trash2 />
                  </PopoverTrigger>
                  <PopoverContent className="m-5">
                    <div className="flex flex-col items-center content-center">
                      <p>Estás seguro que deseas eliminar el elemento?</p>
                      <Button
                        className="mt-8 bg-red-600 max-w-32"
                        onClick={() => deleteProduct(element.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div ref={loaderRef}></div>
    </div>
  );
}
async function getData({ pageParam }: { pageParam: number }) {
  const response = await fetch(`${apiURL}/api/products?page=${pageParam}`);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json();
}
