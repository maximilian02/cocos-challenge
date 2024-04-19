const ORDER_STATUS_PENDING = "**PENDING**"
const ORDER_STATUS_FILLED = "**FILLED**"
const ORDER_STATUS_REJECTED = "**REJECTED**"

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

export type PortfolioItem = {
  instrument_id: number
  ticker: string
  quantity: number
  last_price: number
  close_price: number
  avg_cost_price: number
}

export interface OrderOperation {
  instrument_id: number
  side: string
  type: "MARKET" | "LIMIT"
  quantity: number
  price?: number
}
