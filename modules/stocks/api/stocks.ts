import { StockDetailsResponse, StockSearchResponse } from "@/types/stocks";

export const searchStocks = async (query: string) => {
  const response = await fetch(`/api/search-symbol?query=${query}`);
  const data: StockSearchResponse = await response.json();

  return data;
};

export const getStockDetails = async (symbol: string) => {
  const response = await fetch(`/api/quote?symbol=${symbol}`);
  const data: StockDetailsResponse = await response.json();

  return data;
};
