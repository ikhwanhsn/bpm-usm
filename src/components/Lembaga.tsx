import Marquee from "react-fast-marquee";
import lembaga1 from "../../public/img/lembaga-1.png";
import lembaga2 from "../../public/img/lembaga-2.png";
import Image from "next/image";

const Lembaga = () => {
  return (
    <main className="mt-24 mx-5">
      <h1 className="text-center text-2xl text-blueColor font-bold mb-7">
        Lembaga Akreditasi yang Diikuti
      </h1>
      <Marquee>
        <Image
          src={lembaga1}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga2}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga1}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga2}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga1}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga2}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga1}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga2}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga1}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
        <Image
          src={lembaga2}
          alt="logo"
          width={100}
          height={100}
          className="mr-10"
        />
      </Marquee>
    </main>
  );
};

export default Lembaga;
