import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const InstrumenAmiAkademik = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Instrumen AMI Akademik</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="ppepp"
          title="Instrumen AMI Akademik"
        />
        <section className="mt-5 leading-8 text-justify">
          <p>
            Audit Mutu Internal (AMI) adalah salah satu kegiatan rutin yang
            dilakukan Badan Penjaminan Mutu (BPM) pada setiap tahun sebagai
            kegiatan evaluasi implementasi sistem penjaminan mutu akademik di
            semua program studi di lingkungan Universitas Semarang. Kegiatan
            evaluasi implementasi sistem penjaminan mutu akademik dilakukan
            dengan menggunakan Instrumen AMI yang mengacu pada matriks Penilaian
            BAN-PT berbasis IAPS 4.0.
          </p>
          <p className="mt-5">
            Adapun berkas instrumen AMI Prodi dapat dilihat{" "}
            <a
              href="https://drive.google.com/drive/folders/1y01SiXAPSlWxZlirMUOx5VJ8452F0ZOE?usp=sharing"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              disini
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default InstrumenAmiAkademik;
