import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const data = [
  {
    nomor: 1,
    nama: "Dr. Drs. Paulus Wardoyo, M.M.",
    fakultas: "Program Studi Magister Manajemen",
  },
  {
    nomor: 2,
    nama: "Dr. Zaenal Arifin, S.H., M.Kn.",
    fakultas: "Program Studi Magister Hukum",
  },
  {
    nomor: 3,
    nama: "Dr. Erwin Erlangga, S.Pd., M.Pd.",
    fakultas: "Program Studi Magister Psikologi",
  },
  {
    nomor: 4,
    nama: "Dr. Sukimin, S.H., M.H.",
    fakultas: "Fakultas Hukum",
  },
  {
    nomor: 5,
    nama: "Drs. Aprih Santoso, M.M.",
    fakultas: "Fakultas Ekonomi",
  },
  {
    nomor: 6,
    nama: "Susanto, S.E., M.M.",
    fakultas: "Program Studi D3 Manajemen Perusahaan",
  },
  {
    nomor: 7,
    nama: "Dwi Widi Pratito SN, S.E., M.M.",
    fakultas: "Program Studi S1 Manajemen",
  },
  {
    nomor: 8,
    nama: "Bonita Prabasari, S.Pd., M.Ak.",
    fakultas: "Program Studi S1 Akuntansi",
  },
  {
    nomor: 9,
    nama: "Diah Rahmawati, S.T., M.T.",
    fakultas: "Fakultas Teknik",
  },
  {
    nomor: 10,
    nama: "Lila Anggraini, S.T., M.T.",
    fakultas: "Program Studi S1 Teknik Sipil",
  },
  {
    nomor: 11,
    nama: "Harmini, S.T., M.Eng.",
    fakultas: "Program Studi S1 Teknik Elektro",
  },
  {
    nomor: 12,
    nama: "Andarina Aji Pamurti, S.T., M.T.",
    fakultas: "Program Studi S1 Perencanaan Wilayah dan Kota",
  },
  {
    nomor: 13,
    nama: "Ir. Sudjatinah, M.Si.",
    fakultas: "Fakultas Teknologi Pertanian",
  },
  {
    nomor: 14,
    nama: "Sri Widyawati, S.Psi., M.Si., psikolog",
    fakultas: "Fakultas Psikologi",
  },
  {
    nomor: 15,
    nama: "Atmoko Nugroho, S.T., M.Eng",
    fakultas: "Fakultas Teknologi Informasi dan Komunikasi",
  },
  {
    nomor: 16,
    nama: "Titis Handayani, S.Kom., M.Cs.",
    fakultas: "Program Studi S1 Sistem Informasi",
  },
  {
    nomor: 17,
    nama: "Nur Wakhidah, S.Kom., M.Cs.",
    fakultas: "Program Studi S1 Teknik Informatika",
  },
  {
    nomor: 18,
    nama: "Errika Dwi Setya Watie, S.Sos., M.I.Kom.",
    fakultas: "Program Studi S1 Ilmu Komunikasi",
  },
  {
    nomor: 19,
    nama: "Herman Novry Kristiansen Paninggiran, S.E., M.MPar",
    fakultas: "Program Studi S1 Pariwisata",
  },
];
const dataLama = [
  {
    nomor: 1,
    nama: "Muhammda Iftar Aryaputra, S.H., M.H.",
  },
  {
    nomor: 2,
    nama: "Martha Kurnia Asih, S.Psi., M.Si",
  },
  {
    nomor: 3,
    nama: "C. Hari Wibowo, S.Pt., M.P.",
  },
  {
    nomor: 4,
    nama: "Diah Rahmawati, S.T., M.T.",
  },
  {
    nomor: 5,
    nama: "Atmoko Nugroho, S.T., M.Eng.",
  },
  {
    nomor: 6,
    nama: "Haris Murwanto Paramitayana, S.E., M.M.",
  },
  {
    nomor: 7,
    nama: "Dr. Drs. Paulus Wardoyo, M.M.",
  },
  {
    nomor: 8,
    nama: "Ir. Supoyo, M.T.",
  },
];

const DaftarGugusKendaliMutu = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Daftar Gugus Kendali Mutu</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="daftar-gugus-kendali-mutu"
          title="Daftar Gugus Kendali Mutu"
        />
        <section className="mt-7 leading-8 text-justify">
          <p>
            Daftar gugus kendali mutu badan penjaminan mutu universitas semarang
            periode tahun 2022-2025 sebagai berikut:
          </p>
          <p>
            Surat keputusan rektor bisa dilihat pada{" "}
            <a
              href="https://drive.google.com/drive/folders/1ezEjAn07H0W7S6flma982b_smI0ie7C8?usp=share_link"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              link ini
            </a>
          </p>
          <table className="mt-5">
            <thead>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Fakultas</th>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.nomor}>
                  <td>{item.nomor}</td>
                  <td>{item.nama}</td>
                  <td>{item.fakultas}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5">
            Daftar gugus kendali mutu badan penjaminan mutu universitas semarang
            periode tahun 2017-2021 sebagai berikut:
          </p>
          <p>
            Surat keputusan rektor bisa dilihat pada{" "}
            <a
              href="https://bpm.usm.ac.id/public/gkm/SURAT-TUGAS-GUGUS-KENDALI-MUTU-BPM%20PERIODE-2017-2021.pdf"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              link ini
            </a>
          </p>
          <table className="mt-5">
            <thead>
              <th>Nomor</th>
              <th>Nama</th>
            </thead>
            <tbody>
              {dataLama.map((item) => (
                <tr key={item.nomor}>
                  <td>{item.nomor}</td>
                  <td>{item.nama}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default DaftarGugusKendaliMutu;
