"use client";

import { IconBucket } from "@tabler/icons-react";

import { useStocksStore } from "@/zustand/use-stocks-store";
import { StockDescription } from "@/types/stocks";
import { cn } from "@/lib/utils";

interface StockListItemProps {
  stock: StockDescription;
}

export const StockListItem = ({ stock }: StockListItemProps) => {
  const { stocks, setStocks } = useStocksStore();

  const handleRemoveStock = () => {
    const newStocks = stocks.filter(
      (favoriteStock) => favoriteStock.displaySymbol !== stock.displaySymbol
    );

    setStocks(newStocks);
  };

  return (
    <div className="flex items-center justify-between p-3 border-b last:border-b-0">
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-center gap-3 mb-1">
          <div className="font-medium text-base">{stock.displaySymbol}</div>
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">
            {stock.type}
          </span>
        </div>
        <div className="text-sm text-muted-foreground truncate">
          {stock.description}
        </div>
      </div>
      <button
        onClick={handleRemoveStock}
        className={cn("p-2 rounded-full hover:bg-accent transition-colors")}
      >
        <IconBucket />
      </button>
    </div>
  );
};
