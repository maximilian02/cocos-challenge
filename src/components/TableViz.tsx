import type { Instrument, PortfolioItem } from "../types"
import "./TableViz.scss"

const PORTFOLIO_TYPE = "portfolio"
const INSTRUMENTS_TYPE = "instruments"

type TableVizProps = {
  name?: string
  list: any[]
  type?: "instruments" | "portfolio"
}

// TODO: extract business rule
const earningReturn = (lastPrice: number, closePrice: number) => {
  const round = (price: number) =>
    Math.round((Number(price) + Number.EPSILON) * 100) / 100
  const result = round(lastPrice) - round(closePrice)
  return result.toFixed(2)
}

export function TableViz({
  name = "Placeholder",
  list = [],
  type = "instruments",
}: TableVizProps) {
  const instrumentsRowSet = () => (
    <>
      <tr>
        <th>Ticker</th>
        <th>Nombre</th>
        <th>Último precio</th>
        <th>Retorno</th>
      </tr>
      {list.length > 0 ? (
        list?.map((item: Instrument) => (
          <tr>
            <td data-cell="Ticket">{item.ticker}</td>
            <td data-cell="Nombre" className="name">
              {item.name}
            </td>
            <td data-cell="Último precio">{item.last_price}</td>
            <td data-cell="Retorno">
              {earningReturn(item.last_price, item.close_price)}
            </td>
          </tr>
        ))
      ) : (
        <div class="no-results">No encontramos resultados.</div>
      )}
    </>
  )

  const portfolioRowSet = () => (
    <>
      <tr>
        <th>Ticker</th>
        <th>Cantidad</th>
        <th>Valor de mercado</th>
        <th>Ganancia</th>
        <th>Rendimiento total</th>
      </tr>
      {list.length > 0 ? (
        list?.map((item: PortfolioItem) => (
          <tr>
            <td data-cell="Ticker">{item.ticker}</td>
            <td data-cell="Cantidad">{item.quantity}</td>
            <td data-cell="Valor de mercado">
              {item.quantity & item.last_price}
            </td>
            <td data-cell="Ganancia">
              {earningReturn(item.close_price, item.avg_cost_price)}
            </td>
            <td data-cell="Rendimiento">
              {earningReturn(item.last_price, item.close_price)}
            </td>
          </tr>
        ))
      ) : (
        <div>No encontramos resultados.</div>
      )}
    </>
  )

  const dataTypeMap = {
    [PORTFOLIO_TYPE]: () => portfolioRowSet(),
    [INSTRUMENTS_TYPE]: () => instrumentsRowSet(),
  }
  return (
    <table name={name} alt={name}>
      <caption>{name}</caption>
      {dataTypeMap[type]()}
    </table>
  )
}
