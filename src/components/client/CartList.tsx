import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import { CartItem } from "./CartItem";
import { useCart } from "@/hooks/useCart";
import PrettyText from "../ui/PrettyText";
import { useOrderFormatter, useWhatsAppLinkGenerator } from "@/lib/orders";

export const CartList = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  const { formatOrder } = useOrderFormatter();
  const { generateLink } = useWhatsAppLinkGenerator();

  formatOrder();
  const whatsappLink = generateLink({
    server: "56891294",
  });
  const buyProduct = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger className="relative">
        <ShoppingCart className="text-gray-600 w-7 h-7 sm:w-8 sm:h-8" />
        {cart.length > 0 && (
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full -top-1 -right-1">
            {cart.length}
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="min-w-max max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <Table className="w-full">
            <TableBody>
              {cart.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    <PrettyText> Tu carrito está vacío </PrettyText>
                  </TableCell>
                </TableRow>
              ) : (
                <div className="mx-auto">
                  <h2 className="mb-6 text-2xl font-bold">
                    Tu Carrito ({cartCount} producto)
                  </h2>

                  {cart.length === 0 ? (
                    <p className="py-8 text-center">Tu carrito está vacío</p>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <CartItem
                          key={item.product.id}
                          item={item}
                          onQuantityChange={(quantity) =>
                            updateQuantity({
                              productId: item.product.id,
                              quantity,
                            })
                          }
                          onRemove={() => removeFromCart(item.product.id)}
                        />
                      ))}

                      <div className="flex items-center justify-between pt-4 border-t ">
                        <h3 className="text-xl font-bold">
                          Total: ${cartTotal.toFixed(2)}
                        </h3>

                        <div className="space-x-2">
                          <Button variant="outline" onClick={() => clearCart()}>
                            Vaciar Carrito
                          </Button>
                          <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => buyProduct()}
                          >
                            Proceder al Pago
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </TableBody>
          </Table>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
