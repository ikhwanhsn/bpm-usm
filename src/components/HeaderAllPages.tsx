import Image, { StaticImageData } from "next/image";

type HeaderAllPagesProps = {
  src: StaticImageData;
  alt: string;
  title: string;
};

const HeaderAllPages = ({ src, alt, title }: HeaderAllPagesProps) => {
  return (
    <main className="relative">
      <div className="relative">
        <Image src={src} alt={alt} className="w-full mt-3 rounded-xl" />
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 58, 138, 1), rgba(234, 179, 8, 0.2), transparent)",
          }}
        ></div>
      </div>
      <section className="absolute top-8 left-10 space-y-2">
        <p className="text-5xl font-bold text-yellowColor">{title}</p>
        <p className="text-3xl font-bold text-white">
          Badan Penjaminan Mutu Universitas Semarang
        </p>
      </section>
    </main>
  );
};

export default HeaderAllPages;
