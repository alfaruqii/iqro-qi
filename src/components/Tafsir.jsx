import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FetchApi } from "../FetchApi";
import { Loading } from "./Loading";

export const Tafsir = () => {
  const { nomor } = useParams();
  const { data, status } = useQuery({
    queryKey: ["tafsir", nomor],
    queryFn: () => FetchApi(nomor, true),
  });
  if (status === "loading") return <Loading />;
  if (status === "success")
    return (
      <div>
        <div className="p-4">
          <div className="flex">
            <p className="mr-2">{data.data.nama}</p>
            <p>({data.data.namaLatin})</p>
          </div>
          <p>Arti : {data.data.arti}</p>
          <p>Jumlah Ayat : {data.data.jumlahAyat}</p>
          <p className="mb-2">Tempat turun : {data.data.tempatTurun}</p>
          <p>{data.data.deskripsi}</p>
        </div>
      </div>
    );
};
