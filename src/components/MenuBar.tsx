import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import navbarLogo from "../../public/img/navbar-logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const instrumenAMI = [
  {
    title: "Instrumen AMI Akademik",
    link: "/instrumen-ami-akademik",
  },
  {
    title: "Instrumen AMI Non Akademik",
    link: "/instrumen-ami-non-akademik",
  },
  {
    title: "Aplikasi Sistem Penjaminan Mutu Akademik",
    link: "https://akademik.aplikasi-bpm.usm.ac.id/",
  },
  {
    title: "Aplikasi Sistem Penjaminan Mutu Non Akademik",
    link: "https://non-akademik.aplikasi-bpm.usm.ac.id/",
  },
];
const sopAuditMutuInternal = [
  {
    title: "SOP Pelaksanaan AMI Prodi",
    link: "/sop-pelaksanaan-ami-prodi",
  },
  {
    title: "SOP Pelaksanaan Audit KPI",
    link: "/sop-pelaksanaan-audit-kpi",
  },
  {
    title: "SOP Pelaksanaan Rapat Tinjauan Umum",
    link: "/sop-pelaksanaan-rtm",
  },
];
const dokumenSPMI = [
  {
    title: "Kebijakan",
    link: "/kebijakan",
  },
  {
    title: "Manual",
    link: "/manual",
  },
  {
    title: "Standar",
    link: "/standar",
  },
  {
    title: "Formulir",
    link: "/formulir",
  },
];
const dokumenSPME = [
  {
    title: "Instrumen Akreditasi",
    link: "/instrumen-akreditasi",
  },
  {
    title: "Instrumen Pembukaan Prodi Baru",
    link: "/instrumen-pembukaan-prodi-baru",
  },
];

export function MenuBar() {
  return (
    <Menubar className="grid grid-cols-3 justify-between px-12 rounded-none h-20 bg-blueColor text-white border-none shadow-md sticky top-0 z-50">
      <section className="col-span-1 flex items-center justify-center gap-5">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer hover:bg-white hover:text-black">
            Profil BPM
            <IoIosArrowDown className="ml-1" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/visi-dan-misi">Visi Dan Misi</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/struktur-organisasi">Struktur Organisasi</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/ppepp">PPEPP</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer hover:bg-white hover:text-black">
            Audit Mutu Internal [AMI]
            <IoIosArrowDown className="ml-1" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Instrumen AMI</MenubarSubTrigger>
              <MenubarSubContent>
                {instrumenAMI.map((item) => (
                  <MenubarItem key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </MenubarItem>
                ))}
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>SOP Audit Mutu Internal</MenubarSubTrigger>
              <MenubarSubContent>
                {sopAuditMutuInternal.map((item) => (
                  <MenubarItem key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </MenubarItem>
                ))}
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              <Link href="/pedoman-ami">Pedoman AMI</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/daftar-gugus-kendali-mutu">
                Daftar Gugus Kendali Mutu
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/daftar-auditor-mutu-internal">
                Daftar Auditor Mutu Internal
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </section>
      <Link href="/">
        <Image src={navbarLogo} alt="visi-misi" width={400} height={400} />
      </Link>
      <section className="col-span-1 flex items-center justify-center gap-5">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer hover:bg-white hover:text-black">
            Dokumen
            <IoIosArrowDown className="ml-1" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Dokumen SPMI</MenubarSubTrigger>
              <MenubarSubContent>
                {dokumenSPMI.map((item) => (
                  <MenubarItem key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </MenubarItem>
                ))}
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Dokumen SPME</MenubarSubTrigger>
              <MenubarSubContent>
                {dokumenSPME.map((item) => (
                  <MenubarItem key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </MenubarItem>
                ))}
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer hover:bg-white hover:text-black">
            Laporan
            <IoIosArrowDown className="ml-1" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/laporan-bpm">Laporan BPM</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/pengaduan">Pengaduan</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </section>
    </Menubar>
  );
}
