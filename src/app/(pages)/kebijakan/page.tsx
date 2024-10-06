import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const Kebijakan = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Kebijakan</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="kebijakan" title="Kebijakan" />
        <section className="mt-7 leading-8 text-justify text-base">
          <h1 className="font-bold">Pernyataan Mutu</h1>
          <p>
            Universitas Semarang berkomitmen melaksanakan penjaminan mutu secara
            konsisten dan berkelanjutan untuk mewujudkan visi, melaksanakan misi
            dan mencapai tujuan dan sasaran yang telah ditetapkan melalui
            peningkatan budaya mutu.
          </p>
          <h1 className="font-bold mt-5">
            SISTEM PENJAMINAN MUTU INTERNAL (SPMI)
          </h1>
          <p>
            Sistem Penjaminan Mutu Internal adalah kegiatan sistemik penjaminan
            mutu pendidikan tinggi oleh setiap perguruan tinggi secara otonom
            atau mandiri untuk mengendalikan dan meningkatkan penyelenggaraan
            pendidikan tinggi secara berencana dan berkelanjutan. Tujuan dari
            Sistem Penjaminan Mutu, sesuai Permenristekdikti No. 62 tahun 2016
            tentang Sistem Penjaminan Mutu Pendidikan Tinggi, adalah menjamin
            pemenuhan Standar Pendidikan Tinggi secara sistemik dan
            berkelanjutan, sehingga tumbuh dan berkembang budaya mutu. Sedangkan
            fungsi dari Sistem Penjaminan Mutu adalah mengendalikan
            penyelenggaraan pendidikan tinggi oleh perguruan tinggi untuk
            mewujudkan pendidikan tinggi yang bermutu. Adapun yang dimaksud
            dengan budaya mutu adalah bahwa semua pihak yang berkepentingan
            (internal stakeholders) di sebuah perguruan tinggi harus memiliki
            pola pikir, pola sikap dan pola perilaku berdasarkan standar yang
            berlaku.
          </p>
          <h1 className="font-bold mt-5">Kebijakan SPMI</h1>
          <p>
            Pada pertengahan tahun 2004, Senat Universitas Semarang (USM) telah
            menetapkan suatu kebijakan untuk menyusun sistem penjaminan mutu di
            USM. Kebijakan ini merupakan implementasi dan tindak lanjut dari
            pasal 57 ayat 1 Undang Undang RI Nomor 20 Tahun 2003 tentang Sistem
            Pendidikan Nasional, lebih lanjut mengacu pada Undang Undang RI
            Nomor 12 Tahun 2012 tentang Pendidikan Tinggi, Permen Dikbud Nomor
            49 Tahun 2014 tentang Standar Nasional Pendidikan Tinggi dan Permen
            Dikbud Nomor 50 tahun 2014 tentang Sistem Penjaminan Mutu Pendidikan
            TInggi. Didasarkan atas regulasi tersebut maka, penyelenggara dan
            pengelola USM mengacu pada pentingnya peningkatan mutu
            berkelanjutan. Dalam perencanaan strategis pendidikan nasional
            dewasa ini, isu utamanya adalah Penjaminan Mutu. Paradigma
            pengelolaan Universitas Semarang mengedapnkan akuntabilitas,
            tranparasi, otonomi, akreditasi, evaluasi dan kebersamaan yang
            semuanya diarahkan untuk peningkatan mutu berkelanjutan melalui tri
            dharma dan kegiatan penunjang lainnya.
          </p>
          <h1 className="font-bold mt-5">Formulir SPMI</h1>
          <p>
            Dalam pelaksanaan standar, diperlukan formulir untuk memandu dan
            memantau sampai sejauh mana pelaksana standar telah memenuhi
            ketentuan di dalam standar yang berlaku.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Kebijakan;
