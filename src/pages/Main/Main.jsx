import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"
import React, { useContext } from 'react';
import { IqroContext } from "../../IqroProvider"
import { Link } from "react-router-dom"
// import { FetchApi } from "../../FetchApi"

export default function Main() {
  const surats = useContext(IqroContext)
  return <>
    <Card className='p-10'>
      {surats.map((surat) => {
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
                <Link to={`/surat/${surat.nomor}`}>Mulai Membaca :]</Link>
              </button>
            </Text>
          </CardBody>
        </div>
      })}
    </Card>
  </>
}
