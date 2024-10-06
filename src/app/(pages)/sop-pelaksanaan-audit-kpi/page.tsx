import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";

const SopPelaksanaanAuditKpi = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Prosedur Mutu Pelaksanaan Audit KPI</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="sop-pelaksanaan-audit-kpi"
          title="Prosedur Mutu Pelaksanaan Audit KPI"
        />
        <section className="mt-7 leading-8 text-justify">
          <h1 className="text-2xl font-bold text-center mb-5">
            Prosedur Audit KPI Universitas Semarang
          </h1>
          <p>
            Dokumen pelaksanaan audit lapangan dapat dilihat pada{" "}
            <a
              href="https://drive.google.com/file/d/1eCE7g8YF-pmUaYapTqmllEIsoSWw7GjU/view?usp=sharing"
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

export default SopPelaksanaanAuditKpi;
