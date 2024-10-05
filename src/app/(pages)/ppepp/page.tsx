import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";
import HeaderAllPages from "@/components/HeaderAllPages";

const PPEPP = () => {
  const dataEvaluasi = [
    {
      id: 1,
      bentuk: "Audit Mutu Internal",
      ruangLingkup: "Akademik Non Akademik",
      level: "Pencapaian kinerja berdasarkan kriteria BAN-PT",
      koordinator: "BPM",
      frequency: "Per Tahun",
    },
    {
      id: 2,
      bentuk: "Evaluasi diri",
      ruangLingkup: "Pencapaian kinerja berdasarkan kriteria BAN-PT",
      level: "Fakultas",
      koordinator: "PMF",
      frequency: "Per Tahun",
    },
    {
      id: 3,
      bentuk: "Evaluasi Rutin",
      ruangLingkup:
        "Kehadiran dosen, kehadiran mahasiswa, kesesuaian RPS, penelitian dan pengabdian masyarakat",
      level: "Prodi dan Fakultas",
      koordinator: "PMF Satgas Penjaminan Mutu Prodi",
      frequency: "Per Semester",
    },
    {
      id: 4,
      bentuk: "Evaluasi Kepuasan",
      ruangLingkup: "Akademik Non Akademik",
      level: "Prodi Fakultas Biro/Unit",
      koordinator: "BPM",
      frequency: "Per Semester Per Kegiatan",
    },
    {
      id: 5,
      bentuk: "Evaluasi Kinerja",
      ruangLingkup:
        "Key Performance Indikator Prodi, Fakultas, Biro, Unit (Indikator Kinerja Utama dan Indikator Kinerja Tambahan) yang tertuang pada Renstra dan Renop",
      level: "Prodi Fakultas Biro/Unit",
      koordinator: "BPM PMF",
      frequency: "Per Semester",
    },
  ];
  const dataPengendalian = [
    {
      id: 1,
      hasil: "Melampaui Standar Dikti",
      standar:
        "USM mempertahankan pencapaian Standar Dikti dan meningkatkan Standar Dikti serta berupaya mencapai Standar Internasional",
    },
    {
      id: 2,
      hasil: "Mencapai Standar Dikti",
      standar:
        "USM mempertahankan pencapaian Standar Dikti dan meningkatkan Standar Dikti",
    },
    {
      id: 3,
      hasil: "Tidak Mencapai Standar Dikti",
      standar:
        "USM melakukan tindakan koreksi dan tindak lanjut untuk meningkatkan pencapaian Standar Dikti",
    },
    {
      id: 4,
      hasil: "Menyimpang dari Standar Dikti",
      standar:
        "USM melakukan tindakan koreksi dan tindak lanjut agar USM mampu kembali pada pelaksanaan yang sesuai dengan standar Dikti dan mampu mencapai standar Dikti",
    },
  ];
  //   const data = [
  //     {
  //         id: 1,
  //         no: "A",
  //         dokumen: "Dokumen Manual SPMI",
  //         link: "https://drive.google.com/file/d/13l3eWXqI-VNd8T2q6rPAO5WsILwa-9Ug/view?usp=sharing"
  //     },
  //     {
  //         id: 2,
  //         no: "",
  //         dokumen: "1. Manual Standar Kerjasama",
  //         link: "https://drive.google.com/file/d/1p9KR-8ZXjCLV5QNYaZC4pk_00iQBP9G3/view?usp=sharing"
  //     },
  //   ]

  return (
    <main className="mx-12 mb-16">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Profil BPM</li>
          <li>PPEPP</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="ppepp" title="PPEPP" />
        <section className="mt-3">
          <p className="mb-5">
            Untuk menjamin pelaksanaan SPMI baik bidang akademik dan
            nonakademik, maka pengelolaan SPMI menggunakan metoda PPEPP yaitu P
            (Penetapan Standar), P (Pelaksanaan Standar), E (Evaluasi Standar),
            P (Pengendalian Standar) dan P (Peningkatan Standar).
          </p>
          <table className="mt-3">
            <tr className="font-bold">
              <td>a.</td>
              <td>Penetapan</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-justify leading-8">
                Penetapan standar dirumuskan oleh tim satuan tugas di bawah
                koordinasi Kepala BPM. Tim satuan tugas beranggotakan Tim
                Penjaminan Mutu Fakultas, Satuan Tugas Penjaminan Mutu Fakultas,
                Kepala Biro dan dosen-dosen yang ditunjuk dengan Surat Keputusan
                Rektor). Standar mutu yang dirumuskan kemudian diajukan ke
                Rektorat untuk dibahas di level pimpinan universitas. Rektor
                selanjutnya mengajukan draft SPMI ke Senat Universitas untuk
                mendapatkan pertimbangan dan persetujuan. Hasil pertimbangan dan
                persetujuan SPMI diajukan ke Pengurus Rektorat dan Yayasan untuk
                kemudian ditetapkan secara sah. Standar yang telah disetujui
                kemudian disosialisasikan ke seluruh sivitas akademika.
              </td>
            </tr>
            <br></br>
            <tr className="font-bold">
              <td>b.</td>
              <td>Pelaksanaan</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-justify leading-8">
                Pelaksanaan standar Dikti dan Standar USM oleh pemegang jabatan
                di struktur organisasi pada semua jenjang mulai tingkat
                universitas, fakultas, program studi, biro dan unit. Pelaksanaan
                diwujudkan dalam bentuk aktivitas operasional terkait akademik
                dan non ademik senantiasa mengacu pada standar yang ditetapkan.
              </td>
            </tr>
            <br></br>
            <tr className="font-bold">
              <td>c.</td>
              <td>Evaluasi</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-justify leading-8">
                Evaluasi pelaksanaan SPMI USM dilaksanakan melalui mekanisme
                sebagai berikut:
                <table className="mt-3 table text-black">
                  <thead>
                    <th>BENTUK</th>
                    <th>RUANG LINGKUP</th>
                    <th>LEVEL</th>
                    <th>KOORDINATOR</th>
                    <th>FREKUENSI</th>
                  </thead>
                  <tbody>
                    {dataEvaluasi.map((data) => (
                      <tr key={data.id}>
                        <td>{data.bentuk}</td>
                        <td>{data.ruangLingkup}</td>
                        <td>{data.level}</td>
                        <td>{data.koordinator}</td>
                        <td>{data.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Hasil evaluasi dapat terdiri atas capaian</p>
                <ul className="list-disc ml-5">
                  <li>
                    Pelaksanaan Standar Dikti dan USM melampaui Standar Dikti
                    yang telah ditetapkan.
                  </li>
                  <li>
                    Pelaksanaan Standar Dikti dan USM mencapai Standar Dikti
                    yang telah ditetapkan.
                  </li>
                  <li>
                    Pelaksanaan Standar Dikti dan USM belum mencapai Standar
                    Dikti yang telah ditetapkan
                  </li>
                  <li>
                    Pelaksanaan Standar Dikti dan USM menyimpang dari Standar
                    Dikti yang telah ditetapkan.
                  </li>
                </ul>
              </td>
            </tr>
            <br></br>
            <tr className="font-bold">
              <td>d.</td>
              <td>Pengendalian</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-justify leading-8">
                Pengendalian Standar Dikti dan Standar USM dilakukan dalam:
                menindaklanjuti hasil AMI, evaluasi diri, evaluasi rutin,
                evaluasi kepuasan dan evaluasi kinerja. Bentuk-bentuk
                pengendalian adalah sebagai berikut:
                <table className="mt-3 table text-black">
                  <thead>
                    <th>HASIL EVALUASI PELAKSANAAN</th>
                    <th>PENGENDALIAN STANDAR</th>
                  </thead>
                  <tbody>
                    {dataPengendalian.map((data) => (
                      <tr key={data.id}>
                        <td>{data.hasil}</td>
                        <td>{data.standar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                Mekanisme pengendalian dilakukan dalam forum Rapat Tinjauan
                Manajemen sebagai bentuk pemeliharaan budaya mutu.
              </td>
            </tr>
            <br></br>
            <tr className="font-bold">
              <td>e.</td>
              <td>Peningkatan</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-justify leading-8">
                Peningkatan Standar Dikti dan Standar USM dilakukan terhadap
                hasil yang sudah memenuhi standar Dikti dan standar USM.
                Peningkatan dilakukan agar mencapai kepuasan pemangku
                kepentingan dan memperhatikan perkembangan lingkungan nasional
                dan global. Pengambilan keputusan atas peningkatan standar
                berdasarkan kajian data yang valid dan sahih dan dilakukan
                secara sistematis, secara partisipatif kolegial.
              </td>
            </tr>
          </table>
        </section>
      </div>
    </main>
  );
};

export default PPEPP;
