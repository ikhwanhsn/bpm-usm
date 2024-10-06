import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const SopPelaksanaanAmiProdi = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Prosedur Mutu Pelaksanaan AMI Prodi</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="sop-pelaksanaan-ami-prodi"
          title="Prosedur Mutu Pelaksanaan AMI Prodi"
        />
        <section className="mt-7 leading-8 text-justify">
          <h1 className="text-2xl font-bold text-center mb-5">
            Prosedur AMI Universitas Semarang
          </h1>
          <p>
            Dokumen pelaksanaan AMI Prodi dapat dilihat pada{" "}
            <a
              href="https://drive.google.com/file/d/1XgoDfk03dX2JRVvV4o3gfsHvp4zAxgyd/view?usp=sharing"
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

export default SopPelaksanaanAmiProdi;
