import Link from "next/link";

const Berita = () => {
  return (
    <main className="mt-24 mx-5">
      <h1 className="text-center text-2xl text-blueColor font-bold">
        Berita Terbaru
      </h1>
      <section className="mt-5 flex justify-between">
        <CardBerita />
        <CardBerita />
        <CardBerita />
        <CardBerita />
      </section>
      <Link href="/berita" className="text-blueColor mt-4 block text-center">
        Selengkapnya...
      </Link>
    </main>
  );
};

export default Berita;

const CardBerita = () => {
  return (
    <section className="w-full">
      <section className="relative">
        <section className="w-72 h-52 rounded-lg bg-blueColor"></section>
        <p className="bg-white px-2 py-1 text-sm rounded-xl absolute top-2 left-2 font-semibold">
          Berita
        </p>
      </section>
      <section className="mt-2">
        <section className="flex gap-2 text-sm">
          <p>Admin</p>
          <p>November, 22, 2024</p>
        </section>
        <p className="text-lg font-semibold mt-1">
          2024 BMW ALPINA XB7 with exclusive details, extraordinary
        </p>
      </section>
    </section>
  );
};
