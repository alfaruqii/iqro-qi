import React from 'react';
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { Loading } from "../../components/Loading"
import { FetchApi } from "../../FetchApi"
import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer"

export default function Surat() {
  const { nomor } = useParams()
  // const specificSurat = state.nomor[Object.keys(nomor)]
  const { data, status, } = useQuery({
    queryKey: ["surats", nomor],
    queryFn: () => FetchApi(nomor),
  })
  // console.log(isLoading)
  if (status === "loading") return <Loading />
  // if (isLoading === true) return <Loading />
  if (status === "success") return (
    <div className='p-4'>
      <div className=''>
        <div className='flex flex-row pb-3'>
          <h1 className='mr-2'>
            {data.nomor}.
          </h1>
          <p className='mr-1 text-xl font-am'>
            {data.nama}
          </p>
          <p>
            ({data.nama_latin})
          </p>
        </div>
        <div className='grid gap-8'>
          {data.ayat.map((surat) => {
            return (
              <div className='rounded-sm p-3 border shadow' key={surat.nomor}>
                <div className='pb-5'>
                  <p className='border-b-2 border-gray-400 w-fit'>
                    Ayat ke {surat.nomor}
                  </p>
                </div>
                <p className='text-2xl pb-5 sm:text-2xl font-am'>
                  {surat.ar}
                </p>
                <div className='pb-5'>
                  <p className='font-bold'>
                    Latin :
                  </p>
                  {surat.tr}
                </div>
                <div>
                  <p className='font-bold'>
                    Arti :
                  </p>
                  {surat.idn}
                </div>
                <div>
                  <button className='p-2 border rounded-sm mt-2'>
                    <Link to={`/tafsir/${nomor}`}>Baca Tafsir</Link>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
