import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { FetchApi } from "../../FetchApi";
import { Footer } from "../../components/Footer";

export default function Main() {
  const {  data, status } = useQuery({
    queryKey: ["surats"],
    queryFn: () => FetchApi(),
  });
  if (status === "loading") {
    return <Loading />;
  }
  if(status === "error"){
    return <Error/>
  }
  if (status === "success")
    return (
      <>
        <Card className="p-10">
          {data?.data.map((surat) => {
            return (
              <div className="p-5 mb-5 shadow-sm border " key={surat.nomor}>
                <CardHeader>
                  <Heading
                    size="md"
                    className="border-b-2 border-gray-400 w-fit pb-1 mb-2"
                  >
                    <span className="font-am text-2xl">{surat.nama}</span> (
                    {surat.namaLatin})
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    <p>Artinya : {surat.arti}</p>
                    <button className="p-2 mt-1 shadow-sm rounded-sm border">
                      <Link
                        to={`/surat/${surat.nomor}`}
                        state={{ nomor: surat.nomor }}
                      >
                        Mulai Membaca :]
                      </Link>
                    </button>
                  </Text>
                </CardBody>
              </div>
            );
          })}
          <Footer />
        </Card>
      </>
    );
}
