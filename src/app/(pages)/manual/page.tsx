import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const Manual = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Manual Sistem Mutu</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="manual"
          title="Manual Sistem Mutu"
        />
        <section className="mt-7 leading-8 text-justify text-base">
          <h1 className="font-bold">Manual SPMI</h1>
          <p>
            Dokumen Manual SPMI adalah dokumen yang berisi petunjuk teknis
            tentang cara, langkah atau prosedur PPEPP Standar Dikti secara
            berkelanjutan oleh pihak yang bertanggungjawab dalam implementasi
            SPMI di perguruan tinggi baik pada tingkat unit pengelola program
            studi maupun tingkat perguruan tinggi. Manual SPMI terdiri dari 2
            (dua) bagian yaitu Manual SPMI bidang Akademik dan Manual SPMI
            bidang Nonakademik, dimana setiap bagian jumlah manual disesuaikan
            dengan kelompok standar yang ada.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Manual;
