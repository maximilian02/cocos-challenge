import { Card } from "../components/Card"

export function Instruments() {
  return (
    <>
      <h2>Instruments</h2>
      <ul class="cards">
        <Card title="Instrumentos" type={1} section="/instruments" />
      </ul>
    </>
  )
}
