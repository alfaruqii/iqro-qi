import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { FetchApi } from "../FetchApi"
import { Loading } from "./Loading"

export const Tafsir = () => {
  const { nomor } = useParams()
  const { data, status } = useQuery({
    queryKey: ["tafsir", nomor],
    queryFn: () => FetchApi(nomor, true)
  })
  console.log(data)
  if (status === "loading") return <Loading />
  if (status === "success") return (
    <div>
      <div>
        <p>{data.nama}</p>
        <p>{data.nama_latin}</p>
      </div>
    </div>
  )
}
