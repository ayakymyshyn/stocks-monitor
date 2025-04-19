import { StockList } from "@/modules/stocks/components";

export default function ManageMyStocksPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage My Stocks</h1>
      </div>
      <div className="@container/main flex flex-1 flex-col gap-2">
        <StockList />
      </div>
    </div>
  );
}
