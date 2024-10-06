"use client";

import React from "react";
import Image from "next/image";
import navbarLogo from "../../public/img/navbar-logo.png";
import Link from "next/link";
import { NavigationLeft } from "./NavigationLeft";
import { NavigationRight } from "./NavigationRight";

// const instrumenAMI = [
//   {
//     title: "Instrumen AMI Akademik",
//     link: "/instrumen-ami-akademik",
//   },
//   {
//     title: "Instrumen AMI Non Akademik",
//     link: "/instrumen-ami-non-akademik",
//   },
//   {
//     title: "Aplikasi Sistem Penjaminan Mutu Akademik",
//     link: "https://akademik.aplikasi-bpm.usm.ac.id/",
//   },
//   {
//     title: "Aplikasi Sistem Penjaminan Mutu Non Akademik",
//     link: "https://non-akademik.aplikasi-bpm.usm.ac.id/",
//   },
// ];
// const sopAuditMutuInternal = [
//   {
//     title: "SOP Pelaksanaan AMI Prodi",
//     link: "/sop-pelaksanaan-ami-prodi",
//   },
//   {
//     title: "SOP Pelaksanaan Audit KPI",
//     link: "/sop-pelaksanaan-audit-kpi",
//   },
//   {
//     title: "SOP Pelaksanaan Rapat Tinjauan Umum",
//     link: "/sop-pelaksanaan-rtu",
//   },
// ];
// const dokumenSPMI = [
//   {
//     title: "Kebijakan",
//     link: "/kebijakan",
//   },
//   {
//     title: "Manual",
//     link: "/manual",
//   },
//   {
//     title: "Standar",
//     link: "/standar",
//   },
//   {
//     title: "Formulir",
//     link: "/formulir",
//   },
// ];
// const dokumenSPME = [
//   {
//     title: "Instrumen Akreditasi",
//     link: "/instrumen-akreditasi",
//   },
//   {
//     title: "Instrumen Pembukaan Prodi Baru",
//     link: "/instrumen-pembukaan-prodi-baru",
//   },
// ];

const Navbar2 = () => {
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
      <div className="navbar-end flex justify-center gap-5 items-center">
        <NavigationRight />
      </div>
    </div>
  );
};

export default Navbar2;
