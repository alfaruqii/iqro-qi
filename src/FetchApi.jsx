import { useState, useEffect } from "react"
import axios from "axios"


export const FetchApi = async () => {
  const data = await axios.get("https://equran.id/api/surat/")
    .then((res) => {
      return res.data
    })
    .catch((err) => err.message)
  return data
}
