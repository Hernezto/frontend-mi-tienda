import { useQuery } from "@tanstack/react-query";

interface AuthData {
  isValid: boolean | null;
  token: string | null;
}
const apiURL = import.meta.env.VITE_API_URL;

const fetchAuthStatus = async (token: string | null): Promise<AuthData> => {
  if (!token) {
    return { isValid: false, token: null };
  }

  try {
    const response = await fetch(`${apiURL}/auth/verify`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      localStorage.removeItem("Authorization");
      return { isValid: false, token: null };
    }

    const data = await response.json();
    console.log(data);
    return { isValid: data.valid ?? false, token: data.token ?? null };
  } catch (error) {
    console.error("Error during authentication:", error);
    return { isValid: false, token: null };
  }
};

export const useAuth = () => {
  const token = localStorage.getItem("Authorization");
  const { data, isLoading, error } = useQuery<AuthData, Error>({
    queryKey: ["auth", token],
    queryFn: () => fetchAuthStatus(token),
    enabled: !!token, // Solo ejecuta la consulta si el token está presente
    staleTime: !token ? 0 : 1000 * 60 * 30, // 30 minutos
    refetchOnWindowFocus: false, // No refetch al cambiar de ventana
    retry: false, // No reintentar automáticamente en caso de error
  });

  return {
    token: data?.token ?? null,
    isValid: data?.isValid ?? null,
    isLoading,
    error,
  };
};
