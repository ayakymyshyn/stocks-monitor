"use client";

import { StockCard } from "@/modules/stocks/components";
import { useStocksStore } from "@/zustand/use-stocks-store";

export function StockCards() {
  const { stocks } = useStocksStore();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight px-4 lg:px-6">
        My Favorite Stocks
      </h2>
      {stocks.length > 0 ? (
        <div className="flex overflow-x-auto pb-4 px-4 lg:px-6 gap-4 snap-x">
          <div className="flex gap-4 min-w-max">
            {stocks.map((stock) => (
              <StockCard
                key={stock.symbol}
                stock={stock}
                className="w-[300px] snap-center"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <p className="text-muted-foreground">No stocks added yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Add your favorite stocks to see them here
          </p>
        </div>
      )}
    </div>
  );
}
