"use client";

import React from "react";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import {
//   Collapse,
//   Typography,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import indonesiaFlag from "../../public/img/id-logo.png";
// import englishFlag from "../../public/img/us-logo.png";
// import Image from "next/image";

// function LanguageSwitcher() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("indonesia");

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         placement="bottom-end"
//         offset={10}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-black capitalize"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               <Image
//                 src={
//                   selectedLanguage === "indonesia" ? indonesiaFlag : englishFlag
//                 }
//                 alt="flag"
//                 className="w-5 h-5"
//               />
//               {selectedLanguage}
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
//         <MenuList className="hidden rounded-xl lg:block">
//           <MenuItem>
//             <button
//               onClick={() => setSelectedLanguage("indonesia")}
//               className="flex items-center gap-1"
//             >
//               <Image
//                 src={indonesiaFlag}
//                 alt="Indonesia flag"
//                 className="w-5 h-5"
//               />
//               Indonesia
//             </button>
//           </MenuItem>
//           <MenuItem>
//             <button
//               onClick={() => setSelectedLanguage("english")}
//               className="flex items-center gap-1"
//             >
//               <Image src={englishFlag} alt="english flag" className="w-5 h-5" />
//               English
//             </button>
//           </MenuItem>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>
//           <MenuItem>
//             <button onClick={() => setSelectedLanguage("indonesia")}>
//               Indonesia
//             </button>
//           </MenuItem>
//           <MenuItem>
//             <button onClick={() => setSelectedLanguage("english")}>
//               English
//             </button>
//           </MenuItem>
//         </Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

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
        {/* <LanguageSwitcher /> */}
      </section>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
