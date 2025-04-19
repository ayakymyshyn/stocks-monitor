import { NextResponse } from "next/server";

import { StockSearchResponse } from "@/types/stocks";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const res = await fetch(`https://finnhub.io/api/v1/search?q=${query}`, {
    headers: {
      "X-Finnhub-Token": process.env.FINNHUB_API_KEY!,
    },
  });

  const data: StockSearchResponse = await res.json();

  return NextResponse.json(data);
}
