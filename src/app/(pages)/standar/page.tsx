import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const Standar = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Standar</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="standar" title="Standar" />
        <section className="mt-7 leading-8 text-justify text-base">
          <p>
            Universitas Semarang telah memiliki 24 Standar Nasional Pendidikan
            Tinggi (SNDikti) dan 13 Standar Perguruan Tinggi yang terdiri 3
            Standar Akademik dan 10 Standar Non Akademik
          </p>
          <h1 className="font-bold mt-5">
            a. Standar Nasional Pendidikan Tinggi
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Standar;
