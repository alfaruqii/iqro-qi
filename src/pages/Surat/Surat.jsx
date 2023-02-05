import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Loading } from "../../components/Loading";
import { FetchApi } from "../../FetchApi";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";

export default function Surat() {
  const { nomor } = useParams();
  // const specificSurat = state.nomor[Object.keys(nomor)]
  const { data, status } = useQuery({
    queryKey: ["surats", nomor],
    queryFn: () => FetchApi(nomor),
  });
  if (status === "loading") return <Loading />;
  if (status === "success") console.log(data.data);
  console.log(nomor);
  return (
    <div className="p-4">
      <div className="">
        <div className="flex flex-row pb-3">
          <h1 className="mr-2">{data.data.nomor}.</h1>
          <p className="mr-1 text-xl font-am">{data.data.nama}</p>
          <p>({data.data.namaLatin})</p>
        </div>
        <div className="grid gap-8">
          {data.data.ayat.map((surat) => {
            return (
              <div
                className="rounded-sm p-3 border shadow-sm"
                key={surat.nomorAyat}
              >
                <div className="pb-5">
                  <p className="border-b-2 border-gray-400 w-fit">
                    Ayat ke {surat.nomorAyat}
                  </p>
                </div>
                <p className="text-2xl pb-5 sm:text-2xl font-am">
                  {surat.teksArab}
                </p>
                <div className="pb-5">
                  <p className="font-bold">Latin :</p>
                  {surat.teksLatin}
                </div>
                <div>
                  <p className="font-bold">Arti :</p>
                  {surat.teksIndonesia}
                </div>
                <div>
                  <button className="p-2 border rounded-sm mt-2">
                    <Link to={`/tafsir/${nomor}`}>Baca Tafsir</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between mt-4">
          <button className="p-2 border rounded-sm">
            <Link to={`/surat/${Number(nomor) - 1}`}>Ayat Sebelumnya</Link>
          </button>
          <button className="p-2 border rounded-sm">
            <Link to={`/surat/${Number(nomor) + 1}`}>Ayat Selanjutnya</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
