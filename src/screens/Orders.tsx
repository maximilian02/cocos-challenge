import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import { INSTRUMENTS_GET_URL, ORDERS_POST_URL } from "../screens/Utils"
import "./Orders.scss"
import type { Instrument, OrderOperation } from "../types"
import { useState } from "preact/hooks"

export const fetchInstruments = async () => axios.get(INSTRUMENTS_GET_URL)
export const postOrder = async (data: OrderOperation) => {
  console.log("data", data)
  axios.post(ORDERS_POST_URL, data)
}

export function Orders() {
  const [side, setSide] = useState("BUY")
  const [searchTerm, setSearchTerm] = useState("")
  const [quantity, setQuantity] = useState(0)
  const { data: instruments, isLoading } = useQuery({
    queryFn: () => fetchInstruments(),
    queryKey: ["instruments"],
  })

  const { mutateAsync: addOrderMutation } = useMutation({
    mutationFn: postOrder,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  const tickerList = instruments?.data.map((item: Instrument) => item?.ticker)
  const handleTickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event?.currentTarget.value.toUpperCase())

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(Number(event?.currentTarget.value))

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSide(event.currentTarget.value)
  const handleClick = (ticker: string) => setSearchTerm(ticker)
  const handleNewOrder = async () => {
    const instrumentSelected = instruments?.data.find(
      (instrument: Instrument) => instrument?.ticker === searchTerm
    )
    try {
      await addOrderMutation({
        instrument_id: instrumentSelected.id,
        side,
        // TODO: Because a lack of time doing this challenge (sorry guys)
        // im just covering scope on market type. LIMIT will be out for now.
        type: "MARKET",
        quantity,
        price: instrumentSelected.last_price,
      })
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }

  return (
    <div className="orders">
      <div className="form-box">
        <h2 className="new-order">Nueva orden</h2>
        <form>
          <div className="field-box">
            <input
              type="text"
              name="ticker"
              value={searchTerm}
              onChange={handleTickerChange}
            />
            <label>Ticker</label>

            <p className="available">Instrumentos disponibles</p>
            <div className="results">
              {tickerList
                ?.filter((ticker: string) => ticker.includes(searchTerm))
                .map((ticker: string) => (
                  <div className="ticker" onClick={() => handleClick(ticker)}>
                    {ticker}
                  </div>
                ))}
            </div>
          </div>
          <div className="field-box">
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <label>Cantidad</label>
          </div>
          <div className="field-box">
            <select onChange={handleChangeType}>
              <option value="SELL">VENDER</option>
              <option value="BUY">COMPRAR</option>
            </select>
          </div>
          <a href="#" onClick={handleNewOrder}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enviar!
          </a>
        </form>
      </div>
    </div>
  )
}
