import { StockDescription } from "@/types/stocks";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StocksState {
  stocks: StockDescription[];
  setStocks: (
    stocks:
      | StockDescription[]
      | ((stocks: StockDescription[]) => StockDescription[])
  ) => void;
}

export const useStocksStore = create<StocksState>()(
  persist(
    (set) => ({
      stocks: [],
      setStocks: (
        stocks:
          | StockDescription[]
          | ((stocks: StockDescription[]) => StockDescription[])
      ) =>
        set((state) => ({
          stocks: typeof stocks === "function" ? stocks(state.stocks) : stocks,
        })),
    }),
    {
      name: "syMonitorFavorites",
    }
  )
);
