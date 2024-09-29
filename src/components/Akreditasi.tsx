const Akreditasi = () => {
  return (
    <main className="mt-24 mx-5">
      <h1 className="text-center text-2xl text-blueColor font-bold">
        Akreditasi Program Studi Universitas Semarang
      </h1>
      <section className="w-full h-96 rounded-2xl bg-blueColor text-white my-5 p-12 flex gap-32 items-center justify-center">
        <section className="text-center">
          <h1 className="text-8xl font-bold">18</h1>
          <p>Program Studi</p>
        </section>
        <section className="grid grid-cols-4 items-center justify-between gap-y-12 gap-24">
          <section className="text-center">
            <h3 className="text-5xl font-bold">11</h3>
            <p>Unggul</p>
          </section>
          <section className="text-center">
            <h3 className="text-5xl font-bold">17</h3>
            <p>Peringkat A</p>
          </section>
          <section className="text-center">
            <h3 className="text-5xl font-bold">12</h3>
            <p>Unggul</p>
          </section>
          <section className="text-center">
            <h3 className="text-5xl font-bold">17</h3>
            <p>Peringkat A</p>
          </section>
          <section className="text-center col-span-2">
            <h3 className="text-5xl font-bold">9</h3>
            <p>Tersertifikasi AUN-QA</p>
          </section>
          <section className="text-center col-span-2">
            <h3 className="text-5xl font-bold">18</h3>
            <p>Tersertifikasi ISO 21001:2018</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Akreditasi;
