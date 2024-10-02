const Pengaduan = () => {
  return (
    <main className="grid grid-cols-5 px-5 h-96 w-full gap-5 mt-12 mb-32">
      <section className="bg-yellowColor p-3 rounded-md col-span-2 w-full">
        <h1 className="text-2xl font-semibold text-center">
          Laporan Pengaduan
        </h1>
      </section>
      <section className="col-span-3">
        <section className="rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.0195618747586!2d110.45179641498267!3d-6.982100636201627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cc849b8bb9b%3A0x75463e1c73bc49c0!2sMenara%20Usma!5e0!3m2!1sid!2sid!4v1727835693557!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </section>
        <section></section>
      </section>
    </main>
  );
};

export default Pengaduan;
