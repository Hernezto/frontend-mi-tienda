import { createRoot } from "react-dom/client";
import { AppRouter } from "./routers/AppRouter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={new QueryClient()}>
    <AppRouter />
  </QueryClientProvider>
);
