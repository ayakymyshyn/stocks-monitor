"use client";

import { useStocksStore } from "@/zustand/use-stocks-store";

import { StockListItem } from "./stock-list-item";

export const StockList = () => {
  const { stocks } = useStocksStore();

  if (stocks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <p className="text-sm text-muted-foreground">No stocks available</p>
      </div>
    );
  }

  return (
    <div className="divide-y rounded-md border">
      {stocks.map((stock) => (
        <StockListItem key={stock.displaySymbol} stock={stock} />
      ))}
    </div>
  );
};
