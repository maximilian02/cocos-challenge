import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { TableViz } from "../components/TableViz"
import { PORTFOLIO_GET_URL } from "../screens/Utils"

const fetchPortfolio = async () => axios.get(PORTFOLIO_GET_URL)

export function Portfolio() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchPortfolio(),
    queryKey: ["portfolio"],
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {/*  TODO: Fix naming to avoid double data.data */}
      <TableViz list={data?.data} type="portfolio" name="Listado de activos" />
    </>
  )
}
