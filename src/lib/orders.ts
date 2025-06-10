import { useCart } from "@/hooks/useCart";
// Interfaz para los parámetros de generateLink
interface GenerateLinkParams {
  server: string;
}

// Función para formatear el pedido usando el carrito actual
export const useOrderFormatter = () => {
  const { cart } = useCart();

  const formatOrder = () => {
    if (!cart || cart.length === 0)
      return { message: "El carrito está vacío", total: 0 };

    let message = " *Detalle del pedido:*\n\n";
    let total = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.product.price * item.quantity;
      total += itemTotal;
      message += `➡️ *${index + 1}. ${item.product.name}*  
      - Cantidad: ${item.quantity}  
      - Precio unitario: $${item.product.price.toFixed(2)}  
      - Subtotal: $${itemTotal.toFixed(2)}\n\n`;
    });

    message += ` *Total a pagar:* $${total.toFixed(2)}`;
    return { message, total };
  };

  return { formatOrder };
};

// Función para generar el enlace de WhatsApp
export const useWhatsAppLinkGenerator = () => {
  const { formatOrder } = useOrderFormatter();

  const generateLink = ({ server }: GenerateLinkParams) => {
    const { message } = formatOrder();
    const greeting = `¡Hola!. Quiero realizar el siguiente pedido:\n\n`;
    const encodedMessage = encodeURIComponent(greeting + message);
    return `https://wa.me/${server}?text=${encodedMessage}`;
  };

  return { generateLink };
};

// Ejemplo de uso en un componente:
/*
const { formatOrder } = useOrderFormatter();
const { generateLink } = useWhatsAppLinkGenerator();

const { message, total } = formatOrder();
const whatsappLink = generateLink({
  client: "Nombre del Cliente",
  server: "123456789" // número de teléfono del servidor
});
*/
