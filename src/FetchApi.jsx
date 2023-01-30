import axios from "axios"


export const FetchApi = async (nomor, tafsir = false) => {
  let data
  if (tafsir !== false) {
    await axios(`https://equran.id/api/tafsir/${nomor}`)
      .then((res) => {
        data = res.data
      })
      .catch((err) => err.message)
  } else if (nomor) {
    await axios.get(`https://equran.id/api/surat/${nomor}`)
      .then((res) => {
        data = res.data
      }).catch((err) => err.message)
  } else {
    await axios.get(`https://equran.id/api/surat/`)
      .then((res) => {
        data = res.data
      }).catch((err) => err.message)
  }
  return data
}
