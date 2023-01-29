import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"
import React from 'react';
import { Loading } from "../../components/Loading"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { FetchApi } from "../../FetchApi"

export default function Main() {
  const { data, isSuccess, isFetching } = useQuery(
    {
      queryKey: ["surats"],
      queryFn: () => FetchApi(),
      staleTime: 10000 * 600
    }
  )
  if (isFetching === true) {
    return <Loading />
  }
  return <>
    <Card className='p-10'>
      {isSuccess && data?.map((surat) => {
        return <div className="p-5 mb-5 shadow-sm border " key={surat.nomor}>
          <CardHeader >
            <Heading size="md" className="border-b pb-1 mb-2">
              {surat.nama} ({surat.nama_latin})
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              <p >Artinya : {surat.arti}</p>
              <button className='p-2 mt-1 shadow-sm rounded-sm border'>
                <Link to={`/surat/${surat.nomor}`} state={{ nomor: surat.nomor }}>Mulai Membaca :]</Link>
              </button>
            </Text>
          </CardBody>
        </div>
      })}
    </Card>
  </>
}
