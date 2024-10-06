import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const LaporanBpm = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Laporan BPM</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="Laporan BPM" title="Laporan BPM" />
        <section className="mt-7 leading-8 text-justify text-base">
          <p>
            Laporan Badan Penjaminan Mutu dapat di link{" "}
            <a
              href="https://drive.google.com/drive/folders/1WlxjY2eTGLIRdTlj1ihK1YVUdCmQSUE8?usp=share_link"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              ini
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default LaporanBpm;
