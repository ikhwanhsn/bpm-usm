import Image from "next/image";
import bpmLogo from "../../public/img/bpm-logo.png";
import navbarLogo from "../../public/img/navbar-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-blueColor text-white p-10">
        <aside className="max-w-sm -mt-5">
          <Image src={bpmLogo} width={200} height={200} alt="BPM USM" />
          <p>
            Our paper is sourced from FSC-certified mills. We plant enough trees
            to more than double our paper usage.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Partner program</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Reviews</a>
          <a className="link link-hover">Direct mail academy</a>
          <a className="link link-hover">Success stories</a>
          <a className="link link-hover">Term and condition</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">support@postpilot.com</a>
        </nav>
      </footer>
      <hr />
      <section className="footer bg-blueColor text-white px-10 py-5 flex justify-between items-center">
        <Image src={navbarLogo} width={400} height={400} alt="BPM USM" />
        <p>© 2024 Universitas Semarang, Inc. All rights reserved.</p>
      </section>
    </>
  );
};

export default Footer;
