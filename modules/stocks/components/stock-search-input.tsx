"use client";

import { AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { useStockSearchInput } from "../hooks";
import { StockSearchResults } from "./stock-search-results";

export const StockSearchInput = () => {
  const {
    isSearchResultsVisible,
    inputValue,
    onChange,
    onAddToFavorites,
    popoverRef,
    searchResults,
    isLoading,
    error,
  } = useStockSearchInput();

  return (
    <div className="relative mx-4 w-96" ref={popoverRef}>
      <div className="relative">
        <Input
          placeholder="Search stocks (e.g., AAPL, Tesla, MSFT)"
          className={cn(error && "border-red-500 focus-visible:ring-red-500")}
          value={inputValue}
          onChange={onChange}
          disabled={isLoading}
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        )}
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-500" />
        )}
      </div>
      {isSearchResultsVisible && (
        <StockSearchResults
          results={searchResults?.result ?? []}
          onAddToFavorites={onAddToFavorites}
        />
      )}
    </div>
  );
};
