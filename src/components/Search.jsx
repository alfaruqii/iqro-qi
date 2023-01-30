import { useState } from "react"
import { useQuery } from "react-query"
import { FetchApi } from "../FetchApi"
import { Link } from "react-router-dom"
import { Loading } from "./Loading"
import { Footer } from "./Footer"

export const Search = () => {
  const [selectedSurat, setSelectedSurat] = useState(1)
  const { data, status } = useQuery({
    queryKey: ["search"],
    queryFn: () => FetchApi()
  })
  const selectSurat = (nomor) => {
    setSelectedSurat(nomor)
  }
  if (status === "loading") return <Loading />
  if (status === "success") return (
    <>
      <div className="flex min-h-screen justify-center ">
        <div className="flex flex-col pt-44">
          <div className="mb-2">
            <p>Search Surat To Read</p>
          </div>
          <select className="p-2 border rounded-sm">
            {data.map((surat) => {
              return (
                <>
                  <option key={surat.nomor} onClick={() => selectSurat(surat.nomor)} className="bg-gray-500">
                    {surat.nama_latin}
                  </option>
                </>
              )
            })}
          </select>
          <Link to={`/surat/${selectedSurat}`}>
            <button className="rounded-sm border p-2 mt-2">
              Pergi Membaca
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
