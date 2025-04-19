import { useClickOutside } from "@/hooks/use-click-outside";
import { StockDescription, StockSearchResponse } from "@/types/stocks";
import { useRef, useState } from "react";
import useSWR from "swr";
import { searchStocks } from "../api/stocks";
import { useDebounce } from "@/hooks/use-debounce";
import { useStocksStore } from "@/zustand/use-stocks-store";

export const useStockSearchInput = () => {
  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const popoverRef = useRef<HTMLDivElement>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);

  const { setStocks } = useStocksStore();

  const {
    data: searchResults,
    isLoading,
    error,
  } = useSWR<StockSearchResponse>(
    debouncedInputValue,
    () => searchStocks(debouncedInputValue),
    {
      onSuccess: () => {
        setIsSearchResultsVisible(true);
      },
    }
  );

  useClickOutside(popoverRef, () => {
    setIsSearchResultsVisible(false);
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onAddToFavorites = (stock: StockDescription) => {
    setIsSearchResultsVisible(false);
    setInputValue("");
    setStocks((previousStocks) => [...previousStocks, stock]);
  };

  return {
    isSearchResultsVisible: isSearchResultsVisible,
    inputValue,
    onChange,
    onAddToFavorites,
    popoverRef,
    searchResults,
    isLoading,
    error,
  };
};
