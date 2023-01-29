import { useState } from "react"
import { useQuery } from "react-query"
import { FetchApi } from "../FetchApi"
import { Link } from "react-router-dom"
import { Loading } from "./Loading"

export const Search = () => {
  // const [surat, setSurat] = useState(0)
  const { data, status } = useQuery({
    queryKey: ["search"],
    queryFn: () => FetchApi()
  })
  // const searchSurat = (nomor) => {
  //   setSurat(nomor)
  // }
  console.log(data)
  if (status === "loading") return <Loading />
  if (status === "success") return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col">
        <div className="pt-10 mb-2">
          <p>Search Surat To Read</p>
        </div>
        <select className="p-2 border rounded-sm">
          {data.map((surat) => {
            return (
              <>
                <option value={surat?.nomor} className="bg-gray-500">
                  {surat.nama_latin}
                </option>
              </>
            )
          })}
        </select>
        <button className="border p-2 mt-2 rounded-sm">
          Pergi Membaca
        </button>
      </div>
    </div>
  )
}
