"use client";

import { useEffect, useRef } from "react";
import { Plus } from "lucide-react";

import { useStocksStore } from "@/zustand/use-stocks-store";

export const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);
  const { stocks } = useStocksStore();

  useEffect(() => {
    if (stocks.length === 0) return;

    const widgetScriptId = "tradingview-widget-script";

    const oldScript = document.getElementById(widgetScriptId);
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = widgetScriptId;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: stocks.map((stock) => [stock.displaySymbol, `${stock.symbol}|1D`]),
      chartOnly: false,
      width: "100%",
      height: "300%",
      locale: "en",
      colorTheme: "light",
      autosize: false,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "medium",
      lineWidth: 2,
      lineType: 0,
      dateRanges: [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M",
      ],
    });

    container.current?.appendChild(script);
  }, [stocks]);

  if (stocks.length === 0) {
    return (
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div className="flex-1 min-w-0 pr-4">
          <div className="text-sm text-muted-foreground">
            No stocks selected for chart
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-xs text-muted-foreground">
            Add stocks to see chart
          </div>
          <Plus className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          TradingView
        </a>
      </div>
    </div>
  );
};
