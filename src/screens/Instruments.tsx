import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { Card } from "../components/Card"
import { INSTRUMENTS_GET_URL } from "../screens/Utils"

const fetchInstruments = async () => axios.get(INSTRUMENTS_GET_URL)

export function Instruments() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchInstruments(),
    queryKey: ["instruments"],
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log("data", data?.data)

  return (
    <>
      <h2>Instruments</h2>
      <ul class="cards">
        <Card title="Instrumentos" type={1} section="/instruments" />
      </ul>
    </>
  )
}
