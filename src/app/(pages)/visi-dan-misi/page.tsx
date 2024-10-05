import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import HeaderAllPages from "@/components/HeaderAllPages";

const VisiDanMisi = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Profil BPM</li>
          <li>Visi dan Misi</li>
        </ul>
        <div className="relative">
          <HeaderAllPages
            src={visiMisi}
            alt="logo visi dan misi"
            title="Visi dan Misi"
          />
          <section className="mt-5 text-base">
            <h1 className="text-2xl font-bold">Visi</h1>
            <p className="mt-3">
              Visi BPM USM adalah Menjamin terwujudnya tata kelola universitas
              yang baik berbasis teknologi informasi secara berkesinambungan.
            </p>
            <h1 className="text-2xl font-bold mt-3">Misi</h1>
            <ul className="space-y-2 mt-3">
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Menjamin kredibilitas tata kelola universitas.</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Menjamin transparansi tata kelola universitas. </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Menjamin akuntabilitas tata kelola universitas. </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Menjamin tata kelola universitas yang berkeadilan. </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>
                  Menjamin terlaksananya siklus Sistem Penjaminan Mutu Internal
                  (SPMI).{" "}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Menjamin kepatuhan terhadap standar dan prosedur.</p>
              </li>
            </ul>
            <h1 className="text-2xl font-bold mt-3">Tujuan</h1>
            <p className="mt-3">Badan Penjaminan Mutu memiliki tujuan:</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>
                  Menyediakan secara lengkap semua dokumen SPMI dan dapat
                  diakses secara online.
                </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>
                  Meningkatkan tata kelola universitas yang baik (Good
                  University Governance).{" "}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Meningkatkan budaya mutu.</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>
                  Meningkatkan peringkat akreditasi unggul pada program studi
                  dan institusi.{" "}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>
                  Meningkatkan mutu Tri Dharma Perguruan Tinggi berkelanjutan.{" "}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>
                  Meningkatkan kepuasan pengguna (stakeholders) layanan
                  universitas.{" "}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Meningkatkan kepatuhan terhadap standar dan prosedur.</p>
              </li>
            </ul>
            <h1 className="text-2xl font-bold mt-3">Sasaran Strategis Mutu</h1>
            <h3 className="font-bold mt-3">A. Bidang Pengembangan</h3>
            <ul className="space-y-2 mt-3">
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan Kebijakan SPMI</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan Manual SPMI</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan Standar SPMI </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan Formulir SPMI</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan PSM</p>
              </li>
            </ul>
            <h3 className="font-bold mt-3">B. Bidang Akreditasi</h3>
            <ul className="space-y-2 mt-3">
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pendampingan Akreditasi Program Studi </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pendampingan Reakreditasi Program Studi Pendampingan </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Reakreditasi Institusi</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pendampingan Pemeringkatan LPPM </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pendampingan Pemeringkatan Perguruan Tinggi</p>
              </li>
            </ul>
            <h3 className="font-bold mt-3">C. Bidang Audit Internal</h3>
            <ul className="space-y-2 mt-3">
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Audit Kelembagaan </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Audit Pembelajaran </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan Penelitian</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengembangan Pengabdian </p>
              </li>
            </ul>
            <h3 className="font-bold mt-3">D. Bidang Pengendalian</h3>
            <ul className="space-y-2 mt-3">
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengendalian Pelaksanaan Kebijakan SPMI </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengendalian Pelaksanaan Manual SPMI </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengendalian Pelaksanaan Standar SPMI</p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengendalian Pelaksanaan Formulir SPMI </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengendalian Pelaksanaan PSM </p>
              </li>
              <li className="flex items-center gap-1">
                <IoMdCheckboxOutline />
                <p>Pengendalian Rekomendasi Rapat Tinjauan Manajemen (RTM)</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default VisiDanMisi;
