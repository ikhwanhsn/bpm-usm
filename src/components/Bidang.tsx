import Image from "next/image";
import bidangLogo from "../../public/img/bidang-logo.png";

const Bidang = () => {
  return (
    <main className="mx-5 mt-24">
      <h1 className="text-center text-2xl text-blueColor font-bold">Bidang</h1>
      <section className="flex gap-24 mt-5 justify-center items-center">
        <section className="bg-blueColor border-4 border-white shadow-lg shadow-gray-600 text-white p-5 rounded-xl flex flex-col justify-center gap-3 items-center w-64 h-72">
          <Image src={bidangLogo} alt="logo" width={120} height={120} />
          <p className="text-center font-bold">PENJAMINAN MUTU INTERNAL</p>
        </section>
        <section className="bg-blueColor border-4 border-white shadow-lg shadow-gray-600 text-white p-5 rounded-xl flex flex-col justify-center gap-3 items-center w-64 h-72">
          <Image src={bidangLogo} alt="logo" width={120} height={120} />
          <p className="text-center font-bold">PENJAMINAN MUTU KEUANGAN</p>
        </section>
        <section className="bg-blueColor border-4 border-white shadow-lg shadow-gray-600 text-white p-5 rounded-xl flex flex-col justify-center gap-3 items-center w-64 h-72">
          <Image src={bidangLogo} alt="logo" width={120} height={120} />
          <p className="text-center font-bold">PENJAMINAN MUTU EKSTERNAL</p>
        </section>
      </section>
    </main>
  );
};

export default Bidang;
