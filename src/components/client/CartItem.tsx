// components/CartItem.tsx
import { Trash2 } from "lucide-react";
import type { CartItems } from "@/types/types";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./QuantitySelector";

interface CartItemProps {
  item: CartItems;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

export const CartItem = ({
  item,
  onQuantityChange,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src={`data:image/webp;base64,${item.product.thumb}`}
          alt={item.product.name}
          className="object-cover w-16 h-16 rounded"
        />
        <div>
          <h3 className="font-medium">{item.product.name}</h3>
          <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 m-4">
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => onQuantityChange(item.quantity + 1)}
          onDecrease={() => onQuantityChange(item.quantity - 1)}
        />

        <p className="w-20 font-medium text-right">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>

        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
