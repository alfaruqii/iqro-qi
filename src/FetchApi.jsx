import { useState, useEffect } from "react"
import axios from "axios"


export const FetchApi = async (param) => {
  const data = param ? await axios.get(`https://equran.id/api/surat/${param}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => err.message) : await axios("https://equran.id/api/surat/").then((res) => {
      return res.data
    }).catch((err) => err.message)
  return data
}
