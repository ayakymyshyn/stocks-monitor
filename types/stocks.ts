export interface StockDescription {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export interface StockSearchResponse {
  count: number;
  result: StockDescription[];
}

export interface StockDetailsResponse {
  c: number; // current price
  d: number; // change
  dp: number; // percent change
  h: number; // high price of the day
  l: number; // low price of the day
  o: number; // open price of the day
  pc: number; // previous close price
}
