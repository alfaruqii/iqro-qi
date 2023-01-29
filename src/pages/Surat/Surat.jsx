import React from 'react';
import { useQuery } from "react-query"
import { FetchApi } from "../../FetchApi"
import { useParams } from "react-router-dom"

export default function Surat() {
  const { nomor } = useParams()
  // const specificSurat = state.nomor[Object.keys(nomor)]
  const { data, isLoading } = useQuery({
    queryKey: ["surats", "surat"],
    queryFn: () => FetchApi(nomor)
  })
  console.log(data)
  return (
    <div>
      <div className='flex'>
        <h1>
          {data.nomor}
        </h1>
        <p>{data.nama}</p>
      </div>
    </div>
  )
}
