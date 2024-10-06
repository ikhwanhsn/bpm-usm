import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const InstrumenAmiNonAkademik = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Instrumen AMI Non Akademik</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="ppepp"
          title="Instrumen AMI Non Akademik"
        />
        <section className="mt-5 leading-8 text-justify">
          <p>
            Adapun berkas instrumen ami non akademik{" "}
            <a
              href="https://drive.google.com/drive/folders/1GC5KyypthSl2_3gccXAVNhLt5UA9Bctw?usp=sharing"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              disini
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default InstrumenAmiNonAkademik;
