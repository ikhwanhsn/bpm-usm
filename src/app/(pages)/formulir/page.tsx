import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const Formulir = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Formulir</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="Formulir" title="Formulir" />
        <section className="mt-7 leading-8 text-justify text-base">
          <p>
            Adapun formulir dapat dilihat pada dengan klik link{" "}
            <a
              href="https://drive.google.com/file/d/1G-WEYnax0Xmvt8A5OFqtir6J7vx1RFjA/view"
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

export default Formulir;
