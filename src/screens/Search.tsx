import { route } from "preact-router"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { TableViz } from "../components/TableViz"
import { SEARCH_GET_URL } from "./Utils"
import { useEffect, useRef, useState } from "preact/hooks"
import { fetchInstruments } from "./Instruments"

export function Search(props: any) {
  const [ticker, setTicker] = useState(props?.ticker ?? "DYC")
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchSearch = async (ticker: string = "DYC") => {
    return axios.get(SEARCH_GET_URL(ticker))
  }

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => fetchSearch(props?.ticker),
    queryKey: ["search"],
  })

  const { data: dataInstruments } = useQuery({
    queryFn: () => fetchInstruments(),
    queryKey: ["instruments"],
  })

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(event?.currentTarget.value.toUpperCase())
  }

  const searchAction = async () => {
    route(`/search/${ticker}`)
    refetch()
  }

  useEffect(() => {
    route(`/search/${ticker}`)
    refetch()
  }, [ticker])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="search">
        <input
          autoFocus
          type="text"
          placeholder="Ticker ..."
          value={ticker}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button onClick={searchAction}>Buscar</button>
      </div>
      {/*  TODO: Fix naming to avoid double data.data */}
      <TableViz
        list={ticker ? data?.data : dataInstruments?.data}
        name="Listado de activos"
      />
    </>
  )
}
