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
  // console.log()
  if (status === "loading") return <Loading />
  if (status === "success") return (
    <div>
      <div className="p-4">
        <div className="flex">
          <p className="mr-2">{data.nama}</p>
          <p>({data.nama_latin})</p>
        </div>
        <p>Arti : {data.arti}</p>
        <p>Jumlah Ayat : {data.jumlah_ayat}</p>
        <p className="mb-2">Tempat turun : {data.tempat_turun}</p>
        {data.tafsir.map((taf) => {
          return <div key={taf.ayat} className="p-4 border mb-4 shadow sm:mb-8">
            <p className="font-bold">
              Ayat : {taf.ayat}
            </p>
            <p>
              Tafsir : {taf.tafsir}
            </p>
          </div>
        })}
      </div>
    </div>
  )
}
