import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";
import Image from "next/image";
import strukturOrganisasi from "../../../../public/img/struktur-organisasi.png";

const StrukturOrganisasi = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Profil BPM</li>
          <li>Struktur Organisasi</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="struktur-organisasi"
          title="Struktur Organisasi"
        />
        <section>
          <p className="mt-3">
            SK Rektor Universitas Semarang Tentang PENGANGKATAN PEJABAT
            STRUKTURAL AKADEMIK UNIVERSITAS SEMARANG PERIODE JABATAN TAHUN 2021
            -2025. Dapat dilihat pada{" "}
            <a
              href="https://bpm.usm.ac.id/public/struktur_organisasi/pejabat_struktural.pdf"
              target="_blank"
              className="text-blue-700"
            >
              link ini
            </a>
          </p>
          <Image
            src={strukturOrganisasi}
            alt="struktur-organisasi"
            className="w-full"
          />
        </section>
      </div>
    </main>
  );
};

export default StrukturOrganisasi;
