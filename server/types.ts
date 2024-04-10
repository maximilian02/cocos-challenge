export type Asset = {
  instrument_id: number
  ticker: string
  quantity: number
  last_price: number
  close_price: number
  avg_cost_price: number
}

export type Instrument = {
  id: number
  ticker: string
  name: string
  type: string
  last_price: number
  close_price: number
}

export interface Portfolio {
  position: Array<Asset>
}

export interface OrderOperation {
  instrument_id: number
  side: "BUY" | "SELL"
  type: "MARKET" | "LIMIT"
  quantity: number
  price?: number
}
