import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const Pengaduan = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Pengaduan</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="Pengaduan" title="Pengaduan" />
        <section className="mt-7 leading-8 text-justify text-base">
          <p>
            Adapun pengaduan dapat dilaporkan pada link{" "}
            <a
              href="https://drive.google.com/file/d/1G-WEYnax0Xmvt8A5OFqtir6J7vx1RFjA/view"
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

export default Pengaduan;
