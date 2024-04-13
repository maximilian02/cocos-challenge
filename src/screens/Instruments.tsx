import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { TableViz } from "../components/TableViz"
import { INSTRUMENTS_GET_URL } from "../screens/Utils"

export const fetchInstruments = async () => axios.get(INSTRUMENTS_GET_URL)

export function Instruments() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchInstruments(),
    queryKey: ["instruments"],
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {/*  TODO: Fix naming to avoid double data.data */}
      <TableViz
        list={data?.data}
        name="Cotizaciones - Listado de instrumentos"
      />
    </>
  )
}
