import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";
import siklusAmi from "../../../../public/img/siklus-ami.png";
import flowchart from "../../../../public/img/flowchat-tambahan.png";
import Image from "next/image";

const PedomanAmi = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Pedoman AMI</li>
        </ul>
        <HeaderAllPages src={visiMisi} alt="pedoman-ami" title="Pedoman AMI" />
        <section className="mt-7 leading-8 text-justify">
          <Image src={siklusAmi} alt="siklus-ami" className="w-full" />
          <Image src={flowchart} alt="flowchart" className="w-full" />
          <p>
            Dokumen pedoman AMI dapat dilihat pada{" "}
            <a
              href="https://drive.google.com/file/d/1O2CqffFE7ZUyCC5Nr4SzP35t8lf0Zg4i/view?usp=sharing"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              link ini
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default PedomanAmi;
