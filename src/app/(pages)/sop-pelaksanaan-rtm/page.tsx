import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const SopPelaksanaanRtm = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Prosedur Mutu Pelaksanaan RTM</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="sop-pelaksanaan-rtm"
          title="Prosedur Mutu Pelaksanaan RTM"
        />
        <section className="mt-7 leading-8 text-justify">
          <h1 className="text-2xl font-bold text-center mb-5">
            Prosedur RTM Universitas Semarang
          </h1>
          <p>
            Dokumen rapat tinjauan manajemen dapat dilihat pada{" "}
            <a
              href="https://drive.google.com/file/d/1ydfPPcItgA0Bg3RcgTWSeQf--w4Tvd58/view?usp=sharing"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              link ini
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default SopPelaksanaanRtm;
