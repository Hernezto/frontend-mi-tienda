// components/QuantitySelector.tsx
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

export const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  className = "",
}: QuantitySelectorProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="w-8 h-8"
      >
        <Minus className="w-4 h-4" />
      </Button>
      <span className="w-8 text-lg font-medium text-center">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrease}
        className="w-8 h-8"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};
