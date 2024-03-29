import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Loading } from "../../components/Loading";
import { FetchApi } from "../../FetchApi";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";

export default function Surat() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    })
  }, [pathname])
  const { nomor } = useParams();
  const { data, status } = useQuery({
    queryKey: ["surats", nomor],
    queryFn: () => FetchApi(nomor),
  });
  if (status === "loading") return <Loading />;
  if (status === "success")
    return (
      <div className="p-4">
        <div className="">
          <div className="flex flex-row pb-3">
            <h1 className="mr-2">{data.data.nomor}.</h1>
            <p className="mr-1 text-2xl font-am sm:text-3xl">{data.data.nama}</p>
            <p className="sm:text-xl">({data.data.namaLatin})</p>
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
                  <p className="py-5 text-3xl font-am">
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
            {Number(nomor) !== 1 ? (
              <button className="p-2 border rounded-sm">
                <Link to={`/surat/${Number(nomor) - 1}`}>Ayat Sebelumnya</Link>
              </button>
            ) : (
              ""
            )}
            {Number(nomor) !== 114 ? (
              <button className="p-2 border rounded-sm">
                <Link to={`/surat/${Number(nomor) + 1}`}>Ayat Selanjutnya</Link>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
}
