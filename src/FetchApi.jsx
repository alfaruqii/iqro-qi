import axios from "axios";

export const FetchApi = async (nomor, tafsir = false) => {
  let data;
  if (tafsir !== false) {
    await axios
      .request({
        url: `https://equran.id/api/v2/tafsir/${nomor}`,
        method: "get",
      })
      .then((res) => {
        data = res.data;
      })
      .catch((err) => err.message);
  } else if (nomor) {
    await axios
      .request({
        url: `https://equran.id/api/v2/surat/${nomor}`,
        method: "get",
      })
      .then((res) => {
        data = res.data;
      })
      .catch((err) => err.message);
  } else {
    await axios
      .request({
        url: `https://equran.id/api/v2/surat`,
        method: "get",
      })
      .then((res) => {
        data = res.data;
      })
      .catch((err) => err.message);
  }
  return data;
};
