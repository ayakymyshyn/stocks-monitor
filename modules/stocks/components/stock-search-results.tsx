import { Plus, Search } from "lucide-react";

import { StockDescription } from "@/types/stocks";

interface StockSearchResultsProps {
  results: StockDescription[];
  onAddToFavorites: (stock: StockDescription) => void;
}

export const StockSearchResults = ({
  results,
  onAddToFavorites,
}: StockSearchResultsProps) => {
  if (results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50">
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <Search className="h-6 w-6 text-muted-foreground mb-1" />
          <p className="text-sm text-muted-foreground">No stocks found</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Try searching with a different term
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50">
      <div className="max-h-64 overflow-y-auto">
        {results.map((stock) => (
          <div
            key={stock.displaySymbol}
            className="group flex items-center justify-between p-2 hover:bg-accent cursor-pointer border-b last:border-b-0"
            onClick={() => onAddToFavorites(stock)}
          >
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center gap-2">
                <div className="font-medium text-sm">{stock.displaySymbol}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {stock.description}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Add
              </div>
              <Plus className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
