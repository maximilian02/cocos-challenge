import express from "express"
import { getInstruments, getPortfolio, getSearch, postOrders } from "./utils"
import type { Instrument, PortfolioItem } from "./types"

const app = express()
const port = 3000

// Disclaimer:  just a very dummy set of endpoints
// to get and deliver the challenge data

app.get("/instruments", async (req, res) => {
  const result = await getInstruments()
  res.json(result as Instrument[])
})

app.get("/portfolio", async (req, res) => {
  const result = await getPortfolio()
  res.json(result as PortfolioItem[])
})

app.get("/search/:ticker", async (req, res) => {
  const result = await getSearch(req.params.ticker)
  res.json(result as Instrument[])
})

app.post("/orders", async (req, res) => {
  // const result = await postOrders(req.body.data)
  res.json({ result: "OKAY" })
})

app.get("/*", (req, res) => {
  // console.log("ERROR >> " + req);
  res.json({ message: "404, nope" })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
