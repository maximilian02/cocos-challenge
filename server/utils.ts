import axios from "axios"
import type { OrderOperation } from "../src/types"
const PORTFOLIO_GET_URL = "https://dummy-api-topaz.vercel.app/portfolio"
const INSTRUMENTS_GET_URL = "https://dummy-api-topaz.vercel.app/instruments"
const SEARCH_GET_URL = (ticker: string) =>
  `https://dummy-api-topaz.vercel.app/search?query=${ticker}`
const ORDERS_POST_URL = "https://dummy-api-topaz.vercel.app/orders"

const getInstruments = async () =>
  axios
    .get(INSTRUMENTS_GET_URL)
    .then((res) => {
      return [...res.data]
    })
    .catch((err) => {
      console.log("Error: ", err.message)
    })

const getPortfolio = async () =>
  axios
    .get(PORTFOLIO_GET_URL)
    .then((res) => {
      return [...res.data]
    })
    .catch((err) => {
      console.log("Error: ", err.message)
    })

const getSearch = async (ticker: string) =>
  axios
    .get(SEARCH_GET_URL(ticker))
    .then((res) => {
      return [...res.data]
    })
    .catch((err) => {
      console.log("Error: ", err.message)
    })

const postOrders = async (orderData: OrderOperation) =>
  axios
    .post(ORDERS_POST_URL, orderData)
    .then((res) => {
      return [...res.data]
    })
    .catch((err) => {
      console.log("Error: ", err.message)
    })

export { getInstruments, getPortfolio, getSearch, postOrders }
