import { useLocation, useNavigate, useParams } from "react-router-dom"
import React, { useContext } from 'react';
import { IqroContext } from "../../IqroProvider"

export default function Surat(props) {
  // const navigate = useNavigate()
  // const specificSurat = state.nomor[Object.keys(nomor)]
  console.log(props.location)
  const surats = useContext(IqroContext)
  return (
    <div>
      {/* {surats[specificSurat - 1].nama} */}
    </div>
  )
}
