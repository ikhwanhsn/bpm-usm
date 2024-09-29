import Image from "next/image";
import headerImage from "../../public/img/header-image.png";
import headerIcon1 from "../../public/img/header-icon-1.png";
import headerIcon2 from "../../public/img/header-icon-2.png";
import headerIcon3 from "../../public/img/header-icon-3.png";

const Header = () => {
  return (
    <main className="m-3 relative">
      <div className="relative">
        <Image
          src={headerImage}
          alt="logo"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 58, 138, 1), rgba(234, 179, 8, 0.5), transparent)",
          }}
        ></div>
      </div>
      <section className="text-white absolute top-32 left-10 space-y-2">
        <p className="text-2xl">Sistem Penjaminan Mutu</p>
        <p className="text-5xl font-bold">Badan Penjaminan Mutu</p>
        <p className="text-5xl font-bold">Universitas Semarang</p>
      </section>
      <section className="flex justify-between items-center absolute -bottom-14 bg-yellowColor py-7 rounded-2xl border-2 border-white left-1/2 transform -translate-x-1/2 w-3/4">
        <section className="flex items-center justify-center gap-2 flex-1">
          <Image src={headerIcon1} alt="logo" width={45} height={45} />
          <p>
            Permohonan <br />
            Data/Dokumen
          </p>
        </section>
        <section className="w-[2px] h-12 bg-white"></section>
        <section className="flex items-center justify-center gap-2 flex-1">
          <Image src={headerIcon2} alt="logo" width={45} height={45} />
          <p>
            Early Warning System <br />
            Akreditasi Prodi
          </p>
        </section>
        <section className="w-[2px] h-12 bg-white"></section>
        <section className="flex items-center justify-center gap-2 flex-1">
          <Image src={headerIcon3} alt="logo" width={45} height={45} />
          <p>
            Permohonan <br />
            Kunjungan / Benchmarking
          </p>
        </section>
      </section>
    </main>
  );
};

export default Header;
