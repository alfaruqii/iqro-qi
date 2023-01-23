import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"

function App() {
  const [surats, setSurats] = useState([])
  useEffect(() => {
    fetch("https://equran.id/api/surat/").then((res) => {
      return res.json()
    }).then((surat) => setSurats(surat)).catch((err) => err.message)
  }, [])
  return (
    <Router>
      <Card className='p-10 '>
        {surats.map((surat) => {
          return <div className="p-5 mb-5 shadow-sm border " key={surat.nomor}>
            <CardHeader >
              <Heading size="md">
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
    </Router>
  );
}

export default App;
