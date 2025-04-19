"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import useSWR from "swr";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { StockDescription, StockDetailsResponse } from "@/types/stocks";

import { getStockDetails } from "../api/stocks";

interface StockCardProps {
  stock: StockDescription;
  className?: string;
}

export const StockCard = ({ stock, className }: StockCardProps) => {
  const {
    data: stockDetails,
    isLoading,
    error,
  } = useSWR<StockDetailsResponse>(stock.symbol, () =>
    getStockDetails(stock.symbol)
  );

  if (isLoading) {
    return (
      <Card className={cn("w-full", className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[60px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-4" />
          <div className="mt-4">
            <Skeleton className="h-4 w-[60px] mb-2" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={cn("w-full", className)}>
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertDescription>
              Failed to load stock details for {stock.displaySymbol}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  const isPositive = stockDetails?.d && stockDetails.d > 0;
  const isNegative = stockDetails?.d && stockDetails.d < 0;

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {stock.displaySymbol}
        </CardTitle>
        <Badge variant="default">{stock.type}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{stock.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Current Price</p>
            <p className="text-sm font-medium">
              ${stockDetails?.c?.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Change</p>
            <div
              className={cn(
                "flex items-center gap-1",
                isPositive && "text-green-600",
                isNegative && "text-red-600"
              )}
            >
              {isPositive && <ArrowUp className="h-3 w-3" />}
              {isNegative && <ArrowDown className="h-3 w-3" />}
              <span className="text-sm font-medium">
                ${Math.abs(stockDetails?.d || 0).toFixed(2)} (
                {stockDetails?.dp?.toFixed(2)}%)
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">High/Low</p>
            <p className="text-sm font-medium">
              ${stockDetails?.h?.toFixed(2)} / ${stockDetails?.l?.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Open</p>
            <p className="text-sm font-medium">
              ${stockDetails?.o?.toFixed(2)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
