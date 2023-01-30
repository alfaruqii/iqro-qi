import axios from "axios"


export const FetchApi = async (nomor, tafsir = false) => {
  let data
  console.log(nomor)
  if (nomor) {
    await axios.get(`https://equran.id/api/surat/${nomor}`)
      .then((res) => {
        data = res.data
      })
      .catch((err) => err.message)
  } else if (tafsir) {
    await axios(`https://equran.id/api/tafsir/${nomor}`).then((res) => {
      data = res.data
    }).catch((err) => err.message)
  } else {
    await axios("https://equran.id/api/surat/").then((res) => {
      data = res.data
    }).catch((err) => err.message)
  }
  return data
}
