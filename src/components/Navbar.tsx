import Image from "next/image";
import navbarLogo from "../../public/img/navbar-logo.png";
import Link from "next/link";
import { NavigationLeft } from "./NavigationLeft";
import { NavigationRight } from "./NavigationRight";

const Navbar = () => {
  return (
    <div className="navbar bg-blueColor text-white sticky top-0 z-50 py-3">
      <div className="navbar-start flex justify-center items-center">
        <NavigationLeft />
      </div>
      <div className="navbar-center">
        <Link href="/">
          <Image src={navbarLogo} alt="logo" width={400} height={400} />
        </Link>
      </div>
      <div className="navbar-end flex justify-center items-center">
        <NavigationRight />
      </div>
    </div>
  );
};

export default Navbar;
