"use client";

import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";
import { MenuBar } from "./MenuBar";
import indonesiaFlag from "../../public/img/id-logo.png";
import englishFlag from "../../public/img/us-logo.png";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoIosArrowDown } from "react-icons/io";

function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState("indonesia");

  return (
    <Menubar className="bg-yellowColor border-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:bg-white hover:text-black flex items-center gap-1 capitalize">
          {selectedLanguage === "indonesia" ? (
            <Image
              src={indonesiaFlag}
              alt="Indonesia Flag"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={englishFlag}
              alt="English Flag"
              width={20}
              height={20}
            />
          )}{" "}
          {selectedLanguage}
          <IoIosArrowDown className="ml-1" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <button
              onClick={() => setSelectedLanguage("indonesia")}
              className="flex items-center gap-1"
            >
              <Image
                src={indonesiaFlag}
                alt="Indonesia Flag"
                width={20}
                height={20}
              />
              Indonesia
            </button>
          </MenubarItem>
          <MenubarItem>
            <button
              onClick={() => setSelectedLanguage("english")}
              className="flex items-center gap-1"
            >
              <Image
                src={englishFlag}
                alt="English Flag"
                width={20}
                height={20}
              />
              English
            </button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section className="w-full h-10 bg-yellowColor px-5 flex justify-between items-center">
        <section className="flex items-center gap-1">
          <MdEmail />
          <a
            href="mailto:bpm@usm.ac.id"
            target="_blank"
            className="text-sm hover:underline"
          >
            bpm@usm.ac.id
          </a>
        </section>
        <LanguageSwitcher />
      </section>
      <MenuBar />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
