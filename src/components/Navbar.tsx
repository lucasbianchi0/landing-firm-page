"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { motion } from 'framer-motion';
interface INavbarProps {
  version: string;
  background?: string;
}

const Navbar = ({ version, background }: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Servicios", "Sobre Accedra", "Partners", "Soluciones"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div>

      <nav
        className={`z-50 relative h-full flex justify-between items-center rounded-full max-w-[95%] mx-auto px-5 py-3 bg-white
        ${version === "light"
            ? " bg-opacity-10 backdrop-blur-lg"
            : " drop-shadow-lg shadow-[#2a528980] border border-white"
          }   `}
      >

        <Link href="/">
          <figure
            className=""
          // style={{
          //   background: "linear-gradient(to top, #000000, #4C96FF)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
          >
            {version === "light" ? (
              <Image src="/LOGO.png" height={80} width={100} alt="logo" />
            ) : (
              <Image src="/LOGOBLUE.png" height={80} width={100} alt="logo" />
            )}
          </figure>
        </Link>

        <ul
          className={`hidden gap-8 font-light ${version === "light" ? "text-white" : "text-[#172B4D]"
            } md:flex items-center`}
        >
          <li>Servicios</li>
          <li>Industrias</li>
          <li className="flex items-center gap-1 semibold ">
            BLOG
          <AnnouncementOutlinedIcon className="h-4 w-4 text-[hsl(215,76%,73%)] subtitle-icon-shadow" />
          </li>

          <Link href="#book-a-call" >
            <button className="shine-button overflow-hidden relative bg-gradient-to-r from-blue-600 to-blue-800 py-2 px-3.5 rounded-full flex gap-1 items-center text-white">
              Hablar con especialista
          <PersonAddAltIcon className="w-4 h-4" />
              <p className="shine-button"></p>

            </button>
          </Link>
        </ul>



        {/* Botón para abrir/cerrar el menú */}
        <div onClick={toggleMenu} className="cursor-pointer md:hidden">
          <MenuIcon
            className={`${version === "light" ? "text-white" : "text-blue-400"}`}
          />
        </div>


      </nav>
      {isMenuOpen && (
        <div className="z-[999] p-6 fixed inset-0 flex flex-col  w-full h-screen bg-blue-900">
          <div className="flex items-center justify-between gap-10">
            <figure>
              <Image src="/LOGO.png" height={80} width={100} alt="logo" />
            </figure>
            <ClearRoundedIcon onClick={toggleMenu} className="text-white text-2xl" />
          </div>


          <ul className="mt-20 flex flex-col text-xl items-center justify-center gap-4 font-light text-white">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={staggeredVariants}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};

export default Navbar;

const staggeredVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};