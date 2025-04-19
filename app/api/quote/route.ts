import { NextRequest, NextResponse } from "next/server";

import { StockDetailsResponse } from "@/types/stocks";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol");

  if (!symbol) {
    return NextResponse.json(
      { error: "Missing symbol param" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}`,
      {
        headers: {
          "X-Finnhub-Token": process.env.FINNHUB_API_KEY!,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Finnhub" },
        { status: res.status }
      );
    }

    const data: StockDetailsResponse = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
