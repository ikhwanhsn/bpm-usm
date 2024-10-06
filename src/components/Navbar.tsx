"use client";

import React from "react";
// import {
//   Collapse,
//   Typography,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
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

// function NavListMenu1(props: any) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         placement="bottom-start"
//         allowHover={true}
//         offset={10}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant="small"
//             className="font-medium"
//             {...props}
//           >
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//               {...props}
//             >
//               Profil BPM
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden rounded-xl lg:block" {...props}>
//           <MenuItem {...props}>
//             <Link href="/visi-dan-misi">Visi Dan Misi</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/struktur-organisasi">Struktur Organisasi</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/ppepp">PPEPP</Link>
//           </MenuItem>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>
//           <MenuItem {...props}>
//             <Link href="/visi-dan-misi">Visi Dan Misi</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/struktur-organisasi">Struktur Organisasi</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/ppepp">PPEPP</Link>
//           </MenuItem>
//         </Collapse>
//       </div>
//     </React.Fragment>
//   );
// }
// function NavListMenu2(props: any) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [openNestedMenu1, setopenNestedMenu1] = React.useState(false);
//   const [openNestedMenu2, setopenNestedMenu2] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems1 = instrumenAMI.map(({ title, link }, key) => (
//     <Link href={link} key={key}>
//       <MenuItem {...props}>{title}</MenuItem>
//     </Link>
//   ));
//   const renderItems2 = sopAuditMutuInternal.map(({ title, link }, key) => (
//     <Link href={link} key={key}>
//       <MenuItem {...props}>{title}</MenuItem>
//     </Link>
//   ));

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         placement="bottom"
//         allowHover={true}
//         offset={10}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant="small"
//             className="font-medium"
//             {...props}
//           >
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//               {...props}
//             >
//               Audit Mutu Internal [AMI]
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden rounded-xl lg:block" {...props}>
//           <Menu
//             placement="right-start"
//             allowHover
//             offset={15}
//             open={openNestedMenu1}
//             handler={setopenNestedMenu1}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 Instrumen AMI
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="rounded-xl" {...props}>
//               {renderItems1}
//             </MenuList>
//           </Menu>
//           <Menu
//             placement="right-start"
//             allowHover
//             offset={15}
//             open={openNestedMenu2}
//             handler={setopenNestedMenu2}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 SOP Audit Mutu Internal
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="rounded-xl" {...props}>
//               {renderItems2}
//             </MenuList>
//           </Menu>
//           <MenuItem {...props}>
//             <Link href="/pedoman-ami">Pedoman AMI</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/daftar-gugas-kendali-mutu">
//               Daftar Gugus Kendali Mutu
//             </Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/daftar-auditor-mutu-internal">
//               Daftar Auditor Mutu Internal
//             </Link>
//           </MenuItem>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>
//           <Menu
//             placement="bottom"
//             allowHover
//             offset={6}
//             open={openNestedMenu1}
//             handler={setopenNestedMenu1}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 Instrumen AMI
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="block rounded-xl lg:hidden" {...props}>
//               {renderItems1}
//             </MenuList>
//           </Menu>
//           <Menu
//             placement="bottom"
//             allowHover
//             offset={6}
//             open={openNestedMenu2}
//             handler={setopenNestedMenu2}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 SOP Audit Mutu Internal
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="block rounded-xl lg:hidden" {...props}>
//               {renderItems2}
//             </MenuList>
//           </Menu>
//           <MenuItem {...props}>Pedoman AMI</MenuItem>
//           <MenuItem {...props}>Daftar Gugus Kendali Mutu</MenuItem>
//           <MenuItem {...props}>Daftar Auditor Mutu Internal</MenuItem>
//         </Collapse>
//       </div>
//     </React.Fragment>
//   );
// }
// function NavListMenu3(props: any) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [openNestedMenu1, setopenNestedMenu1] = React.useState(false);
//   const [openNestedMenu2, setopenNestedMenu2] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems1 = dokumenSPMI.map(({ title, link }, key) => (
//     <Link href={link} key={key}>
//       <MenuItem {...props}>{title}</MenuItem>
//     </Link>
//   ));
//   const renderItems2 = dokumenSPME.map(({ title, link }, key) => (
//     <Link href={link} key={key}>
//       <MenuItem {...props}>{title}</MenuItem>
//     </Link>
//   ));

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         placement="bottom"
//         allowHover={true}
//         offset={10}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant="small"
//             className="font-medium"
//             {...props}
//           >
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//               {...props}
//             >
//               Dokumen
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden rounded-xl lg:block" {...props}>
//           <Menu
//             placement="right-start"
//             allowHover
//             offset={15}
//             open={openNestedMenu1}
//             handler={setopenNestedMenu1}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 Dokumen SPMI
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="rounded-xl" {...props}>
//               {renderItems1}
//             </MenuList>
//           </Menu>
//           <Menu
//             placement="right-start"
//             allowHover
//             offset={15}
//             open={openNestedMenu2}
//             handler={setopenNestedMenu2}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 Dokumen SPME
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="rounded-xl" {...props}>
//               {renderItems2}
//             </MenuList>
//           </Menu>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>
//           <Menu
//             placement="bottom"
//             allowHover
//             offset={6}
//             open={openNestedMenu1}
//             handler={setopenNestedMenu1}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 Instrumen AMI
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="block rounded-xl lg:hidden" {...props}>
//               {renderItems1}
//             </MenuList>
//           </Menu>
//           <Menu
//             placement="bottom"
//             allowHover
//             offset={6}
//             open={openNestedMenu2}
//             handler={setopenNestedMenu2}
//           >
//             <MenuHandler className="flex items-center justify-between">
//               <MenuItem {...props}>
//                 SOP Audit Mutu Internal
//                 <ChevronUpIcon
//                   strokeWidth={2.5}
//                   className={`h-3.5 w-3.5 transition-transform ${
//                     isMenuOpen ? "rotate-90" : ""
//                   }`}
//                 />
//               </MenuItem>
//             </MenuHandler>
//             <MenuList className="block rounded-xl lg:hidden" {...props}>
//               {renderItems2}
//             </MenuList>
//           </Menu>
//           <MenuItem {...props}>Pedoman AMI</MenuItem>
//           <MenuItem {...props}>Daftar Gugus Kendali Mutu</MenuItem>
//           <MenuItem {...props}>Daftar Auditor Mutu Internal</MenuItem>
//         </Collapse>
//       </div>
//     </React.Fragment>
//   );
// }
// function NavListMenu4(props: any) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         placement="bottom-end"
//         allowHover={true}
//         offset={10}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant="small"
//             className="font-medium"
//             {...props}
//           >
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//               {...props}
//             >
//               Laporan
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden rounded-xl lg:block" {...props}>
//           <MenuItem {...props}>
//             <Link href="/laporan-bpm">Laporan BPM</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/pengaduan">Pengaduan</Link>
//           </MenuItem>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>
//           <MenuItem {...props}>
//             <Link href="/laporan-bpm">Laporan BPM</Link>
//           </MenuItem>
//           <MenuItem {...props}>
//             <Link href="/pengaduan">Pengaduan</Link>
//           </MenuItem>
//         </Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

const Navbar = () => {
  return (
    <div className="navbar bg-blueColor text-white sticky top-0 z-50 py-3">
      <div className="navbar-start flex justify-center items-center">
        {/* <NavListMenu1 />
        <NavListMenu2 /> */}
        <NavigationLeft />
      </div>
      <div className="navbar-center">
        <Link href="/">
          <Image src={navbarLogo} alt="logo" width={400} height={400} />
        </Link>
      </div>
      <div className="navbar-end flex justify-center gap-5 items-center">
        {/* <NavListMenu3 />
        <NavListMenu4 /> */}
        <NavigationRight />
      </div>
    </div>
  );
};

export default Navbar;
