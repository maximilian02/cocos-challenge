export const API_URL = "http://localhost:3000"
export const PORTFOLIO_GET_URL = `${API_URL}/portfolio`
export const INSTRUMENTS_GET_URL = `${API_URL}/instruments`
export const SEARCH_GET_URL = (ticker: string) => `${API_URL}/search/${ticker}`
export const ORDERS_POST_URL = `${API_URL}/orders`
